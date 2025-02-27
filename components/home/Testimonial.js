'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Testimonial() {
    return (
        <>
    
        {/* Testimonial Two Start */}
        <section className="testimonial-two mb-4">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Cliens testimonial</span>
                    </div>
                    <h2 className="section-title__title">Excellence Dynam <br/> Builders Every Project</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="testimonial-two__left">
                            <div className="testimonial-two__img">
                                <img src="assets/images/testimonial/testimonial-two-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial-two__right">
                            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                                <div className="swiper-wrapper">

                                    {/*Testimonial Two Single Start*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-two__single">
                                            <div className="testimonial-two__quote-icon">
                                                <span className="icon-quote-2"></span>
                                            </div>
                                            <div className="testimonial-two__client-info">
                                                <div className="testimonial-two__client-img">
                                                    <img src="assets/images/testimonial/testimonial-two-client-1-1.jpg"
                                                        alt=""/>
                                                </div>
                                                <div className="testimonial-two__client-content">
                                                    <h4 className="testimonial-two__client-name">James Anderson</h4>
                                                    <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                                </div>
                                            </div>
                                            <p className="testimonial-two__text">Working with this company has been a
                                                game-changer for my the a business. Their expertise and innovative Their
                                                expertise and approach have helped us achieve remarkable</p>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*Testimonial Two Single End*/}
                                    {/*Testimonial Two Single Start*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-two__single">
                                            <div className="testimonial-two__quote-icon">
                                                <span className="icon-quote-2"></span>
                                            </div>
                                            <div className="testimonial-two__client-info">
                                                <div className="testimonial-two__client-img">
                                                    <img src="assets/images/testimonial/testimonial-two-client-1-2.jpg"
                                                        alt=""/>
                                                </div>
                                                <div className="testimonial-two__client-content">
                                                    <h4 className="testimonial-two__client-name">James Vince</h4>
                                                    <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                                </div>
                                            </div>
                                            <p className="testimonial-two__text">Working with this company has been a
                                                game-changer for my the a business. Their expertise and innovative Their
                                                expertise and approach have helped us achieve remarkable</p>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*Testimonial Two Single End*/}
                                    {/*Testimonial Two Single Start*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-two__single">
                                            <div className="testimonial-two__quote-icon">
                                                <span className="icon-quote-2"></span>
                                            </div>
                                            <div className="testimonial-two__client-info">
                                                <div className="testimonial-two__client-img">
                                                    <img src="assets/images/testimonial/testimonial-two-client-1-3.jpg"
                                                        alt=""/>
                                                </div>
                                                <div className="testimonial-two__client-content">
                                                    <h4 className="testimonial-two__client-name">Alisa Brown</h4>
                                                    <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                                </div>
                                            </div>
                                            <p className="testimonial-two__text">Working with this company has been a
                                                game-changer for my the a business. Their expertise and innovative Their
                                                expertise and approach have helped us achieve remarkable</p>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*Testimonial Two Single End*/}
                                </div>
                            </Swiper>
                            {/* If we need navigation buttons */}
                            <div className="testimonial-two__nav">
                                <div className="swiper-button-prev1 h1p">
                                    <i className="icon-arrow-left"></i>
                                </div>
                                <div className="swiper-button-next1 h1n">
                                    <i className="icon-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Testimonial Two End */}
        </>
    )
}
