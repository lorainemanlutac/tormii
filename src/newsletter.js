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

class Newsletter extends PolymerElement {
  static get template() {
    return html`
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
        <iron-image class="banner__img" sizing="cover" alt="2nd anniv banner." src="./images/banners/2ndanniv.jpg">
        </iron-image>
      </section>
      <section class="content newsletter-content">
        <span class="content__date">July 6, 2019</span>
        <h4>TORMII 2nd Year Anniversary</h4>
        <p>
          Happy 2nd Anniversary TORMII!
          <br><br>
          Times of Refreshing Ministries International Incorporated (TORMII) celebrated their 2nd founding anniversary at Twin Lakes Hotel, Tagaytay City last July 6, 2019. With this year’s theme Unshakable, more than 60 members and their guests attended and 20 Pastors & Missionaries and their spouses got invited to witness God’s generosity and faithfulness to this ministry in its second year.
          <br><br>
          Mr. Eisen Joel and Ms. Rolette Frias as master of ceremonies effectively managed the program throughout the day. New Life Music Ministry led by Sis. Marizel Yap led the congregation in a wonderful praise and worship at the start of the program with a prayer from Bro. Michael Marcos.
          <br><br>
          Words of encouragement came from the Vice President of TORMII, Sis. Maricel Yamat. She exhorted on Psalm 16:8, being the theme verse of this year’s anniversary. “I keep my eyes always on the Lord. With Him at my right hand, I will not be shaken.” She encouraged everyone to never give up on obeying God and His ministry even in times of tribulations and hardships. She testified that in faithfully pursuing the call of God in her life, miracles and breakthroughs continue to happen. Finally, she challenged the members to be steadfast in prayer and service to God because they are unshakable!
          <br><br>
          The program continues with the presentation of the financial status of the ministry headed by Sis. Aida Mondala, Corporate Treasurer; Sis. Jenny Aquino, Auditor; and Sis. Basilisa Tenorio, Liason Officer. Further, the website of the ministry was first launched during the anniversary. Sis. Kelly Asis, through an audio visual presentation, discussed about the contents of the website such as the ministry’s latest events, mission, testimonials and Contact Us page.
          <br><br>
          Next is one of the highlights of this year’s anniversary, the recognition of its new members. Bro. Mike Marcos called everyone in front and prayed for the hearts and obedience of the Freshters and Freshmen to their calling in the ministry. He remarked that the members are so excited to welcome them and that they have a family in this ministry. He also declared that these people will never be the same again.
          <br><br>
          So what are you waiting for? Join now!
          <br><br>
          Along with the celebration of the anniversary, the ministry also recognized the new officers for the year. A short briefing was then conducted by Sis. Kristine Villanueva on refreshing activities that happen throughout the year.
          <br><br>
          The first half of the program ended with a prayer by Dr. Anthony Asis.
          <br><br>
          As what they do, members invited Pastors and Missionaries in the anniversary and had a wonderful time with them as they shared about their testimonies during their refreshing activities in the ministry.
          <br><br>
          The afternoon program started with Praise and Worship led by New Life Music Ministry and Bro. Roger Yamat’s message as the President and Co-founder of TORMII. He highlighted that the giving in the ministry doubled in spite of the fact that there has been less members for the year. God is on the move! He also shared that the ministry is serious about having fun! What more can you say, right? He ended his message with his heart’s desire to see what God has in store for the ministry and for the families of every members.
          <br><br>
          For the benediction, Pastor Romil Napila as the ministry advisor shared his own experiences from the refreshing of TORMII and preached about stepping into the call of God. He emphasized that the ministry is doing something beyond the ordinary and that he prayed for covering and provision in every aspect to the ministry.
          <br><br>
          Awarding of certificates was also conducted to the Board of Trustees and Dr. Anthony and Kelly Asis shared about their own testimonies as members of the ministry. Truly God has promoted their lives and provided their needs since they have decided to follow Jesus through the ministry. New car, why not?
          <br><br>
          Lastly, an audio visual presentation on the vision of the TORMII in going to Korea to do the works of the Lord was introduced. The awesome same day edit video of Rock’nclay, provider of photography and videography for the event, was also presented.
          <br><br>
          No doubt it has been a fruitful day for everyone! And because TORMII is serious about having fun, all couples and members enjoyed the dancing and party time after the program was ended by a prayer by Engr. Albert Domingo.
          <br><br>
          Again, Happy 2019 Freshters and Freshmen!
        </p>
      </section>
      <tormii-footer page="events" root-path="[[rootPath]]"></tormii-footer>
    `;
  }

  static get properties() {
    return {
      rootPath: { type: String },
    };
  }
}

window.customElements.define('news-letter', Newsletter);
