import React, { useState, useEffect, useRef } from 'react'
import './Home-Slider-Content.scss'

import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';


const HomeSliderContent = () => {
    const [ images, setImages] = useState([]);
    const [ index, setIndex ] = useState(0);
    const nodeRef = useRef(null);

    const nextImage = () => index + 1 === images.length ? setIndex( 0 ) : setIndex( index + 1 );
    const previousImage = () => index === 0 ? setIndex( images.length - 1 ) : setIndex( index - 1 );
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(response => response.json())
            .then(data => setImages(data))
            const interval = setInterval(() => {
                index + 1 === images.length ? setIndex( 0 ) : setIndex( index + 1 )
            }, 4000);
            return () => clearInterval(interval);
    },[index, images.length])


    return (
        <div className='Slider-Container'>
            <p className='Slider-Container-Info-Number'> {index + 1 + '/' + (images.length) }</p>
            <button 
                className='Slider-Container-Btn-Left'
                onClick= {previousImage}
            >
                Previous
            </button>
            {images.map ( ({ id, image}) => {
                if(id === index + 1){
                    return (
                        <CSSTransition
                            key= { id }
                            in= { true }
                            timeout= { 500 }
                            classNames= { 'ImgSlider' }
                            nodeRef= { nodeRef }
                        >
                            <Link 
                                to= {`products/${id}`}
                            >
                                <img
                                    src={image}
                                    alt= ''
                                    ref= {nodeRef}
                                />
                            </Link>
                        </CSSTransition>
                    )
                }
                return null;
            })}
            <button 
                className='Slider-Container-Btn-Right'
                onClick= {nextImage}
            >
                Next
            </button>
        </div>
    )
}
export default HomeSliderContent