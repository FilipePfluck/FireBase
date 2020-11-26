import React, { useCallback, useRef, useState } from 'react'
import {useHistory, Link} from 'react-router-dom'

import { useAuth } from '../../contexts/authContext'

import * as S from './styles'

const Update: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)

    const history = useHistory()
    const { updateEmail } = useAuth()

    const handleSubmit = useCallback(async (e)=>{
        e.preventDefault()

        if(emailRef.current){
            await updateEmail(emailRef.current.value)
        }
    },[])

    return(
        <S.Container>
            <S.Form onSubmit={handleSubmit}>
                <S.Title>Atualizar perfil</S.Title>
                
                <S.Input placeholder="email" ref={emailRef}/>

                <S.Button type='submit'>Salvar</S.Button>
            </S.Form>
            <Link to="dashboard">
                <S.RedirectButton>Voltar</S.RedirectButton>
            </Link>
        </S.Container>
    )
}

export default Update