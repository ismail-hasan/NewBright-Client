import React, { useContext } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';

const NavBar = () => {
    const { user, logOut } = useContext(authContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className='flex justify-between w-full px-10'>
                    <div className="">
                        <Link className="btn btn-ghost normal-case text-xl">Bright Commerce</Link>
                    </div>
                    <div className="">
                        <ul className="menu menu-horizontal px-1">
                            <li> <Link to='/'>Home</Link> </li>
                            <li> <Link to='/about'>About</Link> </li>
                            <li> <Link to='/shop'>Shop</Link> </li>
                            <li> <Link to='/contact'>Contact</Link> </li>

                            {
                                user?.uid ?
                                    <>
                                        <li> <Link to='/wishlist'>WishList</Link> </li>
                                    </>
                                    :
                                    <>
                                        <li> <Link to='/login'>Login</Link> </li>
                                        <li> <Link to='/register'>Register</Link> </li>
                                    </>
                            }

                        </ul>
                    </div>

                    <div className="">

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>

                            <div tabIndex={0} className="mt-3 card bg-black card-compact dropdown-content w-52 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            user?.uid &&
                            <>
                                <div className="dropdown dropdown-end ">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact bg-black dropdown-content mt-3 p-2 shadow rounded-box w-52">

                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><button onClick={handleLogout}>Logout</button></li>

                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavBar;