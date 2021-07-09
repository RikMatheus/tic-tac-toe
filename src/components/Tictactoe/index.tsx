import React, { useState } from "react"

import { ReactComponent as Cross } from '../../assets/cross.svg'
import { ReactComponent as Circle } from '../../assets/circle.svg'
import { ReactComponent as Return } from '../../assets/return.svg'

import { Container, SelectButton } from './styles'

type Props = {
    changeScreen: (name:string) => void,
    selectFirst?: (selected:number) => void,
    selected?: number,
}

export default function Tictactoe() {
    const [screen, setScreen] = useState('home')
    const [first, setFirst] = useState(0) //first to play. 0: circle, 1: cross

    function handleScreenChange(screenName:string) {
        setScreen(screenName)
    }

    function handleFirstSelection(selected:number) {
        setFirst(selected)
        console.log(selected)
    }

    return (
        <Container>
            {
                {
                    'home': <Home changeScreen={handleScreenChange} />,
                    'selection': <Selection changeScreen={handleScreenChange} selectFirst={handleFirstSelection} selected={first}/>,
                    'game': <Game changeScreen={handleScreenChange} />,
                }[screen] 
            }        
        </Container>
    )
}

function Home({ changeScreen } : Props) {
    return (
        <>
            <h3 className="title">tic-tac-toe</h3>
            <button className="start" onClick={() => changeScreen('selection')}><p>START</p></button>
        </>
    )
}

function Selection({ changeScreen, selectFirst, selected } : Props) {
    return (
        <>
            <h3 className="title">tic-tac-toe</h3>
            <h5 className="subtitle">choose who starts</h5>
            {
                selectFirst &&
                <SelectButton className="selection" onClick={() => selectFirst(1)} select={selected === 1}><Cross stroke="#CFF0FF"/></SelectButton>
            }
            <p className="text">or</p>
            {
                selectFirst &&
                <SelectButton className="selection" onClick={() => selectFirst(0)} select={selected === 0}><Circle stroke="#CFF0FF"/></SelectButton>
            }
            <button className="start" onClick={() => changeScreen('game')}><p>START</p></button>
        </>
    )
}

function Game({ changeScreen } : Props) {
    return (
        <>
            <h4 className="title">tic-tac-toe</h4>
            <h3 className="current">cross turn</h3>
            <div className="game">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
            <div className="result">
                <h5>cross wins!</h5>
                <button className="return" onClick={() => changeScreen('home')}><Return stroke="#84D2F6"/></button>
            </div>
        </>
    )
}