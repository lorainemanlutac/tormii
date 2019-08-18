// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import '@polymer/iron-selector/iron-selector.js';

// Extend the LitElement base class
class Menu extends LitElement {

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
          --app-secondary-color: #2b2b2b;
          --app-toolbar-font-size: 16px;

          display: block;
        }

        a {
          color: var(--app-secondary-color);
          display: block;
          padding: 0 30px;
          text-decoration: none;
        }

        a.iron-selected {
          font-weight: bold;
        }

        .drawer-list {
          margin: 0 20px;
        }

        iron-selector a {
          display: table-cell;
          font-size: var(--app-toolbar-font-size);
          padding: 0 15px;
          vertical-align: middle;
        }

        @media (max-width: 640px) {
          .drawer-list a {
            display: block;
            padding: 0 16px;
            text-decoration: none;
            color: var(--app-secondary-color);
            line-height: 40px;
          }

          .drawer-list a.iron-selected {
            color: black;
            font-weight: bold;
          }
        }

        @media (min-width: 641px) {
          .drawer-list {
            display: table;
            height: 24px;
            position: absolute;
            right: 0;
          }
        }
      </style>

      <iron-selector selected="${this.page}" attr-for-selected="name" class="drawer-list" role="navigation">
        ${this.menu.map(i => html`<a name="${i.name}" href="${this.rootPath}${i.link}">${i.text}</a>`)}
      </iron-selector>
    `;
  }

  static get properties() {
    return {
      menu: { type: Array },
      page: { type: String },
      rootPath: { type: String },
    };
  }
  
  constructor() {
    super();
    this.menu = [
      { link: '', name: 'home', text: 'Home' },
      { link: 'events', name: 'events', text: 'Events' },
      { link: 'newsletter', name: 'newsletter', text: 'Newsletter' },
      { link: 'contact-us', name: 'contact-us', text: 'Contact Us' },
    ];
  }
}
// Register the new element with the browser.
customElements.define('tormii-menu', Menu);