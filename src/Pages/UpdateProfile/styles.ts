import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    width: 100%;

    padding: 24px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 360px;
    padding: 24px;
`

export const Title = styled.h1`
    margin-bottom: 24px;
    text-align: center;
    color: #458BFB;
`

export const Input = styled.input`
    width: 100%;
    border: 0;
    height: 40px;
    border-radius: 8px;
    margin: 8px 0;
    padding: 0 16px;
`

export const Button = styled.button`
    border: 0;
    height: 40px;
    border-radius: 8px;
    margin: 8px 0;
    padding: 0 16px;
    background-color: #458BFB;
    color: #FFF;
`

export const RedirectButton = styled.span`

`