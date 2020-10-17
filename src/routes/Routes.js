import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from '../components/loader/loader'

const Cart = lazy(() => import('../pages/cart/cart'));
const Home = lazy(() => import('../pages/home/home'));
const Login = lazy(() => import('../pages/login/login'));
const ProductDetail = lazy(() => import('../pages/product-detail/product-detail'));
const Products = lazy(() => import('../pages/products/products'));
const Profile = lazy(() => import('../pages/profile/profile'));



const Routes = () => (
    <Router>
        <Suspense
            fallback={<Loader />}
        >
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cart' component={Cart} />
                <Route path='/login' component={Login} />
                <Route path='/products/:id' component={ProductDetail} />
                <Route path='/products' component={Products} />
                <Route path='/profile' component={Profile} />

                {/* <Route path='*' exact={true} component={My404Component} /> */}
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;