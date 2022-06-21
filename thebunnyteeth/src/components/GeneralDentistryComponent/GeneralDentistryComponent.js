import React, { useState, useRef, useEffect } from 'react';
import { baseImagePath } from 'utility/utility';

export default (props) => {

    return (
        <>
            <section className="app_banner margin_top_header treatments_wrapper menus_wrapper">
                <div className="app_banner_wrap">
                    <div className="banner_overlay menu_routes_bg general_bg"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="maintain_div text-center">
                                    <h3 className="h3_title montserrat_font m-0 text-white montserrat_font">GENERAL DENTISTRY
                                    </h3>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_us header_margin treatment_inner">
                <div className="about_us_wrap maintain_div">
                    <div className="about_overlay_banner treatment_overlay"></div>
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="object_content maintain_div">
                                            <div className="about_us_image treatment_banner ">
                                                <div className="inner_image_wrap mb-3">
                                                    <img src={baseImagePath('thumbnails/theme24.jpg')} class="custom_img border_radius_10PX"
                                                        alt="Alphabet Internation School" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="left_content maintain_div py-5 ps-5 pb-0">
                                            <article class="main_article maintain_div">
                                                <h4 class="h4_title text-left text_color montserrat_font margin_B20 secondaryColor">AT ONE GLANCE
                                                </h4>
                                                <h3 class="ds_info text-left text_color montserrat_font">
                                                    One Stop Solution For Your Dental Issues
                                                </h3>
                                                <p class="oc_info text-left text_color roboto_font w-100">
                                                    World of technology, experienced hands and comprehensive oral healthcare under one roof.
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dental_services maintain_div header_margin">
                <div className="dental_services_wrap maintain_div py_80">
                    <div className="dental_services_overlay"></div>
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="maintain_div mb_30">
                                    <h3 className="h3_title montserrat_font position-relative">General Dental Services
                                    </h3>
                                </header>
                                <div className="row">
                                    <div className="col-lg-4 d-flex">
                                        <div className="ds_card maintain_div">
                                            <div className="ds_card_inner maintain_div">
                                                <article className="main_article maintain_div text-center">
                                                    <div className="ds_pic">
                                                        <img src={baseImagePath('icons/tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <div className="hover_change">
                                                        <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ textTransform: "uppercase" }}>Bridges & Crown</h4>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex">
                                        <div className="ds_card maintain_div">
                                            <div className="ds_card_inner maintain_div">
                                                <article className="main_article maintain_div text-center">
                                                    <div className="ds_pic">
                                                        <img src={baseImagePath('icons/tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <div className="hover_change">
                                                        <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ textTransform: "uppercase" }}>Dentures</h4>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex">
                                        <div className="ds_card maintain_div">
                                            <div className="ds_card_inner maintain_div">
                                                <article className="main_article maintain_div text-center">
                                                    <div className="ds_pic">
                                                        <img src={baseImagePath('icons/tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <div className="hover_change">
                                                        <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ textTransform: "uppercase" }}>Orthodontic Treatment</h4>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex">
                                        <div className="ds_card maintain_div">
                                            <div className="ds_card_inner maintain_div">
                                                <article className="main_article maintain_div text-center">
                                                    <div className="ds_pic">
                                                        <img src={baseImagePath('icons/tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <div className="hover_change">
                                                        <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ textTransform: "uppercase" }}>Root Canal</h4>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex">
                                        <div className="ds_card maintain_div">
                                            <div className="ds_card_inner maintain_div">
                                                <article className="main_article maintain_div text-center">
                                                    <div className="ds_pic">
                                                        <img src={baseImagePath('icons/tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <div className="hover_change">
                                                        <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ textTransform: "uppercase" }}>Wisdom Teeth Removal</h4>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex">
                                        <div className="ds_card maintain_div">
                                            <div className="ds_card_inner maintain_div">
                                                <article className="main_article maintain_div text-center">
                                                    <div className="ds_pic">
                                                        <img src={baseImagePath('icons/tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <div className="hover_change">
                                                        <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ textTransform: "uppercase" }}>teeth whitening</h4>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our_specialty maintain_div py_80">
                <div className="our_specialty_wrap maintain_div py_80 pt-3">
                    <div class="card-background-overlay"></div>
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 d-flex">
                                        <div className="left_content maintain_div">
                                            <article className="main_article maintain_div">
                                                <h4 className="h4_title text-left text_color montserrat_font margin_B20 secondaryColor">WHY TRUST</h4>
                                                <h3 className="ds_info text-left text_color montserrat_font">THE BUNNY TEETH? </h3>
                                                <progress id="file" value="25" max="100" style={{ width: "75%", height: "3px" }}>25%</progress>
                                                <p className="oc_info text-left text_color roboto_font w-100">
                                                    We contend to provide a comprehensive oral healthcare solution with sophisticated yet affordable state-of-the art infrastructure. Collaborating prominent doctors and cutting edge technology, we are determined to provide exceptional service to anyone and everyone
                                                </p>
                                            </article>
                                            <div className="theme_image">
                                                <img src={baseImagePath('thumbnails/theme20.png')} class="custom_img"
                                                    alt="Alphabet Internation School" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <div className="card_divider maintain_div mt-4">
                                            <article className="main_article maintain_div text-center">

                                                <div className="mb-3 maintain_div">
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ lineHeight: "40px" }}>REVIEW MECHANISM
                                                    </h4>
                                                </div>
                                                <p className="card_info text-center m-0 text_color roboto_font">
                                                    Our close call on each and every patient, before and after their treatment, gives them immense confidence that they are being taken care in the right way
                                                </p>
                                            </article>
                                        </div>
                                        <div className="card_divider maintain_div mt-4">
                                            <article className="main_article maintain_div text-center">
                                                <div className="mb-3 maintain_div">
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ lineHeight: "40px" }}>
                                                        TECHNOLOGY @ ARMS REACH
                                                    </h4>
                                                </div>
                                                <p className="card_info text-center m-0 text_color roboto_font">
                                                    The complex and cutting edge technology is always adopted and adapted in our day to day practices with a clear mission to provide world class services
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 card_collapse">
                                        <div className="card_divider maintain_div mt-4">
                                            <article className="main_article maintain_div text-center">

                                                <div className="mb-3 maintain_div">
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ lineHeight: "40px" }}>ENVIRONMENT & EQUIPMENT
                                                    </h4>
                                                </div>
                                                <p className="card_info text-center m-0 text_color roboto_font">
                                                    Utilization of Class B Autoclave Sterilizer is an indication which emphasizes the importance given to hygiene and environmental health. Nevertheless “Cleanliness is close to godliness”
                                                </p>
                                            </article>
                                        </div>
                                        <div className="card_divider maintain_div mt-4">
                                            <article className="main_article maintain_div text-center">

                                                <div className="mb-3 maintain_div">
                                                    <h4 className="h4_title text-center text_color montserrat_font" style={{ lineHeight: "40px" }}>
                                                        EFFICIENT DOCTORS AND STAFF
                                                    </h4>
                                                </div>
                                                <p className="card_info text-center m-0 text_color roboto_font">
                                                    The pillars of strength are our experienced dentist, technicians and support staffs who contribute to our success story. Without them neither our patients nor us can adorn the crown
                                                </p>
                                            </article>
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