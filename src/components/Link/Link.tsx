import { Ancora } from "./Link.style";

interface ILinkProps {
    text: string
    icon?: React.ReactNode
    link: string
}

export default function LinkButton({ text, icon, link }: ILinkProps) {
    return (
        <Ancora href={link} target="_blank">
            {text}
            <span>{icon}</span>
        </Ancora>
    )
}
