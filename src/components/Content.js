import React from "react"
import AboutUs from "./AboutUs"
import Banner from "./Banner"
import Features from "./Features"

const Content = () => (
  <main>
    <Banner />
    <div className="container">
      <AboutUs />

      <div className="row">
        <div className="col-sm-6 col-sm-offset-1">
          <span className="tag">
            <i className="icon icon_who-are-we"></i> We are August
          </span>
          <h1>
            Like the month.
            <br /> And the adjective.
          </h1>
          <p>
            A decade of digital marketing experience and hundreds of projects
            gives us the right to call it as we see&nbsp;it.
          </p>
          <p>
            We’ve built a business immersed in successful digital marketing
            solutions. You know your business better than we ever can. Together,
            we can create something epic. Let’s build a relationship on
            collaboration, creativity and technical&nbsp;superiority.
          </p>
          <p>
            We’re street-smart and we know our stuff but we also like to think
            things through. A strategic approach with effective tactical
            execution wins every&nbsp;time.
          </p>
          <p>
            We love to execute smart strategies and build valuable business
            solutions. We’re proud to say that the quality of our work and the
            relationships we build, drives repeat and referral business. There
            is no better measure of&nbsp;success.
          </p>
          <p>
            We love building useful solutions. Our values underpin everything we
            do. Our approach, clarity of thought, refinement of ideas, thorough
            planning, veracity and high-calibre execution show that we
            mean&nbsp;business.
          </p>
          <p>If that sounds august, you’re right. We&nbsp;are.</p>
        </div>
      </div>

      <Features />
    </div>
  </main>
)

export default Content
