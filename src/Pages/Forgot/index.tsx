import React, { useCallback, useRef, useState } from 'react'
import {Link} from 'react-router-dom'

import { useAuth } from '../../contexts/authContext'

import * as S from './styles'

const Forgot = ()=>{
    const emailRef = useRef<HTMLInputElement>(null)

    const { resetPassword } = useAuth()

    const handleSubmit = useCallback(async (e)=>{
        e.preventDefault()

        if(emailRef.current){
            await resetPassword(emailRef.current.value)
        }
    },[])

    return(
        <S.Container>
            <S.Form /* onSubmit={handleSubmit} */>
                <S.Title>Esqueceu sua senha?</S.Title>
                
                <S.Input placeholder="email" ref={emailRef}/>

                <S.Button type='submit'>Resetar senha</S.Button>
            </S.Form>
            <Link to="signup">
                <S.RedirectButton>Não tem uma conta? Cadastrar</S.RedirectButton>
            </Link>
            <Link to="signin">
                <S.RedirectButton>Voltar para signin</S.RedirectButton>
            </Link>
        </S.Container>
    )
}

export default Forgot