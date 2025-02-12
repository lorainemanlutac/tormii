/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      a {
        text-decoration: none;
      }

      a,
      .content__header.content__header--white,
      .content__list,
      .content__text--white {
        color: #ffffff;
      }

      .banner__img {
        min-height: 225px;
      }

      button {
        background-color: transparent;
        border: 0;
        outline: 0;
        padding: 1px 0 7px;
      }

      .content {
        padding: 75px 25px;
      }

      .content__about-us {
        background: url(./images/about-us.jpg) center;
      }

      .content__about-us {
        background-size: cover;
      }

      .content__about-us,
      .content__header--top,
      .content__mission {
        position: relative;
      }

      .content__card {
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        height: 208px;
        padding: 16px;
      }

      .content--dark {
        background-color: #1f1f1f;
      }

      .content__header {
        text-transform: uppercase;
      }

      .content__header--align-left {
        text-align: left;
      }

      .content__header--center,
      .content__text--center {
        width: 240px;
      }

      .content__header--center,
      .content__header--small,
      .content__text--center {
        margin: 0 auto;
      }

      .content__header--italic {
        font-style: italic;
      }

      .content__header--highlight,
      h1 {
        color: #00bae9;
      }

      .content__header--large {
        font-size: 30px;
      }
      
      .content__header--lowercase {
        text-transform: none;
      }

      .content__header--small {
        width: 180px;
      }

      .content__header-text--small {
        font-size: 16px;
      }

      .content__header-text--small {
        font-weight: 600;
      }

      .content__header-text {
        display: block;
      }

      .content__icon {
        border-radius: 50%;
      }

      .content__icon--medium {
        height: 122px;
        width: 122px;
      }

      .content__icon--small {
        background-color: #d8d8d8;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
        height: 22px;
        width: 22px;
      }

      .content__item {
        padding-left: 10px;
      }

      .content__list,
      .content__text,
      p {
        font-size: 12px;
        line-height: 1.75;
      }

      .content__list--unordered {
        padding-left: 23px;
      }

      .content__mission {
        background: url(./images/refresh.jpg) center;
      }

      .content__overlay {
        height: 100%;
        left: 0;
        opacity: .8;
        position: absolute;
        top: 0;
        width: 100%;
      }

      .content__overlay {
        background-color: #000000;
      }

      .content__testimonial {
        margin-top: 45px;
      }

      .content__testimonial,
      h1,
      p {
        text-align: center;
      }

      .content__testimonials {
        padding: 45px 30px 60px;
      }

      .content__what-we-do {
        padding: 75px 35px;
      }

      .event__date {
        height: 14px;
        opacity: 0.75;
        font-size: 10px;
        vertical-align: top;
      }

      .event__description {
        background-color: #000000;
        border-radius: 0 0 5px 5px;
        bottom: 7px;
        color: #ffffff;
        line-height: normal;
        opacity: 0.75;
        padding: 15px;
        position: absolute;
      }

      .events__img {
        height: 208px;
        border-radius: 8px;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.12), 0 0 15px 0 rgba(0, 0, 0, 0.03);
      }

      .event__title--all-caps {
        text-transform: uppercase;
      }

      .glide__arrows {
        width: 100%;
      }

      .glide__arrow--left {
        float: left;
        margin-left: -10px;
      }

      .glide__arrow--right {
        float: right;
        margin-right: -10px;
      }

      .glide__arrows {
        bottom: 76.5px;
        position: absolute;
      }

      .glide__bullet {
        border-radius: 50%;
        height: 10px;
        width: 10px;
        background-color: #d8d8d8;
      }

      .glide__bullet--active {
        background-color: #00bae9;
      }

      .glide__bullets {
        text-align: center;
      }

      .glide__slide {
        position: relative;
      }

      .glide__slides {
        margin-bottom: 0;
      }

      h6 {
        font-size: 14px;
      }

      h1 {
        font-size: 20px;
        font-weight: 800;
      }

      h1.testimonial__text {
        color: #4a4a4a;
        height: 27px;
        margin: 22px 0 8px;
      }

      h1,
      h6,
      p {
        margin: 0;
      }

      h6 {
        font-weight: normal;
      }

      iron-image {
        width: 100%;
      }

      @media (min-width: 641px) {
        .banner__img {
          min-height: 615px;
        }

        .content__card {
          height: 350px;
        }

        .content__header--large {
          font-size: 50px;
        }

        .content__header-text--small {
          font-size: 30px;
        }

        .content__icon--medium {
          height: 278px;
          width: 278px;
        }

        .content__list,
        .content__text,
        p {
          font-size: 16px;
          line-height: 1.5;
        }

        .content__mission .content__header--center {
          width: 500px;
        }

        .content__testimonial {
          display: table;
          margin-top: 55px;
        }

        .content__testimonial > * {
          display: table-cell;
          vertical-align: middle;
        }

        .content__testimonials {
          padding-bottom: 190px;
        }

        .content__testimonials .content__header--small {
          width: auto;
        }

        .content__testimonials-container > div {
          display: inline-block;
        }

        .content__text--center {
          width: 250px;
        }
        
        .content__what-we-do > * {
          display: block;
          margin: 0 auto;
          width: 240px;
        }

        .events__img {
          height: 348px;
        }

        .glide__bullet {
          height: 16px;
          width: 16px;
        }

        h1 {
          font-size: 30px;
        }

        h1.testimonial__text {
          height: auto;
        }

        .testimonial__content {
          padding-left: 45px;
        }

        .testimonial__content * {
          text-align: left;
        }
      }

      @media (min-width: 1081px) {
        .content__testimonial {
          margin: 55px 25% 0;
        }
      }

      @media (width: 1080px) {
        .content__testimonial {
          margin: 55px 18% 0;
        }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
