import React from 'react';
import {BrowserRouter,Switch,Route,NavLink,Redirect} from 'react-router-dom';
import Head from './component/Head/Head';
import Main from './Main';
import Gallery from './Gallery';


const routing=()=>(
<div>
    <Head/>
    <BrowserRouter>
        <Switch>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/' component={Main}/>
            <Route render={()=>(
                <div style={{
                color: 'red'
                }}>
                <h1>404</h1>
                <h2>Not Found</h2>
                </div>
            )}/>
        </Switch>
    </BrowserRouter>
</div>
)
export default routing;