import { ButtonContainer } from "./Button.styles";

interface IButtonProps {
    text: string
    icon?: React.ReactNode
    color?: string
}

export default function Button({ text, icon, color }: IButtonProps) {
    return (
        <ButtonContainer
            bgColor={color}
        >
            {text} {icon}
        </ButtonContainer>
    )
}
