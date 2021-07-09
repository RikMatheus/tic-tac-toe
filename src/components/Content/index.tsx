import React from 'react'

import Tictactoe from '../Tictactoe'

import { Container } from './styles'

export default function Content(){
  return (
    <Container>
      <div className="frame">
        <Tictactoe/>
      </div>
    </Container>
  );
}