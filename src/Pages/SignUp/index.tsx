import React, { useCallback, useRef, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

import { useAuth } from '../../contexts/authContext'

import * as S from './styles'

const SignUp: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const history = useHistory()
    const { signup, currentUser } = useAuth()

    const handleSubmit = useCallback(async (e)=>{
        e.preventDefault()

        if(emailRef.current && passwordRef.current){
            await signup(emailRef.current.value, passwordRef.current.value)
        }

        history.push('dashboard')
        
    },[])

    return(
        <S.Container>
            <S.Form onSubmit={handleSubmit}>
                <S.Title>Cadastro</S.Title>
                
                <S.Input placeholder="email" ref={emailRef}/>
                <S.Input placeholder="senha" type="password" ref={passwordRef}/>

                <S.Button type='submit'>Cadastrar</S.Button>
            </S.Form>
            <Link to="/signin">
                <S.RedirectButton>Já tem uma conta? Entrar</S.RedirectButton>
            </Link>
        </S.Container>
    )
}

export default SignUp