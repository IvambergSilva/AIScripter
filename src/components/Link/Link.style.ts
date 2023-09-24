import styled from "styled-components"
import { Base } from "../../styles/Variables"

export const Ancora = styled.a`
    text-decoration: none;
    background: ${Base.gray_300};
    color: ${Base.gray_100};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    gap: 1rem;
    border: 1px solid ${Base.gray_200};
    border-radius: 0.5rem;
    padding: 0.5rem 1.3rem;
    height: 3.5rem;
`