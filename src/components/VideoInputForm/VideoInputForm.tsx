import { FileVideo } from "lucide-react";
import { Separator } from "../../pages/Home.styles";
import Button from "../Button/Button";
import { VideoContainer } from "./VideoInputForm.style";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";
import { getFFmpeg } from "../../lib/ffmpeg";
import { fetchFile } from '@ffmpeg/util'
import { api } from "../../lib/axios";

type Status = 'waiting' | 'converting' | 'uploading' | 'generating' | 'success'

const statusMessages = {
    converting: 'Convertendo...',
    uploading: 'Carregando...',
    generating: 'Transcrevendo...',
    success: 'Sucesso!'
}

interface IVideoInputFormProps {
    onVideoUploaded: (videoId: string) => void
}

export default function VideoInputForm(props: IVideoInputFormProps) {
    const [videoFile, setVideoFile] = useState<File | null>(null)

    const [status, setStatus] = useState<Status>('waiting')

    const promptInputRef = useRef<HTMLTextAreaElement>(null)

    function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.currentTarget

        if (!event) return

        if (!files) return
        
        const selectedFile = files[0]

        setVideoFile(selectedFile)
    }

    async function convertVideoToAudio(video: File) {
        console.log('Convert start');

        const ffmpeg = await getFFmpeg()

        await ffmpeg.writeFile('input.mp4', await fetchFile(video))

        ffmpeg.on('progress', progress => {
            console.log('Convert progress ' + Math.round(progress.progress * 100));
        })

        await ffmpeg.exec([
            '-i',
            'input.mp4',
            '-map',
            '0:a',
            '-b:a',
            '20k',
            '-acodec',
            'libmp3lame',
            'output.mp3'
        ])

        const data = await ffmpeg.readFile('output.mp3')

        const audioFileBlob = new Blob([data], { type: 'audio.mpeg' })

        const audioFile = new File([audioFileBlob], 'audio.mp3', {
            type: 'audio/mpeg'
        })

        console.log('Convert finish')

        return audioFile
    }

    async function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const prompt = promptInputRef.current?.value

        if (!videoFile) return

        setStatus('converting')

        const audioFile = await convertVideoToAudio(videoFile)

        const data = new FormData()

        setStatus('uploading')

        data.append('file', audioFile)

        const response = await api.post('/videos', data)

        const videoId = response.data.video.id

        setStatus('generating')

        await api.post(`videos/${videoId}/transcription`, {
            prompt,
        })

        setStatus('success')

        props.onVideoUploaded(videoId)
    }


    const previewURL = useMemo(() => {
        if (!videoFile) return null
        return URL.createObjectURL(videoFile)
    }, [videoFile])

    return (
        <form onSubmit={handleUploadVideo}>
            <VideoContainer htmlFor="video">
                {previewURL ? (
                    <video
                        src={previewURL} controls={false}
                    >
                    </video>
                ) : (
                    <>
                        <FileVideo />
                        Selecione um vídeo
                    </>
                )}

                <input type="file" name="video" id="video" accept="video/mp4" hidden onChange={handleFileSelect} />
            </VideoContainer>

            <Separator />

            <section>
                <label htmlFor="transcriptionPrompt">Prompt de transcrição</label>

                <textarea
                    name="transcriptionPrompt"
                    id="transcription_prompt"
                    placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por vírgulas (,)." ref={promptInputRef}
                    disabled={status !== 'waiting'}
                ></textarea>

                <Button
                    status={status}
                    text={
                        status === 'waiting' 
                        ? 'Carregar vídeo'
                        : statusMessages[status]
                    }
                />
            </section>
        </form >
    )
}
