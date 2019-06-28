// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class Footer extends LitElement {
    
  /**
  * Implement `render` to define a template for your element.
  *
  * You must provide an implementation of `render` for any element
  * that uses LitElement as a base class.
  */
  render(){
    /**
    * `render` must return a lit-html `TemplateResult`.
    *
    * To create a `TemplateResult`, tag a JavaScript template literal
    * with the `html` helper function:
    */
    return html`
    <!-- template content -->
    <style>
      :host {
        display: block;
      }

      a {
        text-decoration: none;
      }

      button {
        background-color: transparent;
        border: 0;
        outline: 0;
        padding: 1px 0 7px;
      }

      footer {
        background-color: #2d2d2d;
        padding: 40px 2% 70px;
        position: relative;
      }

      footer,
      .footer__link,
      span.footer__note,
      .sitemap__link {
        color: #ffffff;
      }

      .footer__link {
        display: block;
        font-size: 14px;
        line-height: 1.64;
      }

      .footer__note {
        font-size: 10px;
        height: 14px;
        vertical-align: middle;
      }

      .footer__section {
        padding: 0 30px;
        margin-bottom: 30px;
        vertical-align: top;
      }

      .footer__section--center {
        text-align: center;
      }

      .footer__section--dark {
        background-color: #000000;
      }

      .footer__section h2 {
        width: auto;
      }

      .footer__section h2.footer__title {
        width: 210px;
      }

      .footer__section:last-child {
        bottom: 0;
        left: 0;
        margin-bottom: 0;
        padding: 13px 0;
        position: absolute;
        right: 0;
      }

      .footer__section-title {
        font-weight: 600;
        height: 24px;
        line-height: normal;
      }

      .footer__section-title,
      .footer__text {
        color: rgba(255, 255, 255, 0.75);
      }

      .footer__section-title,
      .footer__title {
        margin-bottom: 5px;
      }

      .footer__section-title--all-caps {
        text-transform: uppercase;
      }

      .footer__text {
        line-height: 1.57;
      }

      h2 {
        font-size: 18px;
        font-weight: normal;
        height: 48px;
        line-height: normal;
        margin: 0 0 15px;
        width: 165px;
      }

      h6 {
        font-weight: normal;
        font-size: 14px;
        height: 19px;
        margin: 0;
      }

      .sitemap__link {
        display: block;
        font-size: 14px;
        line-height: 1.64;
      }

      @media (min-width: 641px) {
        .footer__section,
        .footer__sections {
          display: inline-block;
        }

        .footer__section {
          padding: 0 30px;
          vertical-align: top;
        }

        .footer__section h2 {
          width: auto;
        }

        .footer__section h2.footer__title {
          width: 210px;
        }
      }

      @media (min-width: 1081px) {
        footer {
          padding: 65px 26% 80px;
        }
      }

      @media (width: 1080px) {
        footer {
          padding: 65px 18% 80px;
        }
      }
    </style>

    <footer class="footer">
      <div class="footer__section">
      <h2 class="footer__title">Times of Refreshing Ministries Int’l., Inc.</h2>
      <h6 class="footer__text">Let us all shout our praise to God!</h6>
      </div>
      <div class="footer__sections">
      <div class="footer__section">
        <h2 class="footer__section-title">Sitemap</h2>
        <div class="footer__links">
          ${this.sitemap.map(i => this.page === 'home' ? html`
          <button class="footer__link" @click="${this.onButtonClick}" data-section="${i.section}">
            ${i.text}
          </button>
          ` : html`
          <a class="sitemap__link" name="${i.name}" href="${this.rootPath}${i.link}">${i.text}</a>
          `)}
        </div>
      </div>
      <div class="footer__section">
        <h2 class="footer__section-title">Socials</h2>
        <div class="footer__links">
          ${this.socials.map(i => html`
          <a class="footer__link" href="${i.link}" target="${i.target}" rel="noreferrer">${i.text}</a>
          `)}
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
      page: { type: String },
      rootPath: { type: String },
      sitemap: { type: Array },
      socials: { type: Array },
    };
  }

  constructor() {
    super();
    this.sitemap = [
      { link: '', name: 'home', section: 'banner', text: 'Home' },
      { link: 'events', name: 'events', section: 'events-content', text: 'Events' },
    ];
    this.socials = [
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
    ];
    this.myBool = true;
  }

  onButtonClick({ target }) {
    const { dataset } = target;

    this.dispatchEvent(new CustomEvent('sitemap-click', {
      detail: {
        payload: { section: dataset.section },
      },
    }));
  }
}
// Register the new element with the browser.
customElements.define('tormii-footer', Footer);