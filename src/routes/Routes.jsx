import React from 'react'
import {Route , Switch} from 'react-router-dom'

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Catalog from '../pages/Catalog';


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/catalog/:slug' component={Product}></Route>
            <Route path='/catalog'  component={Catalog}></Route>
            <Route path='/cart' component={Cart}></Route>
        </Switch>
    )
}

export default Routes