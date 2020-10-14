import React from 'react';

const ProductsNav = ( {actuallCategory, fetchData} ) => {
    const arrayOfNavigateItem = [
        'men clothing',
        'women clothing',
        'jewelery',
        'electronics',
        'all'
    ];
    return (
        <div className='Products-Navigate-Container'>
            <div className='Products-Navigate'>
                <div className='Products-Navigate-Item'>
                    <h2 className='Searching-In-Category'>
                        You are searching in: <br/>
                        <p>
                            "{ actuallCategory }"
                        </p>
                    </h2>
                </div>
                {arrayOfNavigateItem.map( (item, index) => {
                    return (
                        item === 'all'
                        ?
                        <div className='Products-Navigate-Item' key= {index}>
                            <li onClick={() => fetchData() }>
                                {item}
                            </li>
                        </div>
                        :
                        <div className='Products-Navigate-Item' key= {index}>
                            <li onClick={() => fetchData(`/category/${item}`) }>
                                {item}
                            </li>
                        </div>
                    )
                })}
            </div>
        </div>    
    )
}
export default ProductsNav