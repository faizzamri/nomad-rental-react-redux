import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import style from '../css/style.css'
import nomadRentalLogo from '../images/nomadrental-logo.png'
import nameBg from '../images/username-bg.png'

function AccountSetting () {
    const user = useSelector(state => state.authentication.user);
    let [initName, setInitName] = useState('')
    const dispatch = useDispatch();

    const [updateUser, setUpdateUser] = useState({
        fullname: '',
        username: '',
        country: '',
        phoneNo: '',
        currentPassword: '',
        newPassword: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);

    useEffect(() => {
        dispatch(userActions.getAll());
        getUserName();
    }, []);

    const getUserName = () => {
        initName = user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()
        setInitName(initName);
    }

    function handleChange (e) {
        const { name, value } = e.target;
        setUpdateUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit (e) {
        e.preventDefault();

        alert('Profile updated features is coming soon...')

        setSubmitted(true);
        if (updateUser.fullname && updateUser.email && updateUser.country && updateUser.phoneNo && updateUser.currentPassword && updateUser.newPassword) {
            dispatch(userActions.update(updateUser));
        }
    }

    return (
        <Fragment>
            <div className="row p-4">
                <div className="col-5 text-left">
                    <img src={nomadRentalLogo} alt="" />
                </div>
                <div className={"col-7 text-right " + style.colorGrey}>
                    <span>Choose a city</span>&nbsp;<span class={"material-icons " + style.materialIconAlign}>menu</span>
                </div>
            </div>
            <div className={"row p-4 " + style.greyBackground}>
                <div className={"col-12 col-md-3 " + style.textMenu}>
                    <section>
                        <div>
                            <img src={nameBg} className={style.imageBgPosition} />
                            <span className={style.initNamePosition}>{initName}</span>
                        </div>
                        <p>
                            <span className={style.userName}> {user.firstName + ' ' + user.lastName}</span><br />
                            <span className={style.subscriptionStatus}>Premium Nomad</span>
                        </p>
                    </section>

                    <section>
                        <div className={"p-2 " + style.mainClickMenu}>
                            <Link to="/" className={style.colorWhite}>
                                <span class={"material-icons " + style.materialIconAlign}>inbox</span>&nbsp;<span>Bookings</span>
                            </Link>
                        </div>
                        <div className={"p-2 " + style.colorGrey}>
                            <span class={"material-icons " + style.materialIconAlign}>hotel</span>&nbsp;<span>Refer and Earn</span>
                        </div>
                        <div className={"p-2"}>
                            <Link to="/account-setting" className={style.colorGrey}>
                                <span class={"material-icons " + style.materialIconAlign}>manage_accounts</span>&nbsp;<span>Account Settings</span>
                            </Link>
                        </div>
                    </section>

                    <section className="mt-4">
                        <p>SUPPORT</p>
                        <div className={"p-2 " + style.colorGrey}>
                            <span class={"material-icons " + style.materialIconAlign}>support</span>&nbsp;<span>Contact us</span>
                        </div>
                        <div className={"p-2 " + style.colorGrey}>
                            <span class={"material-icons " + style.materialIconAlign}>call_made</span>&nbsp;<span>FAQ</span>
                        </div>
                    </section>

                    <section className={style.footer}>
                        <Link to="/login">
                            <span class={"material-icons " + style.materialIconAlign + ' ' + style.colorMain}>toggle_on</span>&nbsp;
                            <span className={style.colorGrey}>Sign Out</span>
                        </Link>
                    </section>
                </div>
                <div className="col-12 col-md-9">
                    <section>
                        <h2>Account</h2>
                        <h5>Review and update your account details</h5>
                        <p>Please make sure these details are up to date as they'll be used for your bookings, and communications with the hotels.</p>
                        <p> <a href="javascript:void(0)">Learn more about our premium subscription</a></p>
                    </section>

                    <section className={"row p-4 no-gutters " + style.mainBackground}>
                        <div className="col-2 col-md-1">
                            <span class={"material-icons " + style.colorGrey}>person</span>
                        </div>
                        <div className="col-10 col-md-11">
                            <h5>{user.firstName + ' ' + user.lastName}</h5>
                            <p>Please make sure these details are up to date as they'll be used for your bookings, and communications with the hotels.</p>
                        </div>
                    </section>

                    <section>
                        <form className="row p-4" name="form" onSubmit={handleSubmit}>
                            <div className="form-group col-12 col-md-6">
                                <label>Your Name</label>
                                <input type="text" name="fullname" value={updateUser.fullname} placeholder="Your Name" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.firstName ? ' is-invalid' : '')} />
                                {submitted && !updateUser.fullname &&
                                    <div className="invalid-feedback">Your Name is required</div>
                                }
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label>Email Address</label>
                                <input type="email" name="username" value={updateUser.username} placeholder="Email" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.username ? ' is-invalid' : '')} />
                                {submitted && !updateUser.username &&
                                    <div className="invalid-feedback">Email Address is required</div>
                                }
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label>Country</label>
                                <input type="text" name="country" value={updateUser.country} placeholder="Country" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.username ? ' is-invalid' : '')} />
                                {submitted && !updateUser.country &&
                                    <div className="invalid-feedback">Please select the country</div>
                                }
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label>Phone No</label>
                                <input type="text" name="phoneNo" value={updateUser.phoneNo} placeholder="Phone Number" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.username ? ' is-invalid' : '')} />
                                {submitted && !updateUser.phoneNo &&
                                    <div className="invalid-feedback">Phone Number is required</div>
                                }
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label>Current Password</label>
                                <input type="password" name="currentPassword" value={updateUser.currentPassword} placeholder="Current Password" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.username ? ' is-invalid' : '')} />
                                {submitted && !updateUser.currentPassword &&
                                    <div className="invalid-feedback">Current Password is required</div>
                                }
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label>New Password</label>
                                <input type="password" name="newPassword" value={updateUser.newPassword} placeholder="New Password" onChange={handleChange} className={'form-control ' + style.inputForm + (submitted && !user.username ? ' is-invalid' : '')} />
                                {submitted && !updateUser.newPassword &&
                                    <div className="invalid-feedback">New Password is required</div>
                                }
                            </div>
                            <div className="form-group col-12 offset-md-6 col-md-6 text-center text-md-right">
                                <span className={style.colorGrey}>Your data will be</span> <a href="#">handle with care</a>&nbsp;
                                <button className={"btn mt-2 mt-md-0 " + style.mainButton}>
                                    {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Update
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </Fragment>
    );
}

export { AccountSetting };