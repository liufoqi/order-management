import React, {Component} from 'react';
import {HashRouter, Route,Switch} from 'react-router-dom'
import  Admin from '../views/admin'
import  Home from '../views/home'
import  NotMatch from '../views/notMatch'
import  SecondPage from '../views/secondPage'

class Router extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/admin' render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home'  component={Home}> </Route>
                                    <Route path='/admin/secondPage'  component={SecondPage}> </Route>
                                    <Route  component={NotMatch}> </Route>
                                </Switch>

                            </Admin>

                        }>
                        </Route>
                        {/*<Route path='/admin' render={()=>*/}
                            {/*<Admin>*/}
                                {/*<Route  path='' component={NotMatch}> </Route>*/}
                            {/*</Admin>*/}
                        {/*}>*/}
                        {/*</Route>*/}
                        <Route component={NotMatch}> </Route>

                    </Switch>

                </div>
             </HashRouter>

        )
    }
}

export default Router

