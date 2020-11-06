import React from 'react';
import './did-not-match.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DidNotMatch = ({ header, text, text2, link }) => {
    

    return (
        <div className='did-not-match'>
            <Helmet title={`Fake shop | ${header}`} />

            <div className='did-not-match__decoration'></div>

            <header className='did-not-match__header'>
                {header}
            </header>

            <p className='did-not-match__text'>
                {text}
            </p>

            {text2 &&
                <p className='did-not-match__text'>
                    {text2}
                </p>
            }

            <Link
                to={`/${link}`}
            >
                <button className='btn-primary did-not-match__btn'>
                    jump to {link}
                </button>
            </Link>

            <div className='did-not-match__decoration'></div>

        </div>
    )
}
export default DidNotMatch;

