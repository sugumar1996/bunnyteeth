import React, { useState, useRef, useEffect } from 'react';
import { baseImagePath } from 'utility/utility';

export default (props) => {

    return (
        <>
            <section className="hero_banner">
                <div className="hb_inner_wrap">
                    <div className="bg_layout banner_hero_style curve"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*<div className="hb_card maintain_div">
                                    <div className="hb_card_inner maintain_div">
                                        <article className="main_article maintain_div">
                                            <h4>Get your</h4>
                                            <h3>Beautiful Smile That Lasts Forever</h3>
                                            <p>A comprehensive dental procedure to enhance the pleasantness of your smile.</p>
                                        </article>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dental_services header_margin">
                <div className="dental_services_wrap maintain_div py_80">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="maintain_div mb_30">
                                    <h3 className="h3_title montserrat_font">Dental Services</h3>
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
                                                    <h4 className="h4_title text-center text_color montserrat_font">GENERAL DENTISTRY</h4>
                                                    <p className="ds_info text-center m-0 text_color roboto_font">Get your basics examined here </p>
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
                                                    <h4 className="h4_title text-center text_color montserrat_font">KIDS DENTISTRY</h4>
                                                    <p className="ds_info text-center m-0 text_color roboto_font">Meet our child friendly doctors who shoo away their pain </p>
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
                                                    <h4 className="h4_title text-center text_color montserrat_font">DENTAL IMPLANTS</h4>
                                                    <p className="ds_info text-center m-0 text_color roboto_font">Affordable Dental implants  </p>
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
                                                    <h4 className="h4_title text-center text_color montserrat_font">SMILE MAKEOVER</h4>
                                                    <p className="ds_info text-center m-0 text_color roboto_font">Walk your way through cheerless smiles to confident smiles  </p>
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
                                                    <h4 className="h4_title text-center text_color montserrat_font">SLEEP DENTISTRY</h4>
                                                    <p className="ds_info text-center m-0 text_color roboto_font">Feel “at home” on the dentist’s chair. Painless support extended during surgery </p>
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
                                                    <h4 className="h4_title text-center text_color montserrat_font">OROFACIAL PAIN & TMJ DISORDERS</h4>
                                                    <p className="ds_info text-center m-0 text_color roboto_font">Get relief from Orofacial pain & TMJ disorders </p>
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
            <section className="our_services maintain_div">
                <div className="our_services_wrap maintain_div py_80">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4 d-flex">
                                        <div className="os_card maintain_div">
                                            <div className="os_card_inner maintain_div">
                                                <div className="os_icon_wrap mb_30  primary_color_bg">
                                                    <div className="inner_icon maintain_div"><i class="fa fa-home icon_style" aria-hidden="true"></i></div>
                                                </div>
                                                <article className="main_article maintain_div text-left">
                                                    <h4 className="h4_title text-left text_color montserrat_font">Our Team</h4>
                                                    <p className="ds_info text-left m-0 text_color roboto_font">Meet our Young & Dynamic Team of Awesome Dentist. </p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex">
                                        <div className="os_card maintain_div">
                                            <div className="os_card_inner maintain_div">
                                                <div className="os_icon_wrap mb_30 secondary_color_bg ">
                                                    <div className="inner_icon maintain_div"><i class="fa fa-home icon_style" aria-hidden="true"></i></div>
                                                </div>
                                                <article className="main_article maintain_div text-left">
                                                    <h4 className="h4_title text-left text_color montserrat_font">Our Clinic Tour</h4>
                                                    <p className="ds_info text-left m-0 text_color roboto_font">A glance at Our Clinic Interior. </p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex">
                                        <div className="os_card maintain_div">
                                            <div className="os_card_inner maintain_div">
                                                <div className="os_icon_wrap mb_30 third_color_bg ">
                                                    <div className="inner_icon maintain_div"><i class="fa fa-home icon_style" aria-hidden="true"></i></div>
                                                </div>
                                                <article className="main_article maintain_div text-left">
                                                    <h4 className="h4_title text-left text_color montserrat_font">Testimonials</h4>
                                                    <p className="ds_info text-left m-0 text_color roboto_font">What Our Clients Speak About Us. </p>
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
            <section className="our_clinic maintain_div">
                <div className="our_clinic_wrap maintain_div py_80 pt-3">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="maintain_div mb_30 text-center">
                                    <h3 className="h3_title montserrat_font">Our Clinic Interior</h3>
                                </header>
                                <div className="oc_card maintain_div">
                                    <div className="video_data">
                                        <iframe width="100%" height="630" src="https://www.youtube.com/embed/8Xv0K2RJ8eo?feature=oembed&rel=0&mute=0&loop=0&controls=1">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our_specialty maintain_div">
                <div className="our_specialty_wrap maintain_div py_80 pt-3">
                    <div class="card-background-overlay"></div>
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 d-flex">
                                        <div className="left_content maintain_div">
                                            <article className="main_article maintain_div">
                                                <h4 className="h4_title text-left text_color montserrat_font margin_B20 secondaryColor">OUR SPECIALITY</h4>
                                                <h3 className="ds_info text-left text_color montserrat_font">We are eminent at</h3>
                                                <progress id="file" value="25" max="100" style={{ width: "75%", height: "3px" }}>25%</progress>
                                                <p className="oc_info text-left text_color roboto_font">providing finest treatments, using state of the art infrastructure, from the hands of efficient dentists in a friendly, safe and hygiene environment</p>
                                            </article>
                                            <div className="theme_image">
                                                <img src={baseImagePath('icons/theme1.png')} class="custom_img"
                                                    alt="Alphabet Internation School" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <div className="card_divider maintain_div mt-4">
                                            <article className="main_article maintain_div text-center">
                                                <div className="ds_pic mb-3">
                                                    <img src={baseImagePath('thumbnails/theme2.jpg')} class="custom_img"
                                                        alt="Alphabet Internation School" />
                                                </div>
                                                <div className="mb-3 maintain_div">
                                                    <h4 className="h4_title text-center text_color montserrat_font">PAIN-FREE DENTISTRY</h4>
                                                </div>
                                                <p className="card_info text-center m-0 text_color roboto_font">
                                                    We go for minimal invasive dentistry for detecting, diagnosing, intercepting and treating dental anomalies at a microscopic level, thereby providing minimalistic abrasion, pain and zero infection
                                                </p>
                                            </article>
                                        </div>
                                        <div className="card_divider maintain_div mt-4">
                                            <article className="main_article maintain_div text-center">
                                                <div className="ds_pic mb-3">
                                                    <img src={baseImagePath('thumbnails/theme3.jpg')} class="custom_img"
                                                        alt="Alphabet Internation School" />
                                                </div>
                                                <div className="mb-3 maintain_div">
                                                    <h4 className="h4_title text-center text_color montserrat_font">DIGITAL DENTISTRY</h4>
                                                </div>
                                                <p className="card_info text-center m-0 text_color roboto_font">
                                                    Our state of the art infrastructure includes “intra oral scanner” which is high in precision, guaranteeing us with error free prosthesis for implantation
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 card_collapse">
                                        <div className="card_divider maintain_div mt-4">
                                            <article className="main_article maintain_div text-center">
                                                <div className="ds_pic mb-3">
                                                    <img src={baseImagePath('thumbnails/theme4.jpg')} class="custom_img"
                                                        alt="Alphabet Internation School" />
                                                </div>
                                                <div className="mb-3 maintain_div">
                                                    <h4 className="h4_title text-center text_color montserrat_font">STERILIZATION
                                                    </h4>
                                                </div>
                                                <p className="card_info text-center m-0 text_color roboto_font">
                                                    Usage of Class B Autoclave Sterilizer (steam sterilizer) ensures consistent hygiene practices for quality treatment
                                                </p>
                                            </article>
                                        </div>
                                        <div className="card_divider maintain_div mt-4">
                                            <article className="main_article maintain_div text-center">
                                                <div className="ds_pic mb-3">
                                                    <img src={baseImagePath('thumbnails/theme5.jpg')} class="custom_img"
                                                        alt="Alphabet Internation School" />
                                                </div>
                                                <div className="mb-3 maintain_div">
                                                    <h4 className="h4_title text-center text_color montserrat_font">RELAXED DENTISTRY                                                    </h4>
                                                </div>
                                                <p className="card_info text-center m-0 text_color roboto_font">
                                                    Our qualified dentists will help overcome your anxiety and fears through sedation or relaxation
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
            <section className="parent_speaks maintain_div">
                <div className="parent_speaks_wrap maintain_div py_80">
                    <div className="background_banner">
                        <img src={baseImagePath('thumbnails/theme7.jpg')} class="custom_img"
                            alt="Alphabet Internation School" />
                    </div>
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}