import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Since the majority of citizens in the US are under 'stay at home' orders, bars and
      restaurants have had to change drastically. Takeout and delivery are still allowed,
      but in most cases bars and restaurants have laid off or furloughed much of their staff.
      In Iowa State this will be the case until at least May 4th, and it will take longer for
      folks to get back on their feet.
    </p>
    <p>
      This site was inspired by Jacqi and Noah's pdxtipjar.com, a virtual "tip jar" for Portland's
      service industry workers. Simply put, if you've lost hours or your job, we hope you'll sign
      up to receive tips. If you've been fortunate enough to stay fully employed, we encourage you
      to tip as often as you can.
    </p>
    <p>Grateful for your support,</p>
    <p>Anand Bala</p>
    <p>
      <a href="mailto:anand.bala@icaiowa.org">anand.bala@icaiowa.org</a>
    </p>
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://ofwemergencyfund.org/">One Fair Wage Emergency Fund</a>
      </li>
      <li>
        <a href=" https://www.restaurantworkerscf.org/news/2020/3/15/restaurant-workers-community-foundation-announces-the-formation-of-restaurant-workers-covid19-crisis-relief-fund">
          Restaurant Workers’ Community Foundation COVID19 Crisis Relief Fund
        </a>
      </li>
      <li>
        <a href="https://www.usbgfoundation.org/beap-application">
          USBG National Charity Foundation
        </a>
      </li>
      <li>
        Food assistance: <a href="https://oregon.gov">oregon.gov</a> |{" "}
        <a href="https://oregonfoodbank.org">Oregon Food Bank</a>
      </li>
      <li>
        Rent assistance: <a href="https://homeforward.org">Home Forward</a> |{" "}
        <a href="https://caowash.org">Community Action</a>
      </li>
      <li>
        Utility assistance: <a href="https://impactnw.org">Impact NW</a> |{" "}
        <a href="https://humansolutions.org">Human Solutions</a>
      </li>
      <li>
        Medical assistance: <a href="https://oregon.gov">oregon.gov</a>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;
