import React, { Suspense, lazy } from 'react';
import Loader from '../components/loader/Loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Nav = lazy(() => import('../components/nav/Nav'));
// const CrumbsBread = lazy(() => import('../components/crumbs-bread/crumbs-bread'));

const Cart = lazy(() => import('../pages/cart/Cart'));
const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/login/Login'));
const ProductDetail = lazy(() => import('../pages/product-detail/Product-Detail'));
const Shop = lazy(() => import('../pages/shop/Shop'));
const Profile = lazy(() => import('../pages/profile/Profile'));

const Footer = lazy(() => import('../components/footer/Footer'));

const Page404 = lazy(() => import('../pages/page404/Page404'));

const Routes = () => (
    <Router>
        <Suspense
            fallback={<Loader />}
        >
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home} />
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