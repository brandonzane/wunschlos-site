import React from 'react';

const AboutUs = () => {
    return (
        <section id="about-us" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="row gutter-width-sm">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="title">
                            <h2 className="text-uppercase">
                                Revenue-generating digital marketing solutions
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row gutter-width-sm justify-content-end">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="description">
                            <p>
                                Wunschlos is a tech-enabled digital marketing agency. Adept at creating online experiences that are customer-focused
                                and engaging, we help businesses create marketing systems that clearly communicate a shared vision,
                                and help manage consistent customer experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
