import React, { Component } from 'react';
import Swiper from 'swiper';

class AboutReviews extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: "Ed Holme",
            position: "Managing Director CAS",
        }
    }

    componentDidMount() {
        var swiper_adv_reviews_thumbs = new Swiper( '.adv-slider-reviews .adv-swiper-container.reviews-thumbs', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            slidesPerView: 3,
            spaceBetween: 0,
            loop: false,
            freeMode: false
        } );

        new Swiper( '.adv-slider-reviews .adv-swiper-container.reviews-text', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            thumbs: {
                slideThumbActiveClass: 'adv-swiper-slide-thumb-active',
                thumbsContainerClass: 'adv-swiper-container-thumbs',
                swiper: swiper_adv_reviews_thumbs
            },
            spaceBetween: 0,
            allowTouchMove: false
        } );
    }

    handleClick( e ) {
        this.setState( { "name": e.currentTarget.getAttribute( 'data-reviews-name' ) } );
        this.setState( { "position": e.currentTarget.getAttribute( 'data-reviews-position' ) } );
        return false
    }

    render() {
        return (
            <div id="testimonials" className="block spacer p-top-xl">
                <div className="title">
                    <h2 className="hr text-uppercase">"</h2>
                </div>

                <div className="adv-slider-reviews">
                    <div className="adv-slider-reviews-img">
                        <img src="assets/img/demo/32_img.png" alt="Icon" />
                    </div>

                    <div className="adv-swiper-container reviews-text">
                        <div className="adv-swiper-wrapper reviews-text-items">
                            <div className="adv-swiper-slide reviews-text-item">
                                <div className="reviews-text-item-content">
                                    <h3>In a Zimbabwe where everyone pretends to know how to do everything, these guys are a breath of fresh air. They deliver.</h3>
                                </div>
                            </div>

                            <div className="adv-swiper-slide reviews-text-item">
                                <div className="reviews-text-item-content">
                                    <h3>Love the way they work. Going the extra mile to give a personal touch.</h3>
                                </div>
                            </div>

                            <div className="adv-swiper-slide reviews-text-item">
                                <div className="reviews-text-item-content">
                                    <h3>Love my website, well done.</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center thumbs">
                        <div className="adv-swiper-container reviews-thumbs">
                            <div className="adv-swiper-wrapper reviews-thumbs-items">
                                <div onClick={ ( e ) => this.handleClick( e ) } className="adv-swiper-slide reviews-thumbs-item" data-reviews-name="GretPro Industrials" data-reviews-position="">
                                    <img src="assets/img/demo/gretpro.png" alt="GretPro Industrials" />
                                </div>

                                <div onClick={ ( e ) => this.handleClick( e ) } className="adv-swiper-slide reviews-thumbs-item" data-reviews-name="Sarah Lilford" data-reviews-position="Owner of Dusty Road">
                                    <img src="assets/img/demo/dusty-road.jpg" alt="Sarah Lilford" />
                                </div>

                                <div onClick={ ( e ) => this.handleClick( e ) } className="adv-swiper-slide reviews-thumbs-item" data-reviews-name="Cheryl Johnson" data-reviews-position="Owner of Natai Natai">
                                    <img src="assets/img/demo/natai-natai.jpg" alt="Cheryl Johnson" />
                                </div>
                            </div>
                        </div>

                        <div className="reviews-results">
                            <h6 className="reviews-name" id="reviews-name">{ this.state.name }</h6>
                            <p className="reviews-positions" id="reviews-positions">{ this.state.position }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutReviews;
