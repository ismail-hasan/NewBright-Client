import React, { useState } from 'react';
import ModalShop from './ModalShop/ModalShop';
import Shop from './Shop';

const ShopPage = () => {
    const [product, setProduct] = useState([])
    return (
        <div className='p-10 md:p-16'>
            <Shop product={product} setProduct={setProduct}></Shop>
            <ModalShop product={product}></ModalShop>
        </div>
    );
};

export default ShopPage;