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
                                    <h3 className="h3_title montserrat_font m-0 text-white montserrat_font position-relative">Sedation Dentistry
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
                                                SLEEP DENTISTRY
                                                </h3>
                                            </article>
                                            <div className="normal_banner maintain_div position-relative">
                                                <div className="inner_image_wrap mb-3 pt-3">
                                                    <img src={baseImagePath('thumbnails/sadation.jpg')} class="custom_img "
                                                        alt="Alphabet Internation School" />
                                                </div>
                                            </div>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We are aware that some patients experience very high anxiety levels when making dental visits. It is this fear of having to bear the pain that restricts many patients to make the visit. However, we are well-trained to provide top-quality sedation or sleep dentistry, thus reducing your fears.

                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                With sedation dentistry, you can feel fully relaxed while undergoing the dental procedure. Although you do not sleep, you become less aware of the immediate surroundings. You will simply not know what our dentists will be performing except follow some basic instructions. We administer this sedation intravenously, through your veins.

                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                Sedation works very quickly and you are likely to feel very less or no pain throughout the procedure. Our qualified and experienced dentist will constantly monitor your vitals. Accordingly, the sedation dosage will be adjusted according to your health requirements. You will experience amnesia for a long period, thus making you unaware about what is going on with the procedure. This amnesia condition allows us to carry out multiple procedures as required in just a single appointment.

                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We will first diagnose your prevailing health condition and check your existing medication use and medical history. This is to find out if your body can permit taking sedation density procedures or not. Patients with significant medical considerations or of more age will require consulting their medical specialist or primary physician first. For IV Sedation, good candidates are those:

                                            </p>

                                            <div className="maintain_div">
                                                <ul className="p-1 pt-0">
                                                    <li className="oc_info text-left text_color roboto_font w-100">
                                                        Requiring multiple or longer dentistry procedures
                                                    </li>
                                                    <li className="oc_info text-left text_color roboto_font w-100">
                                                        Having strong gag reflected
                                                    </li>
                                                    <li className="oc_info text-left text_color roboto_font w-100">
                                                        Require to undergo painful dental work
                                                    </li>
                                                    <li className="oc_info text-left text_color roboto_font w-100">
                                                        exhibiting high to moderate dental anxiety
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                Our talented dentists will provide you with a sitting and will explain to you the entire procedure and how it is done. This way, we will remove all your anxiety and ensure providing the best possible sedation dentistry procedures.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We will carry out this simple, painless procedure to clean this inner layer. Otherwise, infection will spread across your tooth’s root canal system, thus causing abscess.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We will administer a local anaesthesia so that you do not feel any pain during this procedure. Once the procedure is completed, you can return back to your work directly without any worry. But you should wait until you feel normal again from numbness before having any food.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                To avail this procedure, you just need to make a single visit to our dental clinic with prior appointment. However, if you suffer from severely infected tooth, then chances are you might have to make 2 to 3 visits. We will diagnose your situation and suggest what is better for you.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                After this procedure, we recommend you not to chew or bite with your treated tooth until it has restored through crown or permanent filling as deemed necessary.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                Avoid drinking or smoking and do take your prescribed pain medications.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We offer our patients with the latest laser-assigned root canal procedure to ensure painless treatment. Using lasers, we can easily target the infected material and bacteria growing on your teeth with great accuracy.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We have the necessary expertise, experience and knowledge to carry out this laser-assigned root canal procedure. Our endomotor ensures highly precise, pain-free treatment. We also ensure 100% sterilization and low-level dental radiation.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                Our expert team are trained to provide all our patients with utmost care and ensure you have quick and painless root canal treatment at affordable rates.
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