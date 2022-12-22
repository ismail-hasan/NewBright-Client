import React, { useContext, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';
import ModalShop from './ModalShop/ModalShop';
import Shop from './Shop';

const ShopPage = () => {
    const { product, setProduct } = useContext(authContext)
    // const [product, setProduct] = useState(null)
    return (
        <div className='p-10 md:p-16'>
            <Shop product={product} setProduct={setProduct}></Shop>

            {product &&
                <ModalShop product={product}></ModalShop>

            }
        </div >
    );
};

export default ShopPage;