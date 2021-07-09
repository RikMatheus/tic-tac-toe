import React from "react"
import { Container } from './styles'

type Props = {
    texto?: string,
}

export default function Game({texto} : Props){
    return (
        <Container>
            <div className="menu"></div>
            <div className="title">
                <h3>tic-tac-toe</h3>
            </div>
            <div className="search"></div>
        </Container>
    )
}