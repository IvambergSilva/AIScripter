import Button from "../components/Button/Button";
import { Github } from 'lucide-react'
import { HeaderContainer, HomeContainer, MainContainer, Range, Select, Separator, Textarea } from "./Home.styles";
import VideoInputForm from "../components/VideoInputForm/VideoInputForm";
import PromptSelect from "../components/PromptSelect/PromptSelect";
import Link from "../components/Link/Link";
import { useState } from "react";
import { useCompletion } from 'ai/react'

export default function Home() {

    const [temperature, setTemperature] = useState(0.5)

    const [videoId, setVideoId] = useState<string | null>(null)

    const { input, setInput, handleInputChange, handleSubmit, completion, isLoading } = useCompletion({
        api: 'http://localhost:3333/ai/complete',
        body: {
            videoId,
            temperature,
        },
        headers: {
            'Content-type': 'application/json'
        }
    })

    return (
        <HomeContainer>
            <HeaderContainer>
                <h1>AI Scripter</h1>
                <div>
                    <span>Desenvoldido com 💙 no NLW da Rocketseat</span>
                    <Separator
                        width='3.5'
                        direction="vertical"
                    />
                    <Link 
                        text="GitHub"
                        icon={<Github />} 
                        link="https://github.com/IvambergSilva"
                    />
                </div>
            </HeaderContainer>
            <MainContainer>
                <article>
                    <div>
                        <Textarea>
                            <textarea
                                placeholder="Inclua o prompt para a IA..."
                                value={input}
                                onChange={handleInputChange}
                            ></textarea>
                        </Textarea>
                        <Textarea>
                            <textarea
                                placeholder="Resultado gerado pela IA..."
                                readOnly
                                value={completion}
                            ></textarea>
                        </Textarea>
                    </div>
                    <p>Lembre-se: você tem a opção de utilizar a variável <code>{'{transcription}'}</code> no seu prompt para acrescentar o conteúdo da transcrição do vídeo escolhido.</p>
                </article>
                <aside>
                    <VideoInputForm
                        onVideoUploaded={setVideoId}
                    />

                    <form onSubmit={handleSubmit}>
                        <Separator />

                        <PromptSelect
                            onPromptSelected={setInput}
                        />

                        <Separator />

                        <section>
                            <label htmlFor="transcriptionPrompt">Modelo</label>

                            <Select>
                                <p>GPT 3.5-turbo 16k</p>
                            </Select>

                            <span>Você poderá customizar essa opção em breve</span>
                        </section>

                        <Separator />

                        <section>
                            <Range>
                                <label htmlFor="">Temperatura</label>
                                <input
                                    type="range"
                                    name="temperature"
                                    id="temperature"
                                    value={temperature}
                                    min={0} max={1} step={0.1}
                                    onChange={(e) => setTemperature(Number(e.target.value))}
                                />
                                <span>Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
                            </Range>
                        </section>

                        <Separator />
                        <Button
                            text='Executar'
                            status={isLoading ? 'generating' : 'execute'}
                        />
                    </form>
                </aside>
            </MainContainer>
        </HomeContainer>
    )
}
