import React from 'react'
import { RouteProps as ReactRouteProps, Route as ReactDOMRoute, Redirect} from 'react-router-dom'

import { useAuth } from '../contexts/authContext'

interface RouteProps extends ReactRouteProps {
    isPrivate?: boolean
    component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ 
    isPrivate = false, 
    component: Component, 
    ...rest 
}) => {
    const { currentUser } = useAuth()

    return(
        <ReactDOMRoute 
            {...rest}
            render={({location}) => {
                return isPrivate === !!currentUser ? (
                    <Component/>
                ): (
                    <Redirect to={{ 
                        pathname: isPrivate ? '/signin' : '/dashboard', 
                        state: { from: location }
                    }} />
                )
            }}
        />
    )
}

export default Route