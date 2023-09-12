import styled from 'styled-components'

export const Flex = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderContainer = styled(Flex)`
    border-bottom: 1px solid #454545;
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
        }
    }
` 

export const Separator = styled.div`
    width: 0.1rem;
    height: 3.5rem;
    background: #454545;
`