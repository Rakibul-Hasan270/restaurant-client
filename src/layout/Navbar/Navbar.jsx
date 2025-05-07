import React from 'react';
import { NavLink } from 'react-router';
import useAuth from '../../hook/useAuth';

const Navbar = () => {
    const { logOut, user } = useAuth()
    if(user){
        console.log(user)
    }
    const links = <div className='flex items-center justify-self-center gap-10 mr-10'>
        <NavLink>Home</NavLink>
        <NavLink>Menu</NavLink>
        <NavLink>Reservation</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Gallery</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </div>
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-6xl mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            {links}
            <div title={user?.email} className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt={user?.displayName}
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                        <li onClick={() => logOut()}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;