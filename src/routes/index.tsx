import React from 'react'
import { BrowserRouter, Switch} from 'react-router-dom'

import Route from './Route'

import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import Dashboard from '../Pages/Dashboard'
import Forgot from '../Pages/Forgot'
import UpdateProfile from '../Pages/UpdateProfile'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/dashboard" component={Dashboard} isPrivate/>
                <Route path="/forgot" component={Forgot}/>
                <Route path="/update" component={UpdateProfile} isPrivate/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes