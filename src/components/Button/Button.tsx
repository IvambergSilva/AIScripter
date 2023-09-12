import { ButtonContainer } from "./Button.styles";

interface IButtonProps {
    text: string
    icon: React.ReactNode
}

export default function Button({ text, icon }: IButtonProps) {
    return (
        <ButtonContainer>
            {text}
            {icon}
        </ButtonContainer>
    )
}
