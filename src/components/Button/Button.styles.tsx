import styled, { css, keyframes } from 'styled-components'
import { Base, Feedback } from '../../styles/Variables'

interface IButtonPropsStyles {
    status?: "waiting" | "success" | "uploading" | "generating" | "converting" | "execute" | undefined;
}

const colorStatus = {
    waiting: `${Base.gray_100}`,
    success: `${Feedback.success}`,
    uploading: `${Base.gray_200}`,
    generating: `${Base.gray_200}`,
    converting: `${Base.gray_200}`,
    execute: `${Base.gray_100}`
}

const cursorStatus = {
    waiting: 'pointer',
    success: 'not-allowed',
    uploading: 'not-allowed',
    generating: 'not-allowed',
    converting: 'not-allowed',
    execute: 'pointer',
}

const IconSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const ButtonContainer = styled.button<IButtonPropsStyles>`
    background: ${(props) => {
        if (props.status !== undefined) {
            return colorStatus[props.status]
        }
    }};
    color:${Base.gray_400};
    cursor: ${(props) => {
        if (props.status !== undefined) {
            return cursorStatus[props.status]
        }
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    gap: 1rem;
    border: 1px solid ${Base.gray_200};
    height: 3.5rem;
    padding: 0.5rem 1.3rem;
    border-radius: 0.5rem;
    border: 1px solid ${Base.gray_200};

    span {
        display: flex;
        align-items: center;
        animation: ${(props) => {
        const animation = css`${IconSpin} 2s infinite linear`
        return props.status === 'converting' ? animation : props.status === 'generating' ? animation : ''
    }}
    }
`