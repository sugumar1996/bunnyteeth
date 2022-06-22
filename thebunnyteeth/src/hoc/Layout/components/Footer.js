import React from "react";
import { baseImagePath } from "utility/utility";

export const Footer = () => {
  return (
    <div className="dental_services header_margin footer_block">
      <footer className="dental_services_wrap maintain_div py_80 footer_curve">
        <div className="container custom_container">
          <div className="row">
            <div className="col-lg-12">
              <header className="maintain_div mb_30">
                <h3 className="h3_title montserrat_font">Get in Touch With Us.</h3>
              </header>
              <div className="row">
                <div className="col-lg-4 d-flex">
                  <div className="contact_card maintain_div rectangle_border">
                    <div className="media_object">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <div className="os_icon_wrap mb_30 secondary_color_bg ">
                            <div className="inner_icon maintain_div"><i class="fa fa-home icon_style text-white" aria-hidden="true"></i></div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="h5_title text_color montserrat_font mb-3 roboto_font primaryColor">Our Clinic</h5>
                          <p className="ds_info m-0 text_color roboto_font">
                            # 72/60, Bazullah Road, T.Nagar, Chennai - 600017
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="contact_card maintain_div rectangle_border">
                    <div className="media_object">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <div className="os_icon_wrap mb_30 secondary_color_bg ">
                            <div className="inner_icon maintain_div"><i class="fa fa-home icon_style text-white" aria-hidden="true"></i></div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="h5_title text_color montserrat_font mb-3 roboto_font primaryColor">Call Us</h5>
                          <p className="ds_info m-0 text_color roboto_font">
                            +(91) 44-42121819
                          </p>
                          <p className="ds_info m-0 text_color roboto_font">
                            +(91) 98400 31819
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="contact_card maintain_div rectangle_border">
                    <div className="media_object">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <div className="os_icon_wrap mb_30 secondary_color_bg ">
                            <div className="inner_icon maintain_div"><i class="fa fa-home icon_style text-white" aria-hidden="true"></i></div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="h5_title text_color montserrat_font mb-3 roboto_font primaryColor">Email Us</h5>
                          <p className="ds_info m-0 text_color roboto_font">
                            thebunnyteeth@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy_right py-2 maintain_div">
        <div className="container custom_container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copy_right_wrapper text-center">
                <div className="maintain_div mb-3">
                  <a href="index.html" class="main_logo d-flex align-items-center mr-2 text-center">
                    <img src={baseImagePath('icons/main_logo.png')} class="custom_img"
                      alt="Alphabet Internation School" />
                  </a>
                  <p className="cr_info font_size_14 m-0 montserrat_font secondaryColor">Multi Speciality Dental Clinic, Laser & Implants</p>
                </div>
                <div class="cr_main_block maintain_div">
                  <p className="roboto_font">© 2021 The Bunny Teeth. All rights reserved.&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
