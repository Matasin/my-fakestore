import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loader from '../components/Loader/Loader'

const Home = lazy(() => import('../pages/Home/Home'));
const Navbar = lazy(() => import('../pages/Navbar/Navbar'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const Products = lazy(() => import('../pages/Products/Products'));
const ProductsDetail = lazy(() => import('../pages/Product-Detail/Product-Detail'));
const Profile = lazy(() => import('../pages/Profile/Profile'));

const Error404 = lazy(() => import('../components/Error404/Error404'));

const Routes = () => (
    <Router className="App">
        {/* <Suspense fallback={<div style={{textAlign: 'center', marginTop: '35vh', fontSize: '3em'}}>Loading...</div>}> */}
        <Suspense fallback={<Loader/>}>
            <Navbar />
            <Switch>
              <Route path='/' exact component= { Home }/>
              <Route path='/products' exact component= { Products } />
              <Route path='/products/:id' component= { ProductsDetail } />
              <Route path='/cart' component= { Cart } />
              <Route path='/login' component= { Login } />
              <Route path='/register' component= { Register } />
              <Route path='/profile' component= { Profile } />

              <Route path='*' exact={true} component={Error404} />
          </Switch>
      </Suspense>
    </Router>
)

export default Routes;
