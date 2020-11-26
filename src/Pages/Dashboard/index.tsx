import React, {useCallback} from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../contexts/authContext'

import * as S from './styles'

const Dashboard = () => {
    const { currentUser, signout } = useAuth()

    const history = useHistory()

    const handleSignOut = useCallback(async()=>{
        await signout()

        history.push('signin')
    },[])

    return(
        <S.Container>
            <S.Content>
                <h1>Perfil</h1>
                <strong>Email</strong> <p>{currentUser && currentUser.email}</p>
                <S.Button>Atualizar perfil</S.Button>
                <S.RedirectButton onClick={handleSignOut}>Sair</S.RedirectButton>
            </S.Content>
        </S.Container>
    )
}

export default Dashboard