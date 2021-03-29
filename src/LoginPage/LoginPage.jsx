import React, { useState, useEffect, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import style from '../css/style.css'
import signInLogo from '../images/sign-in-logo.png'
import coverImage from '../images/nomadrental-login-side-background.png'

function LoginPage () {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange (e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit (e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(username, password, from));
        }
    }

    return (
        <Fragment>
            <div className="row no-gutters">
                <div className="col-12 col-md-3 order-2 order-md-1">
                    <section className={'p-4 ' + style.briefSection}>
                        <p><img src={signInLogo} alt="nomad-rental-sign-in-logo" /></p>
                        <h2>Hi there!</h2>
                        <p>Sign in to manage your listings and booking requests on Nomad Rental</p>
                        <p> <a href="javascript:void(0)">Learn more about our premium subscription</a></p>
                    </section>

                    <section className={"p-4 " + style.inputSection}>
                        <form name="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="text" name="username" placeholder="Email" value={username} onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !username ? ' is-invalid' : '')} />
                                {submitted && !username &&
                                    <div className="invalid-feedback">Email Address is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-4 text-left"><label>Password</label></div>
                                    <div className={"col-8 text-right " + style.forgotPasswordText}><a href="javascript:void(0)">Forgot your password?</a></div>
                                </div>

                                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !password ? ' is-invalid' : '')} />
                                {submitted && !password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                            <div className="form-group row justify-content-center">
                                <button className={style.mainButton + ' col-11 btn'} >
                                    {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Sign in
                                </button>
                            </div>
                            <div className="form-group text-center">
                                <hr />
                                <span className={style.dontHaveAccountText}>Don't have an account?</span><Link to="/register" className={"btn btn-link " + style.anchorLink}>Sign up now</Link>
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

export { LoginPage };