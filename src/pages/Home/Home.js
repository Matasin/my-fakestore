import React from 'react';
import './Home.scss';

import Header from '../../components/Header/Header'
import HomeSliderContent from '../../components/Home-Slider-Content/Home-Slider-Content'
import { TransitionGroup } from 'react-transition-group';

const Home = () => {

    return (
        <div className='Home-Container'>
            <Header
                Hindex= {'h4'}
                text= {'New recently products'}
                className='Home-Header'
            />
            <div className='Home-Slider'>
                <TransitionGroup className='Home-Slider-Content'>
                    <HomeSliderContent />
                </TransitionGroup>
            </div>
        </div>
    )
}
export default Home