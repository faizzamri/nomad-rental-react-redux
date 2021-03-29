import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import signInLogo from '../images/sign-in-logo.png'
import coverImage from '../images/nomadrental-login-side-background.png'
import style from '../css/style.css'

function RegisterPage () {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange (e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit (e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-3 order-2 order-md-1">
                    <section className={'p-4 ' + style.briefSection}>
                        <p><img src={signInLogo} alt="nomad-rental-sign-in-logo" /></p>
                        <h2>Hi there!</h2>
                        <p>Sign up to manage your listings and booking requests on Nomad Rental</p>
                        <p> <a href="javascript:void(0)">Learn more about our premium subscription</a></p>
                    </section>
                    <section className="p-4">
                        <form name="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" value={user.firstName} placeholder="First Name" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.firstName ? ' is-invalid' : '')} />
                                {submitted && !user.firstName &&
                                    <div className="invalid-feedback">First Name is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" name="lastName" value={user.lastName} placeholder="Last Name" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.lastName ? ' is-invalid' : '')} />
                                {submitted && !user.lastName &&
                                    <div className="invalid-feedback">Last Name is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="text" name="username" value={user.username} placeholder="Email" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.username ? ' is-invalid' : '')} />
                                {submitted && !user.username &&
                                    <div className="invalid-feedback">Email Address is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.password ? ' is-invalid' : '')} />
                                {submitted && !user.password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className={"btn " + style.mainButton}>
                                    {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Sign Up
                                </button>
                                <Link to="/login" className="btn btn-link">Cancel</Link>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="col-12 col-md-9 order-1 order-md-2">
                    <img src={coverImage} className={style.sideBackground} alt="nomadrental side background" />
                </div>
            </div>
        </Fragment>
    );
}

export { RegisterPage };