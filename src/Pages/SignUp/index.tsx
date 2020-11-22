import React, { useCallback, useRef, useState } from 'react'

import { useAuth } from '../../contexts/authContext'

import * as S from './styles'

const SignUp: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const { signup } = useAuth()

    const handleSubmit = useCallback(async (e)=>{
        e.preventDefault()

        if(emailRef.current && passwordRef.current){
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        
    },[])

    return(
        <S.Container>
            <S.Form onSubmit={handleSubmit}>
                <S.Title>Cadastro</S.Title>
                
                <S.Input placeholder="email" ref={emailRef}/>
                <S.Input placeholder="senha" ref={passwordRef}/>

                <S.Button type='submit'>Cadastrar</S.Button>
            </S.Form>
            <S.RedirectButton>Já tem uam conta? Entrar</S.RedirectButton>
        </S.Container>
    )
}

export default SignUp