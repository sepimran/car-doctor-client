import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const {signInUser , googleSignIn} = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser); 
        })
        .catch(error => {
            console.log(error);
        })
       
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser); 
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div className="text-center lg:text-left w-1/2">
                        <img src={loginImg} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
                        <div className="card-body w-full">
                            <h1 className='font-bold text-[40px] text-center'>Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" required/>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>

                            <p className='mt-3'>Have an account? <Link className='font-bold text-[#FD3811]' to="/signup">Sign up</Link></p>

                            <div className="alterNative-login mt-3">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle/></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;