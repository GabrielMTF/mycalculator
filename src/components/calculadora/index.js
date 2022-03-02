import { React, useState } from 'react';

import { Button, Input, ButtonNum, ButtonZero, ButtonBs, ButtonClear, Container, Kaypad } from './style.js';

const Calc = () => {

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
        } catch (err) {
            setResult("Error")
        }
    }

    return (
        <Container>
            <Input type='text' value={result.length > 20 ? 'Error' : result}></Input>
            <Kaypad>
                <ButtonClear onClick={clearCalculator} >Clear</ButtonClear>
                <ButtonBs onClick={backSpace} >C</ButtonBs>
                <Button onClick={handleClick} name='/' >&divide;</Button>
                <ButtonNum onClick={handleClick} name='7' >7</ButtonNum>
                <ButtonNum onClick={handleClick} name='8' >8</ButtonNum>
                <ButtonNum onClick={handleClick} name='9' >9</ButtonNum>
                <Button onClick={handleClick} name='*' >&times;</Button>
                <ButtonNum onClick={handleClick} name='4' >4</ButtonNum>
                <ButtonNum onClick={handleClick} name='5' >5</ButtonNum>
                <ButtonNum onClick={handleClick} name='6' >6</ButtonNum>
                <Button onClick={handleClick} name='-' >&ndash;</Button>
                <ButtonNum onClick={handleClick} name='1' >1</ButtonNum>
                <ButtonNum onClick={handleClick} name='2' >2</ButtonNum>
                <ButtonNum onClick={handleClick} name='3' >3</ButtonNum>
                <Button onClick={handleClick} name='+' >+</Button>
                <ButtonZero onClick={handleClick} name='0' >0</ButtonZero>
                <ButtonNum onClick={handleClick} name='.' >.</ButtonNum>
                <Button onClick={calculate}> = </Button>
            </Kaypad>
        </Container>
    );
}

export default Calc;