import React, { useContext } from 'react'
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Header = () => {
    const {user , loader , logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    
    const navLink = <>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/services">Services </Link></li>
        <li><Link to="/blog">Blog </Link></li>
        <li><Link to="/contact">Contact </Link></li>
    </>
    return (
        <header className="header-area">
            <div className="container">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                        </div>
                        <Link className=" btn-ghost normal-case text-xl">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-outline btn-error">Appointment</button>
                        {
                            user ? <>
                                <p>{user.displayName}</p>
                                <button onClick={handleLogOut} className="btn btn-outline btn-error">LogOut</button>
                            </> :
                            <>
                                <Link to="login"><button className="btn btn-outline btn-error">Login</button></Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;