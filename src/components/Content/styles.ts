import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 6rem;
    background: #333;
    min-height: calc(100vh - 3.5rem);

    display: flex;
    align-items: center;
    justify-content: center;

    .frame {
        padding: 2.5rem .5rem;
        border-radius: 1.5rem;
        background: #c3c3c3;
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);
    }
`