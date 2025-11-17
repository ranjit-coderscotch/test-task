"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import BBBReview from "@/assets/images/bbb-reviews.svg";
import TrustPilotReview from "@/assets/images/trustpilotreviews.svg";
import GoogleReview from "@/assets/images/google-reviews.svg";
import CheckIcon from "@/assets/images/check-icon.svg";
import SliderImage1 from "@/assets/images/sliderimg1.png";
import ReviewRatingIcon from "@/assets/images/star-icon.svg";
import CheckDoubleIcon from "@/assets/images/down-double-arrow-icon.svg";

function LandingPage() {
  return (
    <>
      <main className="property-page">
        <div className="container">
          <section className="breadcrumb-with-rating-section d-flex justify-content-between align-items-center">
            <div className="title-with-breadcrumb">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <ol className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <a href="#">Locations</a>
                  </li>

                  <li className="breadcrumb-separator">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="#A4A7AE"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>

                  <li className="breadcrumb-item">
                    <a href="#"> {`{state}`}</a>
                  </li>

                  <li className="breadcrumb-separator">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="#D5D7DA"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                  <li className="breadcrumb-item active">{`{city}`}</li>
                </ol>
              </nav>
              <h1 className="property-title">
                Virtual office in{" "}
                <span className="highlight-text">{`{city}`}</span>
              </h1>
              <p className="property-description">
                {`{city}`} Virtual Business Address & Live Receptionist
                Answering Service
              </p>
            </div>

            <div className="review-companies-box d-flex justify-content-between align-items-center">
              <a href="#" className="review-companies-action">
                <Image
                  src={BBBReview}
                  alt="bbb company review"
                  width={131}
                  height={46}
                />
              </a>
              <a href="#" className="review-companies-action">
                <Image
                  src={TrustPilotReview}
                  alt="trust pilot company review"
                  width={97}
                  height={47}
                />
              </a>
              <a href="#" className="review-companies-action">
                <Image
                  src={GoogleReview}
                  alt="google company review"
                  width={129}
                  height={41}
                />
              </a>
            </div>
          </section>

          <section className="property-list">
            <div className="property-list-image"></div>
            <div className="property-list-content"></div>
          </section>

          <section className="property-card-list">
            <div className="row align-items-start ">
              <div className="col-lg-7 property-list-image">
                <Carousel className="overflow-hidden">
                  <Carousel.Item>
                    <Image
                      src={SliderImage1}
                      alt="slider image"
                      width={696}
                      height={400}
                      className="slider-image"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <Image
                      src={SliderImage1}
                      alt="slider image"
                      width={696}
                      height={400}
                      className="slider-image"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <Image
                      src={SliderImage1}
                      alt="slider image"
                      width={696}
                      height={400}
                      className="slider-image"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="property-loaction-detail">
                  <div className="property-loaction-title-rating d-flex align-items-center">
                    <h2 className="property-loaction-title">
                      {`{city}`}, {`{STATE}`}
                    </h2>
                    <div className="review-rating-star d-flex align-items-center">
                      <Image
                        src={ReviewRatingIcon}
                        alt="star icon"
                        width={20}
                        height={20}
                      />
                      <Image
                        src={ReviewRatingIcon}
                        alt="star icon"
                        width={20}
                        height={20}
                      />
                      <Image
                        src={ReviewRatingIcon}
                        alt="star icon"
                        width={20}
                        height={20}
                      />
                      <Image
                        src={ReviewRatingIcon}
                        alt="star icon"
                        width={20}
                        height={20}
                      />
                      <Image
                        src={ReviewRatingIcon}
                        alt="star icon"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="property-loaction-with-price d-flex align-items-center">
                    <p className="property-loaction-des">
                      200 E Robinson Street, Suite 1120 <br /> {`{city}`}{" "}
                      {`{state}`}
                      32801 <br /> (407) 559 - 2000
                    </p>
                    <h3 className="property-loaction-price">
                      $99<span className="loaction-price-month">/mo</span>
                    </h3>
                  </div>

                  <div className="mobile-price-with-rating d-md-none">
                    <div className="mobile-price-review">
                      <div className="review-rating-star d-flex align-items-center">
                        <Image
                          src={ReviewRatingIcon}
                          alt="star icon"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={ReviewRatingIcon}
                          alt="star icon"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={ReviewRatingIcon}
                          alt="star icon"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={ReviewRatingIcon}
                          alt="star icon"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={ReviewRatingIcon}
                          alt="star icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <h3 className="property-loaction-price">
                        $99<span className="loaction-price-month">/mo</span>
                      </h3>
                    </div>
                    <button className="property-loaction-mbile-btn">
                      Select this location
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 property-list-content">
                <div className="location-features">
                  <div className="when-we-say-content">
                    When We Say <b>All-Inclusive,</b> <br /> We Mean
                    {""} <b>ALL-INCLUSIVE:</b>
                  </div>

                  <ul className="list-unstyled feature-list">
                    <li>
                      <Image
                        src={CheckIcon}
                        alt="check icon"
                        width={32}
                        height={32}
                      />{" "}
                      Prestigious Business Address
                    </li>
                    <li>
                      <Image
                        src={CheckIcon}
                        alt="check icon"
                        width={32}
                        height={32}
                      />{" "}
                      Professional Live Call Answering
                    </li>
                    <li>
                      <Image
                        src={CheckIcon}
                        alt="check icon"
                        width={32}
                        height={32}
                      />{" "}
                      Personalized Call Transferring
                    </li>
                    <li>
                      <Image
                        src={CheckIcon}
                        alt="check icon"
                        width={32}
                        height={32}
                      />{" "}
                      Business Phone/Fax Number
                    </li>
                    <li>
                      <Image
                        src={CheckIcon}
                        alt="check icon"
                        width={32}
                        height={32}
                      />{" "}
                      Professional Mail Receipt
                    </li>
                    <li>
                      <Image
                        src={CheckIcon}
                        alt="check icon"
                        width={32}
                        height={32}
                      />{" "}
                      Voicemail/Fax Converted to Email
                    </li>
                    <li>
                      <Image
                        src={CheckIcon}
                        alt="check icon"
                        width={32}
                        height={32}
                      />{" "}
                      Digital Mail Notifications by Mail X
                    </li>
                    <a className="mobile-see-all-btn d-md-none">
                      <Image
                        src={CheckDoubleIcon}
                        alt="doublr check icon"
                        width={32}
                        height={32}
                      />{" "}
                      See All Features
                    </a>
                  </ul>

                  <p className="price-text">
                    All for only <strong>$99</strong>/month
                  </p>

                  <button className="select-location-btn">
                    Select This Location
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
