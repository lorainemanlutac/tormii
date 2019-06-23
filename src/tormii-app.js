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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
// Use relative paths for peer dependencies
import './elements/menu.js';
import './tormii-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(TormiiAppGlobals.rootPath);

class TormiiApp extends PolymerElement {
  static get template() {
    return html`
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

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          background-color: #ffffff;
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .header__link {
          font-size: var(--app-toolbar-font-size);
          height: 24px;
          padding: 0;
        }

        .header__link.active {
          font-weight: 600;
        }

        @media (min-width: 641px) {
          app-header {
            padding: 0 5%;
          }
        }

        @media (min-width: 720px) {
          app-header {
            padding: 0 10%;
          }
        }

        @media (min-width: 1080px) {
          app-header {
            padding: 0 17%;
          }
        }

        tormii-menu {
          display: inherit;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <template is="dom-if" if="[[!desktopView]]">
          <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
            <tormii-menu page="[[page]]" root-path="[[rootPath]]"></tormii-menu>
          </app-drawer>
        </template>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <template is="dom-if" if="[[!desktopView]]">
                <paper-icon-button icon="tormii-icons:menu" drawer-toggle=""></paper-icon-button>
                <div main-title="">TORMII</div>
              </template>
              <template is="dom-if" if="[[desktopView]]">
                <a class="header__link" name="home" href="[[rootPath]]">Times of Refreshing Ministries Int’l., Inc.</a>
                <tormii-menu page="[[page]]" root-path="[[rootPath]]"></tormii-menu>
              </template>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <tormii-home name="home"></tormii-home>
            <fb-events name="events"></fb-events>
            <contact-us name="contact-us"></contact-us>
            <tormii-view404 name="404"></tormii-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      desktopView: {
        type: Boolean,
      },
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  ready() {
    super.ready();
    this.setView();
    window.addEventListener('resize', () => this.setView());
  }

  setView() {
    this.desktopView = document.documentElement.clientWidth > 640;
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'tormii-home' in that case. And if the page doesn't exist, show '404'.
    if (!page) {
      this.page = 'home';
    } else if (['home', 'events', 'contact-us'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = '404';
    }
    
    if (this.shadowRoot.querySelector('#drawer') && !this.shadowRoot.querySelector('#drawer').persistent) {
      this.shadowRoot.querySelector('#drawer').close();
    }
  }

  _pageChanged(page) {
    const header_links = this.shadowRoot.querySelectorAll('.header__link');

    if (header_links.length) header_links[0].className = 'header__link';
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'home':
        import('./home.js');
        if (header_links.length) header_links[0].className += ' active';
        break;
      case 'events':
        import('./events.js');
        break;
      case 'contact-us':
        import('./contact-us.js');
        break;
      case '404':
        import('./404.js');
        break;
    }
  }
}

window.customElements.define('tormii-app', TormiiApp);
