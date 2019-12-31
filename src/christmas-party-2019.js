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
import './elements/footer.js';
import './shared-styles.js';

class ChristmasParty2019 extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
      <link rel="stylesheet" href="../node_modules/@glidejs/glide/dist/css/glide.core.min.css">
      <style include="shared-styles">
        :host {
          display: block;
        }

        .content__date {
          color: #909090;
          font-size: 14px;
        }

        h4 {
          color: #0096bb;
          margin-top: 0;
        }

        @media (min-width: 641px) {
          .content {
            padding: 140px 25%;
          }
        }
      </style>

      <section class="banner">
        <iron-image
          class="banner__img"
          sizing="cover"
          alt="2nd anniv banner."
          src="./images/events/christmas-party-2019.jpg">
        </iron-image>
      </section>
      <section class="content christmas-party-2019-content">
        <span class="content__date">December 1-2, 2019</span>
        <h4>TORMII 3rd Christmas Party</h4>
        <p>
          Fun games, food, fellowship, beauty contest, all for HIS glory!
          <br><br>
          HE is the reason for the season!
        </p>
        <div class="glide events">
          <div class="glide__track events__container" data-glide-el="track">
            <ul class="glide__slides events__list events__list--unordered">
              <li class="glide__slide events__event">
                <iron-image class="content__card"
                  sizing="cover"
                  alt="2nd year anniversary."
                  src="./images/events/gallery/christmas-party-2019/the-feast.jpg">
                </iron-image>
              </li>
              <li class="glide__slide events__event">
                <iron-image
                  class="content__card"
                  sizing="cover"
                  alt="Training."
                  src="./images/events/gallery/christmas-party-2019/women-of-tormii.jpg">
                </iron-image>
              </li>
              <li class="glide__slide events__event">
                <iron-image class="content__card"
                  sizing="cover"
                  alt="SUMMER OUTING 2019."
                  src="./images/events/gallery/christmas-party-2019/men-of-tormii.jpg">
                </iron-image>
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
            <button class="glide__bullet" data-glide-dir="=0" aria-label="$1"></button>
            <button class="glide__bullet" data-glide-dir="=1" aria-label="$1"></button>
            <button class="glide__bullet" data-glide-dir="=2" aria-label="$1"></button>
          </div>
        </div>
      </section>
      <tormii-footer page="events" root-path="[[rootPath]]"></tormii-footer>
    `;
  }

  static get properties() {
    return {
      rootPath: { type: String },
    };
  }

  ready() {
    super.ready();
    new Glide(this.shadowRoot.querySelectorAll('.glide')[0]).mount();
  }
}

window.customElements.define('christmas-party-2019', ChristmasParty2019);
