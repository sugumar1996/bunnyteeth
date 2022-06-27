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
                                            <div className="testmoanial_card maintain_div text-center">
                                                <div class="fa fa-quote-right quote_icon" aria-hidden="true"></div>
                                                <div class="media maintain_div">
                                                    <div className="ds_pic mt-3 mb-2">
                                                        <img src={baseImagePath('icons/avathar1.png')} class="custom_img mr-3"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="sc_name roboto_font">sujatha mageshbabu</h5>
                                                    <p className="sc_date">Patient</p>
                                                </div>
                                                <div className="rating_star maintain_div">
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                </div>
                                                <div className="media_content mt-5">
                                                    <p className="testmonial_info roboto_font">
                                                        Bunny teeth dental clinic equipped with latest technology of digital scanning. For my tooth issue it was scanning in 360 degree angle.
                                                        Dr. Santhosh kumari very patiently doing the treatment without any pain. Clinic is well equipped with technology and all things are well sterilized. For kids pain free treatment and their room is very nice. Every kid would love to take treatment here.  Best part is follow up with us next day.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex">
                                            <div className="testmoanial_card maintain_div text-center">
                                                <div class="fa fa-quote-right quote_icon" aria-hidden="true"></div>
                                                <div class="media maintain_div">
                                                    <div className="ds_pic mt-3 mb-2">
                                                        <img src={baseImagePath('icons/avathar2.png')} class="custom_img mr-3"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="sc_name roboto_font">RAMANATHAN MUTHU</h5>
                                                    <p className="sc_date">Patient</p>
                                                </div>
                                                <div className="rating_star maintain_div">
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                </div>
                                                <div className="media_content mt-5">
                                                    <p className="testmonial_info roboto_font">
                                                        We went for my daughters tooth removal last week. The doctor who attended was polite and friendly. Though my daughter started to panic when the doctor told we have to remove two of her teeth,  the Doctor assured my daughter that she would put her tooth to sleep and slowly started the treatment while they played cartoons for my child. It was painless for my daughter and now she has a confident look. Would strongly recommend this clinic for children.     </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex">
                                            <div className="testmoanial_card maintain_div text-center">
                                                <div class="fa fa-quote-right quote_icon" aria-hidden="true"></div>
                                                <div class="media maintain_div">
                                                    <div className="ds_pic mt-3 mb-2">
                                                        <img src={baseImagePath('icons/avathar3.png')} class="custom_img mr-3"
                                                            alt="Alphabet Internation School" />
                                                    </div>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="sc_name roboto_font">Surendar Kumar</h5>
                                                    <p className="sc_date">Patient</p>
                                                </div>
                                                <div className="rating_star maintain_div">
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                    <span style={{ fontSize: "26px", color: "#f6bb07", borderRadius: "10px" }}>&#9733;</span>
                                                </div>
                                                <div className="media_content mt-5">
                                                    <p className="testmonial_info roboto_font">
                                                        Well experienced and a good doctor. Had a good experience with them, have been consulting her for about 5 years. She and her team are very friendly, polite and co-operative. Would recommend this place for anyone who is looking for a dentist.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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
                                        <h2 className="h2_title montserrat_font">What They Speak About Us</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/we7HAVwEIXw?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=7">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/s1lbN53D3i8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=9">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/K4qvMAxWWfQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=11">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/we7HAVwEIXw?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=7">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/s1lbN53D3i8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=9">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/K4qvMAxWWfQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=11">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/we7HAVwEIXw?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=7">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/s1lbN53D3i8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thebunnyteeth.com&widgetid=9">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
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
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/zl_JwElKmxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/5sCLSO9S8iY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/PP9p_28bjso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/zl_JwElKmxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/zl_JwElKmxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/zl_JwElKmxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/zl_JwElKmxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
                                            <div className="oc_card maintain_div">
                                                <div className="video_data">
                                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/5sCLSO9S8iY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex mb-3">
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