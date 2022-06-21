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
                                    <h3 className="h3_title montserrat_font m-0 text-white montserrat_font">Dental Implants
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
                                                    Dental Implants
                                                </h3>
                                            </article>
                                            <div className="normal_banner maintain_div position-relative">
                                                <div className="inner_image_wrap mb-3 pt-3">
                                                    <img src={baseImagePath('thumbnails/theme27.jpg')} class="custom_img "
                                                        alt="Alphabet Internation School" />
                                                </div>
                                            </div>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We offer dental implants to patients who are eligible to avail this procedure. These replacement tooth roots are created from titanium alloys or titanium. It helps stimulate bone growth while preventing bone resorption. It replaces your missing teeth the natural way and restores function to allow you to bite, chew and eat food.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                Our dental implants will provide you with lots of benefits like improved speech, appearance, comfort, oral health, self-esteem and easier eating. You can also find it convenient and enjoy having them for a lifetime with good care.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                The cost involved in availing dental implants is based on the bone quality and brand selected. We do offer top-quality, affordable dental implantation procedure, enabling you to lead a normal life and smile wide without any worry or inconvenience.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We also recommend you to quit or reduce smoking to avoid dental implant failures. For the initial few days, you will experience some swelling and pain in the region. We will suggest you with some pain medication and therapies practicing which you will feel relief and become normal quickly. The stitches used around the implant are dissolvable. But if you feel uncomfortable, our dentists will have it removed.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                You should take proper care of your dental implants like that of your natural teeth. We suggest you to visit our clinic after every six month for cleaning and thorough check-up to enjoy optimal oral health.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We offer our patients with multiple and single tooth implants as the circumstances require. Single tooth is suggested to those with single or several missing teeth. If there are large gaps and full mouth replacement is not desired, then multiple implants are recommended.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We offer another advanced procedure, named, ‘All-on-4-implants’. With merely 4 implants, we replace easily full single-jaw missing teeth. It is indeed a cost-effective solution.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We strongly recommend children to have bi-annual check-up to ensure they grow teeth properly and in the right shape. Our dental clinic will provide you with all the information that you wish to know about your child’s tooth. Whatever questions you have in mind will be answered by our expert dentists. We also suggest parents to maintain oral hygiene for their babies. This will ensure that your baby’s mouth is clear and clean of harmful germs.
                                            </p>
                                            <p className="oc_info text-left text_color roboto_font w-100">
                                                We do offer various types of preventive treatment for deciduous or milk teeth.
                                            </p>
                                            <div className="maintain_div">
                                                <ul className="p-1 pt-0">
                                                    <li className="oc_info text-left text_color roboto_font w-100">
                                                        Fluoride Treatments: It helps increase teeth strength by bolstering enamel and destroying bacteria and acid.
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
                                                            <li className="oc_info text-left text_color roboto_font w-100" style={{listStyleType: "none"}}>
                                                                <a href="">
                                                                    <span><i class="fa fa-home icon_style" aria-hidden="true"></i></span>
                                                                    72/60, Bazullah Rd, T.Nagar, TN - 600 017
                                                                </a>
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