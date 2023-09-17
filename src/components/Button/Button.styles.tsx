import styled from 'styled-components'
import { Base } from '../../styles/Variables'

interface IButtonPropsStyles {
    bgColor?: string
}

export const ButtonContainer = styled.div<IButtonPropsStyles>`
    background: ${(props) => {
        return props.bgColor === 'light' ? `${Base.gray_100}` : `${Base.gray_300}`
    }};

    color: ${(props) => {
        return props.bgColor === 'light' ? `${Base.gray_400}` : `${Base.gray_100}`
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.3rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    border: none;
    gap: 1rem;
    border: 1px solid ${Base.gray_200};
    cursor: pointer;
    height: 3.5rem;
`