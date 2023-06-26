import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Signup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name , email ,password)
        createUser(email , password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            updateProfile(loggedUser ,{
                displayName: name,
            })
            
            .then(console.log("updated user"))
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
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
                            <h1 className='font-bold text-[40px] text-center'>Sign Up</h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" required/>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>

                            <p className='mt-3'>Have an account? <Link className='font-bold text-[#FD3811]' to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;