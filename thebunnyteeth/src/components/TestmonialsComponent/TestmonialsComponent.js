import React, { useState, useRef, useEffect } from 'react';
import { baseImagePath } from 'utility/utility';

export default (props) => { debugger;

    return (
        <>
            <section className="app_banner margin_top_header">
                <div className="app_banner_wrap">
                    <div className="banner_overlay aboutus_shadow"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="maintain_div text-center">
                                    <h3 className="h3_title montserrat_font m-0 text-white montserrat_font">Testimonials
                                    </h3>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="parent_speaks maintain_div">
                <div className="parent_speaks_wrap maintain_div">
                    <div className="background_banner">
                        <img src={baseImagePath('thumbnails/all_hero.jpg')} class="custom_img"
                            alt="Alphabet Internation School" />
                    </div>
                    <div className="container custom_container">
                        <div className="ps_main_wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <header className="maintain_div mb_30 text-center">
                                        <h3 className="h3_title roboto_font secondaryColor mb-3">Patient Speaks</h3>
                                        <h2 className="h2_title montserrat_font">What They Say About Us
                                        </h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-lg-4 d-flex">
                                            <div className="small_card maintain_div ">
                                                <div className="small_card_wrap maintain_div">
                                                    <div class="media d-flex">
                                                        <div className="ds_pic mr-3">
                                                            <img src={baseImagePath('icons/icon1.png')} class="custom_img mr-3"
                                                                alt="Alphabet Internation School" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h5 class="sc_name">Ramya S</h5>
                                                            <p className="sc_date">2021-06-14</p>
                                                        </div>
                                                    </div>
                                                    <div className="rating_star maintain_div">
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    </div>
                                                    <div className="review_content maintain_div roboto_font">
                                                        Dr.Santhosh Kumari is an Experienced and Excellent dentist who used to ask me if anything hurt and it was the first time I had totally pain-free dentistry. The crowns and the partials you did for me feels great. Overall it was a very good experience with the Team Bunny Teath
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex">
                                            <div className="small_card maintain_div">
                                                <div className="small_card_wrap maintain_div">
                                                    <div class="media d-flex">
                                                        <div className="ds_pic mr-3">
                                                            <img src={baseImagePath('icons/icon1.png')} class="custom_img mr-3"
                                                                alt="Alphabet Internation School" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h5 class="sc_name">Ramya S</h5>
                                                            <p className="sc_date">2021-06-14</p>
                                                        </div>
                                                    </div>
                                                    <div className="rating_star maintain_div">
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                        <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    </div>
                                                    <div className="review_content maintain_div roboto_font">
                                                        Dr.Santhosh Kumari is an Experienced and Excellent dentist who used to ask me if anything hurt and it was the first time I had totally pain-free dentistry. The crowns and the partials you did for me feels great. Overall it was a very good experience with the Team Bunny Teath
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="maintain_div mt-3 text-center">
                                        <p className="mt-1 roboto_font" style={{ fontSize: "14px" }}><span className="fw-bold">Google</span> rating score: <span className="fw-bold">4.9</span> of 5,based on <span className="fw-bold">103 reviews.</span></p>
                                    </div>
                                    <div className="maintain_div text-center testmonial_content d-flex align-items-center justify-content-center my-3">
                                        <p className="mt-1 montserrat_font">Check Out More Testimonials here</p>
                                        <div className="tc_pic mx-5">
                                            <i class="fa fa-home icon_style" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "75px" }}>
                                <div className="col-lg-12">
                                    <header className="maintain_div mb_30 text-center">
                                        <h3 className="h3_title roboto_font secondaryColor mb-3">Patient Speaks</h3>
                                        <h2 className="h2_title montserrat_font">What They Speak</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-lg-4 d-flex">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/we7HAVwEIXw?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=7">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/s1lbN53D3i8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=9">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/K4qvMAxWWfQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=11">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <header className="maintain_div mb_30 text-center">
                                        <h3 className="h3_title roboto_font secondaryColor mb-3">DENTAL TIPS</h3>
                                        <h2 className="h2_title montserrat_font">What Our Dentist has to Say</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-lg-4 d-flex">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/zl_JwElKmxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/5sCLSO9S8iY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/PP9p_28bjso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="maintain_div text-center testmonial_content d-flex align-items-center justify-content-center pb-1">
                                        <p className="mt-1 montserrat_font">Check Out More Videos here</p>
                                        <div className="tc_pic mx-5">
                                            <i class="fa fa-home icon_style" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}