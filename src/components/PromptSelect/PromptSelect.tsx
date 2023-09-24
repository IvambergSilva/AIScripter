import { useEffect, useState } from "react"
import { Select } from "../../pages/Home.styles"
import { ChevronsUpDown } from "lucide-react"
import { Options, Prompts } from "./PromptSelect.style"
import { api } from "../../lib/axios"

interface IPrompt {
    id: string
    title: string
    template: string
}

interface IPromptSelecteProps {
    onPromptSelected: (template: string) => void
}

export default function PromptSelect(props: IPromptSelecteProps) {
    const [handlePrompts, sethandlePrompts] = useState(false)

    const [prompt, setPrompt] = useState('Selecione um prompt...')

    const [promptOptions, setPromptOptions] = useState<IPrompt[] | null>(null)

    useEffect(() => {
        api.get('/prompts').then(res => setPromptOptions(res.data))
    }, [])

    function handlePormptSlected({ id, title }: IPrompt) {
        setPrompt(title)

        const selectedPrompt = promptOptions?.find(prompt => prompt.id === id)

        if (!selectedPrompt) return

        props.onPromptSelected(selectedPrompt.template)
    }

    return (
        <section>
            <label htmlFor="transcriptionPrompt">Prompt</label>

            <Select
                onClick={() => sethandlePrompts(!handlePrompts)}
            >
                <p>{prompt}</p>
                <p><ChevronsUpDown size={14} /></p>

                {handlePrompts && <Options>
                    {promptOptions?.map((prompt) => {
                        const newOption = {
                            id: prompt.id,
                            title: prompt.title,
                            template: prompt.template
                        }
                        return (
                            <Prompts
                                key={prompt.id}
                                onClick={() => handlePormptSlected(newOption)}
                            >{prompt.title}</Prompts>
                        )
                    })}
                </Options>}
            </Select>
        </section>
    )
}
