import React from 'react'

import { Helmet } from 'react-helmet';
import DidNotMatch from '../../components/did-not-match/did-not-match'

const Page404 = () => {
    return (
        <div className='error'>
            <Helmet title='Fake shop | page not found' />
            <DidNotMatch header='Error 404 page not found' text='Seems like url is incorect' text2='Check it or:' link='home' />
        </div>
    )
}

export default Page404;