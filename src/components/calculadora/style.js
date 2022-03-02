import styled from 'styled-components';

export const Input = styled.input`
    height: 75px;
    width: 249px;
    background-color: #000000;
    border: 0;
    color: #ffffff;
    text-align: right;
    font-size: 42px;
    font-weight: 500;
`

export const Button = styled.button`
    color: #000000;
    margin: 3px;
    border-radius: 100px;
    border-style: none;
    background-color: rgb(254, 149, 5);
    cursor: pointer;
    border-style: none;
    font-size: 21px;
`

export const ButtonNum = styled.button` 
    background-color: rgb(51,51,51);
    color: #ffffff;
    border-radius: 100px;
    border-style: none;
    margin: 3px;
    font-size: 21px;
  
`

export const ButtonZero = styled.button`
    grid-column: 1/3;
    grid-row: 5;
    background-color: rgb(51,51,51);
    color: #ffffff;
    text-align: left;
    padding-left: 22px;
    border-radius: 100px;
    border-style: none;
    margin: 3px;
    font-size: 21px;
`

export const ButtonBs = styled.button`
    background-color: rgb(165, 165, 165);
    color: #000000;
    border-radius: 100px;
    border-style: none;
    margin: 3px;
    font-size: 21px;
`

export const ButtonClear = styled.button`
    grid-column: 1/3;
    grid-row: 1;
    color: #000000;
    background-color: rgb(165, 165, 165);
    border-radius: 100px;
    border-style: none; 
    margin: 3px;
    font-size: 21px;
`

export const Container = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 256px;
    text-align: center;
    border: 10px solid #000000;
    background-color: #000000;
    border-radius: 10px;
`

export const Kaypad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);
`