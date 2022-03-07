import React, { useState } from 'react';
import Input from '../../components/Input'
import KeypadCalc from '../../components/Keypad'

import { Container } from './styles'

const Calculadora = () => {

const [result, setResult] = useState('')

    return (
        <Container>
            <Input result={result} setResult={setResult} />
            <KeypadCalc result={result} setResult={setResult} />
        </Container>
    )

}
export default Calculadora;