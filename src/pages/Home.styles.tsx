import styled from 'styled-components'
import { Base, Highlight } from '../styles/Variables'

export const Flex = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: ${Base.gray_500};
    color: ${Base.gray_100};
`

export const HeaderContainer = styled(Flex)`
    border-bottom: 1px solid ${Base.gray_300};
    justify-content: space-between;
    padding: 2rem ;

    h1 {
        font-size: 2rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 2rem;

        span {
            font-size: 1rem;
            color: ${Base.gray_200};
        }
    }
`

interface ISeparatorProps {
    width?: string;
    direction?: string;
}

export const Separator = styled.div<ISeparatorProps>`
    height: 0.1rem;
    width: ${(props) => {
        return props.width ? `${props.width}rem` : `100%`
    }};
    background: ${Base.gray_300};
    transform: ${(props) => {
        return props.direction === 'vertical' ? 'rotate(90deg)' : ''
    }};
`

export const MainContainer = styled.div`
    display: flex;
    padding: 2.4rem;
    gap: 2.4rem;
    flex: 1;
    
    section {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1.5rem;
        
        div {
            height: 100%;
            display: grid;
            gap: 1.6rem;
        }
        
        p {
            font-size: 1rem;
            text-align: justify;
            
            code {
                color: ${Highlight.purple_light};
            }
        }
    }
    
    aside {
        width: 32rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            > label {
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

                &:hover {
                    background: ${Base.gray_400};
                    color: ${Base.gray_100};
                }
            }
            
            div {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                
                input[type=range] {
                    width: 100%;
                    height: 1rem;
                    appearance: none;
                    background: ${Base.gray_300};
                    border-radius: 1rem;
                    overflow: hidden;
                    outline: none;

                    &::-webkit-slider-thumb {
                        appearance: none;
                        height: 1rem;
                        aspect-ratio: 1 / 1;
                        border-radius: 50%;
                        background: ${Base.gray_100};
                        appearance: none;
                        box-shadow: -407px 0 0 400px ${Base.gray_200};
                    }
                }

                label {
                    font-size: 1.5rem;
                }

                textarea {
                    line-height: 130%;
                    min-height: 8rem;
                    background: transparent;
                    border-radius: 1rem;
                    outline: none;
                    border: 1px solid ${Base.gray_300};
                    width: 100%;
                    padding: 1rem;
                    resize: vertical;

                    &:focus {
                        border: 1px solid ${Highlight.purple_light};
                    }    
                }

                span {
                    font-size: 1rem;
                    font-style: italic;
                    line-height: 130%;
                }
            }
        }
    }
`

interface ISelectProps {
    width: string;
}

export const Select = styled(Flex) <ISelectProps>`
    width: ${(props) => {
        return props.width.slice(-1) === '%' ? `${props.width}` : `${props.width}rem`
    }};
    background: ${Base.gray_400};
    border: 1px solid ${Base.gray_300};
    border-radius: 1rem;
    outline: none;
    padding: 1.2rem;
    cursor: pointer;
    
    p {
        color: ${Base.gray_200};
        font-size: 1.3rem;
        align-self: flex-start;
    }
`

export const Textarea = styled.div`
    flex: 0;
    height: 100%;
    textarea {
        padding: 1.6rem;
        border: 1px solid ${Base.gray_300};
        background: transparent;
        border-radius: 1rem;
        outline: none;
        resize: none;
        width: 100%;
        height: 100%;
        color: ${Base.gray_200};
        line-height: 160%;
        
        &:focus {
            border: 1px solid ${Highlight.purple_light};
        }
    }
`