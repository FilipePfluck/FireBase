import React, { useCallback, useRef, useState } from 'react'
import {useHistory, Link} from 'react-router-dom'

import { useAuth } from '../../contexts/authContext'

import * as S from './styles'

const SignIn: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const history = useHistory()
    const { signin, currentUser } = useAuth()

    const handleSubmit = useCallback(async (e)=>{
        e.preventDefault()

        if(emailRef.current && passwordRef.current){
            await signin(emailRef.current.value, passwordRef.current.value)
        }
        
        history.push('dashboard')
    },[])

    return(
        <S.Container>
            <S.Form onSubmit={handleSubmit}>
                <S.Title>Login</S.Title>
                
                <S.Input placeholder="email" ref={emailRef}/>
                <S.Input placeholder="senha" type="password" ref={passwordRef}/>

                <S.Button type='submit'>Entrar</S.Button>
            </S.Form>
            <Link to="signup">
                <S.RedirectButton>Não tem uma conta? Cadastrar</S.RedirectButton>
            </Link>
            <Link to="forgot">
                <S.RedirectButton>Esqueci minha senha</S.RedirectButton>
            </Link>
        </S.Container>
    )
}

export default SignIn