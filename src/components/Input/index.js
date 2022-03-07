import React from 'react';

import { Input } from './styles';

const InputCalc = (props) => {

    const { result } = props

    return (
        <Input value={result.length > 20 ? 'Error' : result} type='text'/>
    )
}

export default InputCalc;