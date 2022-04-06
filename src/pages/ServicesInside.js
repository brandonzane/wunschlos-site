import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';

const ServicesInside = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Services | Wunschlos</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleServicesInside />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div id="single-content">
                                    <div id="img" className="block">
                                        <div className="img-no-wrap-1">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src="assets/img/placeholder/marketing-1.jpg" alt="Services" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div id="description" className="block spacer p-top-xl">
                                        <div className="description">
                                            <p>The best way to understand what we do is to try us out. We provide tools for small
                                                and large businesses to grow or make your operations easier to handle</p>
                                        </div>
                                    </div> */}

                                    <div id="price-list" className="block spacer p-top-xl">
                                        <div className="title">
                                            <h2 className="hr text-uppercase">Service list</h2>
                                        </div>

                                        <div className="price-list">
                                            <div className="price-list-items">
                                                <div className="price-list-item">
                                                    {/* <div className="price-list-item-title">
                                                        <h3>In-person services</h3>
                                                    </div> */}

                                                    {/* <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Technical consultancy</span>
                                                            <span className="list-group-price">From 20 $/hour</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Modern Technology & Cryptocurrency Lessons</span>
                                                            <span className="list-group-price">From 20 $/hour</span>
                                                        </li>
                                                    </ul> */}
                                                </div>

                                                <div className="price-list-item">
                                                    {/* <div className="price-list-item-title">
                                                        <h3>Development Services</h3>
                                                    </div> */}

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Web Design Services</span>
                                                            {/* <span className="list-group-price">From 35 $</span> */}
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">App Development</span>
                                                            {/* <span className="list-group-price">From 35 $</span> */}
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Marketing Consulting</span>
                                                            {/* <span className="list-group-price">From 35 $</span> */}
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Marketing Support</span>
                                                            {/* <span className="list-group-price">From 35 $</span> */}
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Web Support Services</span>
                                                            {/* <span className="list-group-price">From 35 $</span> */}
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Brand Management</span>
                                                            {/* <span className="list-group-price">From 35 $</span> */}
                                                        </li>
                                                    </ul>
                                                </div>

                                                {/* <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Design and Marketing</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Logo Design and Branding</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Company Portfolios</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Social Media Targeted Analytics and Content Creation</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Customer Relationship Management Systems (CRM)</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>
                                                    </ul>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>

                                    <BackToServices />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default ServicesInside;
