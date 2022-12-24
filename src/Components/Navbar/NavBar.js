import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';

const NavBar = () => {
    const { user, logOut } = useContext(authContext)
    // const [cart, setCart] = useState([])
    // useEffect(() => {
    //     fetch(`https://bright-ecommerce.vercel.app/cart?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setCart(data)
    //         })
    // }, [user?.email])



    const { data: cart = [], refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await fetch(`https://bright-ecommerce.vercel.app/cart?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e))
    }

    refetch()

    return (
        <div>
            <div className="navbar bg-black py-3 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2s</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Bright Commerce</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to='/'>Home</Link> </li>
                        <li> <Link to='/about'>About</Link> </li>
                        <li> <Link to='/shop'>Shop</Link> </li>
                        <li> <Link to='/contact'>Contact</Link> </li>

                        {
                            user?.uid &&
                            <>
                                <li> <Link to='/wishlist'>WishList</Link> </li>
                                <li> <Link to='/cart'>Cart</Link> </li>

                            </>

                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='menu menu-horizontal px-1'>
                        {

                            user?.uid ?
                                <button onClick={handleLogout}>
                                    <li> <Link to='/cart'>Logout</Link> </li>
                                </button>
                                :
                                <>
                                    <li> <Link to='/login'>Login</Link> </li>
                                    <li> <Link to='/register'>Register</Link> </li>

                                </>
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default NavBar;