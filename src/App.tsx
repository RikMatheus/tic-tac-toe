import { useState } from 'react';

import Header from './components/Header'
import Content from './components/Content'

import './index.css'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
