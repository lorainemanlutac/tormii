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

class ContactUs extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }

        a {
          font-size: 16px;
          color: #2b2b2b;
        }

        .content {
          background-color: #d8d8d8;
          padding: 80px 35px;
        }

        h4 {
          color: #0096bb;
          margin-top: 0;
          text-transform: uppercase;
        }
        
        .icon__img {
          height: 19px;
          vertical-align: middle;
          width: 23px;
        }

        p {
          margin-bottom: 10px;
          text-align: left;
        }
      </style>

      <section class="banner">
        <iron-image class="banner__img" sizing="cover" alt="TORMII banner." src="./images/banners/events.jpg">
        </iron-image>
      </section>
      <section class="content contact-us-content">
        <h4>Send Us Some Love</h4>
        <p>Metrobank Rosario Branch</p>
        <p>Times of Refreshing Ministries International Inc</p>
        <p>Acct #160-7-16051112-1</p>
        <p>For more information on how to extend donations, please contact us on any of the ff</p>
        <a href="mailto:refreshingministry@yahoo.com" rel="noreferrer">
          <iron-image class="icon__img" alt="email icon." src="./images/icons/baseline-email-black-48-dp.png">
          </iron-image>
          refreshingministry@yahoo.com
        </a>
      </section>
      <tormii-footer page="contact-us" root-path="[[rootPath]]"></tormii-footer>
    `;
  }

  static get properties() {
    return {
      rootPath: { type: String },
    };
  }
}

window.customElements.define('contact-us', ContactUs);
