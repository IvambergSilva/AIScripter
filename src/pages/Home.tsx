import Button from "../components/Button/Button";

import { Github, FileVideo, Upload, Wand2, ChevronsUpDown } from 'lucide-react'
import { HeaderContainer, HomeContainer, MainContainer, Options, Prompts, Range, Select, Separator, Textarea, VideoContainer } from "./Home.styles";
import { useState } from "react";

export default function Home() {
    const [handlePrompts, sethandlePrompts] = useState(true)

    const promptOptions = [
        { id: '1', text: 'Título do vídeo' },
        { id: '2', text: 'Descrição do vídeo' },
    ]

    const [prompt, setPrompt] = useState('Selecione um prompt...')

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
                    <Button text='GitHub' icon={<Github />} />
                </div>
            </HeaderContainer>
            <MainContainer>
                <article>
                    <div>
                        <Textarea>
                            <textarea
                                name="" id=""
                                placeholder="Inclua o prompt para a IA..."></textarea>
                        </Textarea>
                        <Textarea>
                            <textarea
                                name="" id=""
                                placeholder="Resultado gerado pela IA..." readOnly
                            ></textarea>
                        </Textarea>
                    </div>
                    <p>Lembre-se: você tem a opção de utilizar a variável <code>{'{transcription}'}</code> no seu prompt para acrescentar o conteúdo da transcrição do vídeo escolhido.</p>
                </article>
                <aside>
                    <form>
                        <VideoContainer htmlFor="video">
                            <FileVideo />
                            Selecione um vídeo
                            <input type="file" name="video" id="video" accept="video/mp4" hidden />
                        </VideoContainer>

                        <Separator />

                        <section>
                            <label htmlFor="transcriptionPrompt">Prompt de transcrição</label>

                            <textarea name="transcriptionPrompt" id="transcription_prompt" placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por vírgulas (,)."></textarea>

                            <Button
                                text="Carregar vídeo"
                                icon={<Upload />}
                                color='light'
                            />
                        </section>

                        <Separator />

                        <section>
                            <label htmlFor="transcriptionPrompt">Prompt</label>

                            <Select
                                onClick={() => sethandlePrompts(!handlePrompts)}
                            >
                                <p>{prompt}</p>
                                <p><ChevronsUpDown size={14} /></p>

                                {handlePrompts && <Options>
                                    {promptOptions.map((category) => {
                                        return (
                                            <Prompts
                                                onClick={() => setPrompt(category.text)}
                                            >{category.text}</Prompts>
                                        )
                                    })}
                                </Options>}
                            </Select>
                        </section>

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
                                <input type="range" name="temperature" id="temperature" min={0} max={1} step={0.1} />
                                <span>Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
                            </Range>
                        </section>

                        <Separator />

                        <Button
                            text="Executar"
                            icon={<Wand2 size={16} />}
                            color='light'
                        />
                    </form>
                </aside>
            </MainContainer>
        </HomeContainer>
    )
}
