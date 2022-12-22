import React from 'react';

const ModalShop = ({ product }) => {
    console.log("bacccccca", product)
    const { productImg, name, price, dec, seller, _id } = product

    return (
        <div className=''>
            <input type="checkbox" id="my-modal-3" className="modal-toggle " />
            <div className="modal">
                <div className="modal-box w-full">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='w-full'>
                        <h3 className="text-lg font-bold">{name}</h3>
                        <p className="py-4">{dec}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalShop;