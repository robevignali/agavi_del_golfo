import React, { Suspense } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Main from './container/main page/Main';
// import Apartment_gallery from './container/apartment gallery/Apartment_gallery';
// import Instagram_gallery from './component/Instagram_gallery/Instagram_gallery';
// import Surrounding_gallery from './container/instagram gallery/Instagram_gallery';

const Apartment_gallery = React.lazy(()=> import('./container/apartment gallery/Apartment_gallery'));
const Instagram_gallery = React.lazy(()=> import('./component/Instagram_gallery/Instagram_gallery'));
const Surrounding_gallery = React.lazy(()=> import('./component/Instagram_gallery/Instagram_gallery'));

const routing=()=>(
<div>

    <BrowserRouter>
        <Suspense fallback={<div className="text-center"><Spinner animation="grow"/></div>}>
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
        </Suspense>
    </BrowserRouter>
</div>
)
export default routing;