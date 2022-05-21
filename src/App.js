import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import CardQuote from './components/CardQuote';

function App() {

  const [quote, setQuote] = useState({})

  const getQuotes = async () => {
    const url = 'https://breakingbadapi.com/api/quote/random'
    const resp = await axios.get(url)
    setQuote(resp.data[0])

    console.log(resp.data[0])
  }
  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <CardQuote info={quote} />
        <button onClick={() => getQuotes()} >
          Click
        </button>
      </header>
    </div>
  );
}

export default App;
