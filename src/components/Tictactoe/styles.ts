import styled from "styled-components"

export const Container = styled.div`
    width: 400px;
    height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgb(33,89,123);
    background: linear-gradient(180deg, rgba(33,89,123,1) 0%, rgba(13,51,74,1) 100%);

    .title {
        color: white;
        font-size: 2.5rem;
        margin-bottom: .25rem;
    }

    .subtitle {
        color: white;
        font-size: 1.2rem;
        margin: 0;
        margin-bottom: 2rem;
    }

    .text {
        color: white;
        font-size: 1rem;
    }

    .start {
        padding: .5rem 2rem;
        background: #386FA4;
        border-radius: 12px;
        box-shadow: 0px 5px 0px 0px rgba(17,55,78,1);
        border: 0;
        margin: 1rem 0;

        font-size: 1rem;
        color: white;
    }

    .start p {
        margin: 0;
    }

    .game {
        width: 21rem;
        height: 21rem;
        background: #59A5D8;
        border-radius: 24px;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        padding: .25rem;
    }

    .current {
        color: white;
        margin: 0;
        margin-bottom: 1rem;
    }

    .square {
        width: 6rem;
        height: 6rem;
        background: #84D2F6;
        border-radius: 15px;
    }

    .result {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .result h5 {
        font-size: 1.7rem;
        color: white;
        margin-top: 1.5rem;
        margin-bottom: .5rem;
    }

    .result button {
        padding: .5rem 2rem;
        background: #386FA4;
        border-radius: 12px;
        border: 0;
        margin-bottom: 1rem;
    }
`

export const SelectButton = styled.button<{ select: boolean }>`
    border-radius: 24px;
    border: 0;
    animation: all 0.2s ease-in;

    ${props => props.select? `
        width: 75%;
        height: 12rem;
        background: #59A5D8;
    ` : `
        width: 70%;
        height: 10rem;
        background: #498FBD;
    `}
`