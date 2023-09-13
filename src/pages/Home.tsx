import Button from "../components/Button/Button";

import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'
import { HeaderContainer, HomeContainer, MainContainer, Select, Separator, Textarea } from "./Home.styles";

export default function Home() {

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
                <section>
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
                </section>
                <aside>
                    <form>
                        <label htmlFor="video">
                            <FileVideo />
                            Selecione um vídeo
                        </label>

                        <input type="file" name="video" id="video" accept="video/mp4" hidden />
                        <Separator />

                        <div>
                            <label htmlFor="transcriptionPrompt">Prompt de trasncrição</label>
                            <textarea name="transcriptionPrompt" id="transcription_prompt" placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por vírgulas (,)."></textarea>
                        </div>
                    </form>
                    <Button
                        text="Carregar vídeo"
                        icon={<Upload />}
                        color='light'
                    />

                    <Separator />

                    <form>
                        <div>
                            <label htmlFor="transcriptionPrompt">Modelo</label>
                            <Select
                                width="100%"
                            >
                                <p>GPT 3.5-turbo 16k</p>
                            </Select>
                            <span>Você poderá customizar essa opção em breve</span>
                        </div>

                        <Separator />

                        <div>
                            <label htmlFor="">Temperatura</label>
                            <input type="range" name="temperature" id="temperature" min={0} max={1} step={0.1} />
                            <span>Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
                        </div>

                        <Separator />
                    </form>

                    <Button
                        text="Executar"
                        icon={<Wand2 size={16} />}
                        color='light'
                    />
                </aside>
            </MainContainer>
        </HomeContainer>
    )
}
