import { React, useState } from 'react';

import './index.css';

const App = () => {

  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clearCalculator = () => {
    setResult('')
  }

  const backSpace = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  return (
    <div className='container'>
      <form>
        <input type='text' value={result.length > 20 ? 'Error' : result}></input>
      </form>

      <div className='keypad'>
        <button className='clear' onClick={clearCalculator} >Clear</button>
        <button className='backspace' onClick={backSpace} >C</button>
        <button onClick={handleClick} name='/' >&divide;</button>
        <button className='btnnumbers' onClick={handleClick} name='7' >7</button>
        <button className='btnnumbers' onClick={handleClick} name='8' >8</button>
        <button className='btnnumbers' onClick={handleClick} name='9' >9</button>
        <button onClick={handleClick} name='*' >&times;</button>
        <button className='btnnumbers' onClick={handleClick} name='4' >4</button>
        <button className='btnnumbers' onClick={handleClick} name='5' >5</button>
        <button className='btnnumbers' onClick={handleClick} name='6' >6</button>
        <button onClick={handleClick} name='-' >&ndash;</button>
        <button className='btnnumbers' onClick={handleClick} name='1' >1</button>
        <button className='btnnumbers' onClick={handleClick} name='2' >2</button>
        <button className='btnnumbers' onClick={handleClick} name='3' >3</button>
        <button onClick={handleClick} name='+' >+</button>
        <button className='zerobtn' onClick={handleClick} name='0' >0</button>
        <button className='btnnumbers' onClick={handleClick} name='.' >.</button>
        <button onClick={calculate}> = </button>
      </div>
    </div>
  );
}

export default App;