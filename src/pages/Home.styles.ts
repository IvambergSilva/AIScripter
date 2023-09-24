import styled from 'styled-components'
import { Base, Highlight } from '../styles/Variables'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${Base.gray_500};
    color: ${Base.gray_100};
`

let sizeGap = '1rem'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${Base.gray_300};
    justify-content: space-between;
    padding: 0 2.4rem;
    height: 4.5rem;

    h1 {
        font-size: 2rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 2rem;

        span {
            font-size: 1.2rem;
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
    padding: 1rem 2.4rem;
    gap: 2.4rem;
    
    article {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        flex: 1;
        
        div {
            height: 100%;
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 1.2rem;
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
        justify-content: space-between;
        
        form {
            display: flex;
            flex-direction: column;
            gap: ${sizeGap};
            
            &:not(&:first-of-type) {
                padding-top: ${sizeGap};
            }

            section {
                display: flex;
                flex-direction: column;
                gap: ${sizeGap};

                label {
                    font-size: 1.4rem;
                }

                textarea {
                    line-height: 130%;
                    min-height: 6rem;
                    background: transparent;
                    border-radius: 1rem;
                    outline: none;
                    border: 1px solid ${Base.gray_300};
                    width: 100%;
                    padding: 1rem;
                    resize: vertical;
                    color: ${Base.gray_100};

                    &:focus {
                        border: 1px solid ${Highlight.purple_light};
                    }    
                }
            }

            span {
                font-size: 1rem;
                font-style: italic;
                line-height: 130%;
            }
        }
    }
`

export const Textarea = styled.div`
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
        color: ${Base.gray_100};
        line-height: 160%;
        box-shadow: inset 1px 1px 1px #FFF;
        &:focus {
            border: 1px solid ${Highlight.purple_light};
        }
        
        &::-webkit-scrollbar {
            background: ${Base.gray_400};
            width: 0.5rem;
        }
        
        &::-webkit-scrollbar-thumb {
            background: ${Base.gray_200};
            border-radius: 0.5rem;
        }
    }
`

export const Select = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${Base.gray_400};
    border: 1px solid ${Base.gray_300};
    border-radius: 0.6rem;
    outline: none;
    min-height: 3.5rem;
    cursor: pointer;
    position: relative;
    
    p {
        color: ${Base.gray_200};
        font-size: 1.3rem;
        padding: 0 1.2rem;
    }
`

export const Range = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${sizeGap};
    
    input[type=range] {
        width: 100%;
        height: 1rem;
        background: ${Base.gray_300};
        border-radius: 1rem;
        outline: none;
    }
`