import React from 'react';
import SubscribeForm from '../../components/form/SubscribeForm';

const Newsletter = () => {
    return (
        <section id="newsletter" className="block spacer p-top-xl">
            <div className="bg-white spacer p-top-xl p-bottom-xl footer-no-border">
                <div className="wrapper">
                    <div className="newsletter">
                        <div className="newsletter-title">
                            <h2>Subscribe our Newsletter</h2>
                        </div>

                        <div className="newsletter-description">
                            <p>We talk about things you might find interesting</p>
                        </div>

                        <div className="newsletter-shortcode">
                            <SubscribeForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
