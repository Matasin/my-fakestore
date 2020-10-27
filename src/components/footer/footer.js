import React from 'react';
import './Footer.scss'

import { SOCIAL_MEDIA } from '../../constants/constants'
import LazyImage from '../../lazy-image'

const Footer = () => (
    <>
        <footer className='footer'>
            <div className='footer__social-media'>
                <p className='footer__info-block'>stay connected</p>
                {SOCIAL_MEDIA.map(({ id, src, path }) => {
                    return (
                        <a
                            href={path}
                            key={id}
                        >
                            <LazyImage
                                src={`/${process.env.PUBLIC_URL}./assets/${src}`}
                                alt='social-media-icon'
                                height='35px'
                                width='35px'
                            />
                        </a>
                    )
                })}
            </div>
            <div className='footer__newsletter'>
                <p className='footer__info-block'>be our friend</p>
                <form action='#'>
                    <input
                        type='text'
                        placeholder='Enter your email here'
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        required
                    />
                    <button className='btn-primary'> subscribe now</button>
                </form>
            </div>
            <div className='footer__assistance'>
                <p className='footer__info-block'>need assistance?</p>
                <p>123-456-7890</p>
                <p>info@mysite.com</p>
            </div>
        </footer>
        <p className='footer__copy-right'>
            &copy; 2020 by <u>young delevoper</u>, this page was inspiring by template from wix.com with my own small changes
        </p>
    </>
)

export default Footer;