/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import Glide from '@glidejs/glide';
import './shared-styles.js';

class TormiiHome extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
      <link rel="stylesheet" href="../node_modules/@glidejs/glide/dist/css/glide.core.min.css">
      <style include="shared-styles">
        :host {
          display: block;
        }

        .banner__img {
          min-height: 225px;
        }

        .content__mission {
          background-size: cover;
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
          height: 67.5px;
          line-height: normal;
          opacity: 0.75;
          padding: 15px;
          position: absolute;
        }

        .event__description,
        .glide__arrows {
          width: 100%;
        }

        .event__title--all-caps {
          text-transform: uppercase;
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

        @media (min-width: 641px) {
          .banner__img {
            min-height: 615px;
          }

          .content__block {
            display: block;
          }

          .content--merged {
            display: table;
            width: 100%;
          }

          .content--merged .content {
            display: table-cell;
          }

          .content--merged .content__about-us {
            width: 55%;
          }

          .content--merged .content__about-us .content__header {
            text-align: right;
          }

          .content--merged .content__what-we-do {
            width: 45%;
          }

          .content--merged .content__header--italic {
            font-size: 20px;
          }

          .content__overlay--triangle {
            background-image: linear-gradient(to right top, #1f1f1f 0%, #1f1f1f 50%, transparent 50%);
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 30%;
            z-index: 1;
          }

          .events-content {
            padding: 140px 25%;
          }

          .glide__bullet {
            height: 16px;
            width: 16px;
          }
        }
      </style>

      <section class="banner">
        <iron-image class="banner__img" sizing="cover" alt="TORMII banner." src="./images/banner.jpg">
        </iron-image>
      </section>
      <section class="content events-content">
        <h1 class="content__header">Our Latest Events</h1>
        <p class="content__text content__text--center">
          Feel the refreshing presence of God in every event and celebration of His faithfulness!
        </p>
        <div class="glide events">
          <div class="glide__track events__container" data-glide-el="track">
            <ul class="glide__slides events__list events__list--unordered">
              <li class="glide__slide events__event">
                <iron-image class="content__card"
                  sizing="cover"
                  alt="2nd year anniversary."
                  src="./images/events/2nd-yr-anniv.jpg">
                </iron-image>
                <div class="event__description">
                  <span class="event__date">July 6, 2019</span>
                  <h6 class="event__title">Times of Refreshing Ministries Int'l. Inc.,</h6>
                </div>
              </li>
              <li class="glide__slide events__event">
                <iron-image class="content__card" sizing="cover" alt="Training." src="./images/events/training.jpg">
                </iron-image>
                <div class="event__description">
                  <span class="event__date">May 21, 2019</span>
                  <h6 class="event__title">Caring Well by Listening Well</h6>
                </div>
              </li>
              <li class="glide__slide events__event">
                <iron-image class="content__card"
                  sizing="cover"
                  alt="SUMMER OUTING 2019."
                  src="./images/events/SUMMER OUTING 2019.jpg">
                </iron-image>
                <div class="event__description">
                  <span class="event__date">May 6, 2019</span>
                  <h6 class="event__title event__title--all-caps">Summer Outing 2019</h6>
                </div>
              </li>
            </ul>
          </div>
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <iron-image class="content__icon content__icon--small"
                sizing="cover"
                alt="Arrow left."
                src="./images/icons/baseline-arrow_left-24px.svg">
              </iron-image>
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <iron-image class="content__icon content__icon--small"
                sizing="cover"
                alt="Arrow right."
                src="./images/icons/baseline-arrow_right-24px.svg">
              </iron-image>
            </button>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
          </div>
        </div>
      </section>
      <div class="content--merged">
        <section class="content content--dark content__what-we-do">
          <h1 class="content__header content__header--align-left">What We Do</h1>
          <span class="content__text content__text--white">What's in store for our pastors and missionaries?</span>
          <ul class="content__list content__list--unordered">
            <template is="dom-repeat" items="[[activities]]" as="activity">
              <li class="content__item">[[activity]]</li>
            </template>
          </ul>
        </section>
        <section class="content content__about-us">
          <div class="content__overlay--triangle"></div>
          <div class="content__overlay"></div>
          <h1 class="content__header content__header--center content__header--italic content__header--lowercase content__header--top content__header--white">
            We encourage and <span class="content__header--highlight">motivate pastors and missionaries to continue serving God</span> through <span class="content__block">various</span> <span class="content__block">refreshing and relaxing</span> <span class="content__block">activities</span>
          </h1>
        </section>
      </div>
      <section class="content content__mission">
        <div class="content__overlay"></div>
        <h1 class="content__header content__header--center content__header--lowercase content__header--top content__header--white">
          <span class="content__header--large content__header--italic content__header-text">Our mission</span> <span class="content__header-text--small content__header-text">is to encourage, motivate, enrich, and strengthen pastors and missionaries worldwide</span>
        </h1>
      </section>
      <section class="content content__testimonials">
        <h1 class="content__header content__header--small">Testimonials</h1>
        <template is="dom-repeat" items="[[testimonials]]">
          <div class="content__testimonial">
            <iron-image class="content__icon content__icon--medium"
              sizing="cover"
              alt="[[item.alt]]."
              src="[[item.imageSrc]]">
            </iron-image>
            <div class="testimonial__content">
              <h1 class="testimonial__text">[[item.attestant]]</h1>
              <p class="content__text">[[item.testimonial]]</p>
            </div>
          </div>
        </template>
      </section>
      <footer class="footer">
        <div class="footer__section">
          <h2 class="footer__title">Times of Refreshing Ministries Int’l., Inc.</h2>
          <h6 class="footer__text">Let us all shout our praise to God!</h6>
        </div>
        <div class="footer__sections">
          <div class="footer__section">
            <h2 class="footer__section-title">Sitemap</h2>
            <div class="footer__links">
              <template is="dom-repeat" items="[[sitemap]]">
                <button class="footer__link" on-tap="_onButtonClick" data-event="scroll" data-section$="[[item.section]]">
                  [[item.text]]
                </button>
              </template>
            </div>
          </div>
          <div class="footer__section">
            <h2 class="footer__section-title">Socials</h2>
            <div class="footer__links">
              <template is="dom-repeat" items="[[socials]]" as="social">
                <a class="footer__link" href="[[social.link]]" target="[[social.target]]">[[social.text]]</a>
              </template>
            </div>
          </div>
          <div class="footer__section footer__section--center footer__section--dark">
            <span class="footer__note footer__section-title footer__section-title--all-caps">tormii.org</span>
          </div>
        </div>
      </footer>
    `;
  }

  static get properties() {
    return {
      activities: {
        type: Array,
        value: [
          'Shopping Spree',
          'Grocery Spree',
          'Hotel Stay',
          'Vacation Getaway',
          'Dine Out',
          'Health & Wellness',
          'Theme Park Adventures',
          'Water Activities',
        ],
      },
      sitemap: {
        type: Array,
        value: [{ section: 'banner', text: 'Home' }, { section: 'events-content', text: 'Events' }],
      },
      socials: {
        type: Array,
        value: [
          {
            link: 'mailto:refreshingministry@yahoo.com',
            target: '',
            text: 'refreshingministry@yahoo.com',
          },
          {
            link: 'https://web.facebook.com/RefreshingMinistry',
            target: '_blank',
            text: 'facebook.com/RefreshingMinistry',
          },
        ],
      },
      testimonials: {
        type: Array,
        value: [
          {
            alt: 'Ben Land testimonial',
            attestant: 'Ben Land',
            imageSrc: './images/attestants/Ben-Land.jpg',
            testimonial: 'Just finished my first every mission trip in the Philippines with some time at the beach with Refreshing Ministries. Truly wonderful time with great people! Very refreshing.',
          },
          {
            alt: 'Jayvie A. Talosig testimonial',
            attestant: 'Jayvie A. Talosig',
            imageSrc: './images/attestants/Jayvie-A-Talosig.jpg',
            testimonial: 'And if anyone gives even a cup of cold water to one of these little ones who is my disciple, truly I tell you, that person will certainly not lose their reward.”',
          }
        ],
      },
    };
  }

  ready() {
    super.ready();
    new Glide(this.shadowRoot.querySelectorAll('.glide')[0]).mount();
  }

  _onButtonClick({ target }) {
    const { dataset } = target;

    switch (dataset.event) {
      case 'scroll':
        this.shadowRoot.querySelectorAll(`.${dataset.section}`)[0].scrollIntoView({ behavior: 'smooth' });
        break;
    
      default:
        break;
    }
  }
}

window.customElements.define('tormii-home', TormiiHome);
