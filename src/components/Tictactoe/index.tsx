import React, { useState } from "react"

import { ReactComponent as Cross } from '../../assets/cross.svg'
import { ReactComponent as Circle } from '../../assets/circle.svg'
import { ReactComponent as Return } from '../../assets/return.svg'

import { Container, SelectButton } from './styles'

type Props = {
    changeScreen: (name:string) => void,
    selectFirst?: (selected:string) => void,
    selected?: string,
    changeCurrent?: (player:string) => void,
    current?: string,
}

export default function Tictactoe() {
    const [screen, setScreen] = useState('home')
    const [first, setFirst] = useState('') //first to play. circle, cross
    const [current, setCurrent] = useState('') //current player. circle, cross

    function handleScreenChange(screenName:string) {
        setScreen(screenName)
    }

    function handleFirstSelection(selected:string) {
        setFirst(selected)
        setCurrent(selected)
    }

    function handleCurrentChange(player:string) {
        setCurrent(player)
    }

    return (
        <Container>
            {
                {
                    'home': <Home changeScreen={handleScreenChange} />,
                    'selection': <Selection changeScreen={handleScreenChange} selectFirst={handleFirstSelection} changeCurrent={handleCurrentChange} selected={first}/>,
                    'game': <Game changeScreen={handleScreenChange} changeCurrent={handleCurrentChange} current={current} />,
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

function Selection({ changeScreen, selectFirst, selected, changeCurrent } : Props) {
    return (
        <>
            <h3 className="title">tic-tac-toe</h3>
            <h5 className="subtitle">choose who starts</h5>
            {
                selectFirst &&
                <SelectButton className="selection" onClick={() => selectFirst('cross')} select={selected === 'cross'}><Cross stroke="#CFF0FF"/></SelectButton>
            }
            <p className="text">or</p>
            {
                selectFirst &&
                <SelectButton className="selection" onClick={() => selectFirst('circle')} select={selected === 'circle'}><Circle stroke="#CFF0FF"/></SelectButton>
            }
            <button className="start" onClick={() => changeScreen('game')}><p>START</p></button>
        </>
    )
}

function Game({ changeScreen, changeCurrent, current } : Props) {
    const [sq1, setsq1] = useState('')
    const [sq2, setsq2] = useState('')
    const [sq3, setsq3] = useState('')
    const [sq4, setsq4] = useState('')
    const [sq5, setsq5] = useState('')
    const [sq6, setsq6] = useState('')
    const [sq7, setsq7] = useState('')
    const [sq8, setsq8] = useState('')
    const [sq9, setsq9] = useState('')

    function handleSquares(square:number) {
        switch(square) {
            default:
                if(sq1 === '' && current != null && changeCurrent != null){
                    setsq1(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
            case 2:
                if(sq2 === '' && current != null && changeCurrent != null){
                    setsq2(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
            case 3:
                if(sq3 === '' && current != null && changeCurrent != null){
                    setsq3(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
            case 4:
                if(sq4 === '' && current != null && changeCurrent != null){
                    setsq4(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
            case 5:
                if(sq5 === '' && current != null && changeCurrent != null){
                    setsq5(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
            case 6:
                if(sq6 === '' && current != null && changeCurrent != null){
                    setsq6(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
            case 7:
                if(sq7 === '' && current != null && changeCurrent != null){
                    setsq7(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
            case 8:
                if(sq8 === '' && current != null && changeCurrent != null){
                    setsq8(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
            case 9:
                if(sq9 === '' && current != null && changeCurrent != null){
                    setsq9(current)
                    current === 'cross' ? changeCurrent('circle') : changeCurrent('cross')
                }
            break
        }
        
    }

    return (
        <>
            <h4 className="title">tic-tac-toe</h4>
            <h3 className="current">{current} turn</h3>
            <div className="game">
                <div className="square" onClick={() => handleSquares(1)}>{sq1}</div>
                <div className="square" onClick={() => handleSquares(2)}>{sq2}</div>
                <div className="square" onClick={() => handleSquares(3)}>{sq3}</div>
                <div className="square" onClick={() => handleSquares(4)}>{sq4}</div>
                <div className="square" onClick={() => handleSquares(5)}>{sq5}</div>
                <div className="square" onClick={() => handleSquares(6)}>{sq6}</div>
                <div className="square" onClick={() => handleSquares(7)}>{sq7}</div>
                <div className="square" onClick={() => handleSquares(8)}>{sq8}</div>
                <div className="square" onClick={() => handleSquares(9)}>{sq9}</div>
            </div>
            <div className="result">
                <h5>cross wins!</h5>
                <button className="return" onClick={() => changeScreen('home')}><Return stroke="#84D2F6"/></button>
            </div>
        </>
    )
}