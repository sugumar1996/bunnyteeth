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
                                    <h3 className="h3_title montserrat_font m-0 text-white montserrat_font">Dental Bridges / Crowns
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
                                            <div className="about_overlay_banner treatment_overlay multiple_overlay"></div>
                                            <article class="main_article maintain_div">
                                                <h3 class="ds_info text-left text_color montserrat_font">
                                                Dental Bridges / Crowns
                                                </h3>
                                            </article>
                                            <div className="normal_banner maintain_div position-relative">
                                                <div className="inner_image_wrap mb-3 pt-3">
                                                    <img src={baseImagePath('thumbnails/bridges.jpeg')} class="custom_img "
                                                        alt="Alphabet Internation School" />
                                                </div>
                                            </div>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                            On completion of root canal, we recommend a single gap or crown to cover tooth surface with the help of custom-made dental bridge. They replicate the tooth crown quite effectively and remain fixed to its place. They can help masticate food properly and restore missing gaps in your mouth. Availing Dental Bridges or crowns help maintain your lip and face structure as well as prevent putting excessive pressure on other teeth.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                            We offer three varieties of dental bridges/crowns like:
                                            </p>
                                            
                                            <div className="maintain_div">
                                                <ul className="p-1 pt-0">
                                                    <li className="oc_info text-left text_color roboto_font w-100">
                                                    Metal-Ceramic Crowns: They are durable, fused with porcelain, thus enhancing their strength. It is custom-designed to match your teeth’s original colour.
                                                    </li>
                                                    <li className="oc_info text-left text_color roboto_font w-100">Dental sealants: We spread this translucent material on your child’s teeth to prevent cavity formation and further spreading.
                                                    </li>
                                                    <li className="oc_info text-left text_color roboto_font w-100">Mouth Guards: We recommend children to wear mouth guards. We create them at our clinic to suit your child’s unique mouth shape.
                                                    </li>
                                                    <li className="oc_info text-left text_color roboto_font w-100">
                                                        Space Maintainers: We offer this fully customized, specialised dental appliance to suit your child’s mouth.
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We also administer laughing gas sedation or sleep dentistry for kids based on the prevailing circumstance and needs. We generally recommended administering NOIS on children of 8+ years. We address their dental problem with intravenous sedation or Day Care General Anaesthesia.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We do understand that children are prone to panic or experience anxiety when visiting dentists. Hence, we make sure that your child is made comfort with our soothing, playful words and remove their anxiety and stress.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-flex">
                                        <div class="left_content maintain_div sidemenu_card">
                                            <article class="main_article maintain_div">
                                                <h4 class="h4_title text-left text_color montserrat_font margin_B20 secondaryColor">DENTAL IMPLANTS
                                                </h4>
                                                <h3 class="ds_info text-left text_color montserrat_font" style={{ letterSpacing: "0.3px" }}>
                                                    Specialists
                                                </h3>
                                            </article>
                                            <div className="row py-4">
                                                <div className="col-lg-6 d-flex">
                                                    <div className="team_card maintain_div">
                                                        <div className="teamCard_inner_wrap maintain_div border_radius_10PX">
                                                            <div className="teamCard_img">
                                                                <img src={baseImagePath('thumbnails/theme12.jpg')} class="custom_img border_radius_10PX"
                                                                    alt="Alphabet Internation School" />
                                                            </div>
                                                            <div className="teamCardText maintain_div text-center py-3">
                                                                <h4 className="text-center">
                                                                    <a href="" className="h4_title">Dr. Santosh Kumari Rathod</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex">
                                                    <div className="team_card maintain_div d-flex">
                                                        <div className="teamCard_inner_wrap maintain_div border_radius_10PX">
                                                            <div className="teamCard_img">
                                                                <img src={baseImagePath('thumbnails/theme13.jpg')} class="custom_img border_radius_10PX"
                                                                    alt="Alphabet Internation School" />
                                                            </div>
                                                            <div className="teamCardText maintain_div text-center py-3">
                                                                <h4 className="text-center">
                                                                    <a href="" className="h4_title">Dr. Vishnu Priya</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clinic_info_wrap maintain_div pt-3">
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
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/K4qvMAxWWfQ?feature=oembed&rel=0&mute=0&loop=0&controls=1&autoplay=1">
                                                    </iframe>
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
            <section className="quote_sec maintain_div padding_50">
                <div className="app_banner_wrap maintain_div">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="quote_content maintain_div text-center pb-3">
                                    <h4 className="h4_title montserrat_font secontary_color">We Care for your teeth!
                                    </h4>
                                    <div className="maintain_div mt-4">
                                        <a href="#menu" class="primary_btn roboto_font fw-bold me-5">Discover More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dental_services header_margin why_choose">
                <div className="dental_services_wrap maintain_div py_80 primary_color_bg position-relative">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <header className="maintain_div why_choose_title text-center">
                                            <h3 className="h3_title montserrat_font m-0 text-white montserrat_font">Why Choose Us
                                            </h3>
                                        </header>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="media_object py-5">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <div className="ds_pic">
                                                                <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                                    alt="Alphabet Internation School" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h5 className="h5_title text-white text_color montserrat_font mb-3 w-75">TECHNOLOGY @ ARMS REACH</h5>
                                                            <p className="ds_info text-white m-0 text_color roboto_font w-75">
                                                                The complex and cutting edge technology is always adopted and adapted in our day to day practices with a clear mission to provide world class services                                                             </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="media_object py-5">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <div className="ds_pic">
                                                                <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                                    alt="Alphabet Internation School" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h5 className="h5_title text-white text_color montserrat_font mb-3 w-75">EFFICIENT team</h5>
                                                            <p className="ds_info text-white m-0 text_color roboto_font w-75">
                                                                The pillars of strength are our experienced dentist, technicians and support staffs who contribute to our success story. Without them neither our patients nor us can adorn the crown
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="media_object py-5 pb-0">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <div className="ds_pic">
                                                                <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                                    alt="Alphabet Internation School" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h5 className="h5_title text-white text_color montserrat_font mb-3 w-75">REVIEW MECHANISM</h5>
                                                            <p className="ds_info text-white m-0 text_color roboto_font w-75">
                                                                Our close call on each and every patient, before and after their treatment, gives them immense confidence that they are being taken care in the right way
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="media_object py-5 pb-0">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <div className="ds_pic">
                                                                <img src={baseImagePath('icons/white_tooth.png')} class="custom_img"
                                                                    alt="Alphabet Internation School" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h5 className="h5_title text-white text_color montserrat_font mb-3 w-75">ENVIRONMENT & EQUIPMENT</h5>
                                                            <p className="ds_info text-white m-0 text_color roboto_font w-75">
                                                                Utilization of Class B Autoclave Sterilizer is an indication which emphasizes the importance given to hygiene and environmental health. Nevertheless “Cleanliness is close to godliness”
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex">
                                        <div className="why_background_image maintain_div h-100">
                                            <div className="why_background_image_wrap maintain_div h-100">
                                                <div className="inner_wrap w-100 h-100">
                                                    <img src={baseImagePath('thumbnails/hero.jpg')} class="custom_img"
                                                        alt="Alphabet Internation School" />
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
        </>
    );
}