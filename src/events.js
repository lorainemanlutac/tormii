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
import './elements/footer.js';
import './shared-styles.js';

class FBEvents extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }

        .event__description {
          left: 0;
          right: 0;
        }

        .events__event {
          list-style: none;
          margin-bottom: 30px;
        }

        .events__list {
          padding-left: 0;
        }

        @media (min-width: 641px) {
          .events__list {
            columns: 2;
          }
        }
      </style>

      <section class="banner">
      <iron-image class="banner__img" sizing="cover" alt="TORMII banner." src="./images/banners/events.jpg">
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
              <template is="dom-repeat" items="[[events]]" as="event">
                <li class="glide__slide events__event">
                  <a href="[[event.event]]">
                    <iron-image class="events__img" sizing="cover" alt="[[event.alt]]." src="[[event.imageSrc]]">
                    </iron-image>
                    <div class="event__description">
                      <span class="event__date">[[event.date]]</span>
                      <h6 class="event__title">[[event.title]]</h6>
                    </div>
                  </a>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </section>
      <tormii-footer page="events" root-path="[[rootPath]]"></tormii-footer>
    `;
  }

  static get properties() {
    return {
      events: {
        type: Array ,
        value: [
          {
            alt: '2nd year anniversary',
            date: 'July 6, 2019',
            event: '/newsletter',
            imageSrc: './images/events/2nd-yr-anniv.jpg',
            title: 'Times of Refreshing Ministries Int\'l. Inc.,',
          },
          {
            alt: 'Training',
            date: 'May 21, 2019',
            imageSrc: './images/events/training.jpg',
            title: 'Caring Well by Listening Well',
          },
          {
            alt: 'SUMMER OUTING 2019',
            date: 'April 25, 2019',
            imageSrc: './images/events/SUMMER OUTING 2019.jpg',
            title: 'Summer Outing 2019',
          },
          {
            alt: 'General Meeting',
            date: 'March 12, 2019',
            imageSrc: './images/events/TORMII.jpg',
            title: 'General Meeting',
          },
        ],
      },
      rootPath: { type: String },
    };
  }
}

window.customElements.define('fb-events', FBEvents);
