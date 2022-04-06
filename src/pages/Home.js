import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import ContactsUs from "../blocks/contacts/ContactUs";
import ServicesHome from '../blocks/services/ServicesHome';
import AboutUs from '../blocks/about/AboutUs';
// import News from '../blocks/news/News';
// import Newsletter from '../blocks/newsletter/Newsletter';


const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'header-absolute-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Wunschlos</title>

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

            <Header logoColor="light" />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">
                        <PageTitleHome />

                        <ContactsUs />

                        <ServicesHome />

                        <AboutUs />

                        <div id="img" className="block spacer p-top-xl">
                            <div className="img-no-wrap-1 img-gray">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/bg-1.jpg" alt="work space" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <News /> */}

                        {/* <Newsletter /> */}
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
