import React, { useState, useRef, useEffect } from 'react';
import { baseImagePath } from 'utility/utility';

export default (props) => {

    return (
        <>
            <section className="app_banner margin_top_header treatments_wrapper menus_wrapper">
                <div className="app_banner_wrap">
                    <div className="banner_overlay menu_routes_bg general_bg kids_bg"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="maintain_div text-center">
                                    <h3 className="h3_title montserrat_font m-0 text-white montserrat_font position-relative">Contact Us
                                    </h3>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_us header_margin treatment_inner">
                <div className="about_us_wrap maintain_div">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-7 d-flex">
                                        <div class="left_content maintain_div position-relative">
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-flex">
                                        <div class="left_content maintain_div sidemenu_card">
                                            <div className="about_overlay_banner treatment_overlay multiple_overlay"></div>
                                            <div className="clinic_info_wrap maintain_div pt-3 position-relative">
                                                <div className="left_content maintain_div">
                                                    <article className="main_article maintain_div">
                                                        <h3 className="ds_info text-left text_color montserrat_font" style={{ letterSpacing: "1px" }}>Our Clinic</h3>
                                                        <progress id="file" value="25" max="100" style={{ width: "100%", height: "3px" }}>25%</progress>
                                                    </article>
                                                    <div className="maintain_div">
                                                        <ul className="p-1 pt-0">
                                                            <li className="oc_info text-left text_color roboto_font w-100" style={{ listStyleType: "none" }}>
                                                                <a href="" className="sidemenu_list roboto_font primary_color">
                                                                    <span><i class="fa fa-home icon_style pe-2" aria-hidden="true"></i></span>
                                                                    72/60, Bazullah Rd, T.Nagar, TN - 600 017
                                                                </a>
                                                            </li>
                                                            <li className="oc_info text-left text_color roboto_font w-100" style={{ listStyleType: "none" }}>
                                                                <a href="" className="sidemenu_list roboto_font primary_color">
                                                                    <span><i class="fa fa-home icon_style pe-2" aria-hidden="true"></i></span>
                                                                    +(91) 98400 31819
                                                                </a>
                                                            </li>
                                                            <li className="oc_info text-left text_color roboto_font w-100" style={{ listStyleType: "none" }}>
                                                                <a href="" className="sidemenu_list roboto_font primary_color">
                                                                    <span><i class="fa fa-home icon_style pe-2" aria-hidden="true"></i></span>
                                                                    +(91) 44 42121819
                                                                </a>
                                                            </li>
                                                            <li className="oc_info text-left text_color roboto_font w-100" style={{ listStyleType: "none" }}>
                                                                <a href="" className="sidemenu_list roboto_font primary_color">
                                                                    <span><i class="fa fa-home icon_style pe-2" aria-hidden="true"></i></span>
                                                                    thebunnyteeth@gmail.com
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clinic_info_wrap maintain_div pt-3">
                                                <div className="left_content maintain_div">
                                                    <article className="main_article maintain_div">
                                                        <h3 className="ds_info text-left text_color montserrat_font" style={{ letterSpacing: "1px" }}>Clinic Hours</h3>
                                                        <progress id="file" value="25" max="100" style={{ width: "100%", height: "3px" }}>25%</progress>
                                                    </article>
                                                    <div className="maintain_div">
                                                        <ul className="p-1 pt-0">
                                                            <li className="oc_info text-left text_color roboto_font w-100" style={{ listStyleType: "none" }}>
                                                                <a href="" className="sidemenu_list roboto_font primary_color">
                                                                    <span><i class="fa fa-home icon_style pe-2" aria-hidden="true"></i></span>
                                                                    Monday to Saturday
                                                                </a>
                                                            </li>
                                                            <li className="oc_info text-left text_color roboto_font w-100" style={{ listStyleType: "none" }}>
                                                                <a href="" className="sidemenu_list roboto_font primary_color">
                                                                    <span><i class="fa fa-home icon_style pe-2" aria-hidden="true"></i></span>
                                                                    10:00 AM to 8:00 PM
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="parent_speaks maintain_div">
            <div className="parent_speaks_wrap maintain_div">
                <div className="background_banner">
                    <img src={baseImagePath('thumbnails/contact_us.jpg')} class="custom_img"
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