import styled from "styled-components";
import { Base } from "../../styles/Variables";

export const VideoContainer = styled.label`
    border: 1px dashed ${Base.gray_300};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    border-radius: 1rem;
    aspect-ratio: 16 / 9;
    cursor: pointer;
    font-size: 1.5rem;
    position: relative;
    
    video {
        pointer-events: none;
        position: absolute;
        inset: 0;
        height: 100%;
        border-radius: 1rem;
    }

    &:hover {
        background: ${Base.gray_400};
        color: ${Base.gray_100};
    }
`