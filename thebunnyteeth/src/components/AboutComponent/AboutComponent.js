import React, { useState, useRef, useEffect } from 'react';
import { baseImagePath } from 'utility/utility';

export default (props) => {

    return (
        <>
            <section className="app_banner margin_top_header">
                <div className="app_banner_wrap">
                    <div className="banner_overlay aboutus_shadow"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="maintain_div text-center">
                                    <h3 className="h3_title montserrat_font m-0 text-white montserrat_font">About Us</h3>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_us header_margin">
                <div className="about_us_wrap maintain_div">
                    <div className="about_overlay_banner"></div>
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="object_content maintain_div">
                                            <div className="about_us_image">
                                                <div className="inner_image_wrap mb-3">
                                                    <img src={baseImagePath('thumbnails/theme9.jpg')} class="custom_img border_radius_10PX"
                                                        alt="Alphabet Internation School" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div class="left_content maintain_div py-5 ps-5">
                                            <article class="main_article maintain_div">
                                                <h4 class="h4_title text-left text_color montserrat_font margin_B20 secondaryColor">ABOUT US</h4>
                                                <h3 class="ds_info text-left text_color montserrat_font">We are one of the leading Dental Clinic</h3>
                                                <p class="oc_info text-left text_color roboto_font w-100">
                                                    equipped with latest technology. Our philosophy of happy smiles is defined by personalized care and high-tech treatments to our patients. Our ever enthusiastic and qualified family of dentists bring with them wide experience in their respective domains. We consider our duty completed when we provide complete patient satisfaction.
                                                </p>
                                                <p class="oc_info text-left text_color roboto_font w-100">
                                                    Our gentle approach has been an attractive force because of which we have been able to cater to patients of all ages from toddlers to adults. Parents have a strong faith in our dedication towards our young patients. The interactions and relaxing environment created by us has been a winner among younger patients. We become a part of their family providing utmost care and correct solutions for their dental problems.
                                                </p>
                                                <p class="oc_info text-left text_color roboto_font w-100">
                                                    We are always available for patients to handle all types of emergency situations. Our friendly staff are well equipped for seamless follow up system which is appreciated always. We never compromise in providing highest standards of dental and safety procedures. You can entrust us with your utmost dental concerns and we promise to come up with tailor made solutions and ultimately associating with you for best oral health.
                                                </p>
                                            </article>
                                            <div className="oc_card  pt-3">
                                                <div className="video_data">
                                                    <iframe width="560" height="335" src="https://www.youtube.com/embed/SCSh_oOatXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <a href="#menu" class="primary_btn roboto_font fw-bold me-5" >Discover More</a>
                                                <span className="h4_title text-left text_color montserrat_font margin_B20 secondaryColor">Watch Video</span>
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
                        <div className="ps_main_wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <header className="maintain_div mb_30 text-center">
                                        <h3 className="h3_title roboto_font secondaryColor mb-3">Patient Speaks</h3>
                                        <h2 className="h2_title montserrat_font">What They Say</h2>
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
            <section className="social_media maintain_div">
                <div className="social_media_wrap maintain_div">
                    <div className="background_banner">
                        <img src={baseImagePath('thumbnails/theme8.jpg')} class="custom_img"
                            alt="Alphabet Internation School" />
                    </div>
                    <div className="container custom_container">
                        <div className="ps_main_wrapper ">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="left_content maintain_div py-5">
                                        <article className="main_article maintain_div">
                                            <h4 className="h4_title text-left text_color montserrat_font margin_B20 secondaryColor">SOCIAL MEDIA</h4>
                                            <h3 className="ds_info text-left text_color montserrat_font">Connect With Us</h3>
                                            <progress id="file" value="25" max="100" style={{ width: "100%", height: "3px" }}>25%</progress>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                Strong connection is the key to global success. Travel through our social media channels to know more about our improvisations, treatments, milestones, contended staffs and satisfied clients                                            </p>
                                        </article>
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