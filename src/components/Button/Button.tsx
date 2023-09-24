import { ArrowUpToLine, Check, Loader, RefreshCcw, Upload, Wand2 } from "lucide-react";
import { ButtonContainer } from "./Button.styles";

interface IButtonProps {
    text: string
    status?: "waiting" | "success" | "converting" | "uploading" | "generating" | "execute" | undefined;
}

const iconSize = 16

const iconStatus = {
    waiting: <Upload size={iconSize} />,
    converting: <RefreshCcw size={iconSize} />,
    uploading: <ArrowUpToLine size={iconSize} />,
    generating: <Loader size={iconSize} />,
    success: <Check size={iconSize}/>,
    execute: <Wand2 size={iconSize} />
}

export default function Button({ text, status }: IButtonProps) {
    status === undefined ? status = 'waiting' : status

    return (
        <ButtonContainer
            type="submit"
            status={status}
        >
            {text}
            <span>{iconStatus[status]}</span>
        </ButtonContainer>
    )
}
