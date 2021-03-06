import React, { Suspense, lazy } from 'react';
import Loader from '../components/loader/loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Nav = lazy(() => import('../components/nav/nav'));
// const CrumbsBread = lazy(() => import('../components/crumbs-bread/crumbs-bread'));

const Cart = lazy(() => import('../pages/cart/cart'));
const Home = lazy(() => import('../pages/home/home'));
const Login = lazy(() => import('../pages/login/login'));
const ProductDetail = lazy(() => import('../pages/product-detail/product-detail'));
const Shop = lazy(() => import('../pages/shop/shop'));
const Profile = lazy(() => import('../pages/profile/profile'));

const Footer = lazy(() => import('../components/footer/footer'));

const Page404 = lazy(() => import('../pages/page404/page404'));

const Routes = () => (
    <Router>
        <Suspense
            fallback={<Loader />}
        >
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/cart' component={Cart} />
                <Route path='/login' component={Login} />
                <Route exact path='/shop' component={Shop} />
                <Route path='/shop/:id'  component={ProductDetail} />
                <Route path='/profile' component={Profile} />

                <Route path='*' exact={true} component={Page404} />
            </Switch>
            <Footer/>
        </Suspense>
    </Router>
);

export default Routes;