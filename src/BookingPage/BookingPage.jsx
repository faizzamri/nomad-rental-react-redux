import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import style from '../css/style.css'
import nomadRentalLogo from '../images/nomadrental-logo.png'
import roomImage from '../images/package-head__image.png'
import nameBg from '../images/username-bg.png'

function BookingPage () {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    let [initName, setInitName] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
        getUserName();
    }, []);

    const getUserName = () => {
        initName = user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()
        setInitName(initName);
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
                            <span class={"material-icons " + style.materialIconAlign}>inbox</span>&nbsp;<span>Bookings</span>
                        </div>
                        <div className={"p-2 " + style.colorGrey}>
                            <span class={"material-icons " + style.materialIconAlign}>hotel</span>&nbsp;<span>Refer and Earn</span>
                        </div>
                        <div className="p-2">
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
                        <h2>Bookings</h2>
                        <h5>Your current upcoming stays</h5>
                        <p>Please update with the properity if your travel plans should change or if you wish to make any changes to your stay.</p>
                        <p> <a href="javascript:void(0)">Learn more about our premium subscription</a></p>
                    </section>

                    <section className="row no-gutters">
                        <div className="col-12 col-md-4">
                            <img src={roomImage} className={style.roomImage} alt="" />
                        </div>
                        <div className={"col-12 col-md-6 " + style.roomDetail}>
                            <div className={"row p-4 mx-1 " + style.mainBackground}>
                                <div className="col-12">
                                    <h3>The Green View</h3>
                                    <div className={style.colorGrey}>
                                        <span class={"material-icons " + style.materialIconAlign}>check_circle</span>&nbsp;<span>Bookings request received</span>
                                    </div>
                                    <div className={style.colorMain}>
                                        <span class={"material-icons " + style.materialIconAlign}>schedule</span>&nbsp;<span>Awaiting confirmation from hotel</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-12 mt-4">
                                    <h5>Superior Premium</h5>
                                </div>
                                <div className={"col-12 col-md-6 " + style.colorGrey}>
                                    <span class={"material-icons " + style.materialIconAlign}>event_available</span>&nbsp;<span>Check-in:</span><br />
                                    <span className={style.colorBlack + ' ' + style.eventDetail}>July 9th, 2018</span>
                                </div>
                                <div className={"col-12 col-md-6 " + style.colorGrey}>
                                    <span class={"material-icons " + style.materialIconAlign}>receipt_long</span>&nbsp;<span>Reference</span><br />
                                    <span className={style.colorBlack + ' ' + style.eventDetail}>#UC311K</span>
                                </div>
                            </div>
                            <div className={"row px-4 pt-2 pt-md-4 pb-0 " + style.footer}>
                                <div className={"col-12 my-2 my-md-4 " + style.colorGreen}>
                                    <span class={"material-icons " + style.materialIconAlign}>grade</span>&nbsp;<span>Rate your stay</span>
                                </div>
                                <div className={"col-12 my-2 my-md-4 " + style.colorGrey}>
                                    <span class={"material-icons " + style.materialIconAlign}>near_me</span>&nbsp;<span>Email the property</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    );
}

export { BookingPage };