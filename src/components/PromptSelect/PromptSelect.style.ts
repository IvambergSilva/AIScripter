import styled from "styled-components";
import { Base } from "../../styles/Variables";

export const Options = styled.div`
    z-index: 1;
    position: absolute;
    top: 4.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Prompts = styled.div`
    cursor: pointer;
    border: 1px solid ${Base.gray_300};
    background: ${Base.gray_500};
    width: 100%;
    padding: 1.2rem;
    text-align: left;
    color: ${Base.gray_100};
    font-size: 1.3rem;
    
    &:first-child {
        border-radius: 0.6rem 0.6rem 0 0;
    }

    &:last-child {
        border-radius: 0 0 0.6rem 0.6rem;
    }

    &:hover {
        background: ${Base.gray_600};
    }
`