import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Main from './container/main page/Main';
import Apartment_gallery from './container/apartment gallery/Apartment_gallery';
import Instagram_gallery from './component/Instagram_gallery/Instagram_gallery';
import Surrounding_gallery from './container/instagram gallery/Instagram_gallery';

const routing=()=>(
<div>

    <BrowserRouter>
        <Switch>
            <Route path='/instagram' component={Instagram_gallery}/>   
            <Route path='/apartment' component={Apartment_gallery}/>
            <Route path='/surrounding' component={Surrounding_gallery}/>
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