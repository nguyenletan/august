import React from "react"
import styled from "styled-components"
import oneBlockTwoImg from "../static/1xBlock_2.png"
import analyticsImg from "../static/Analytics.png"
import bCorpImg from "../static/BCorp.png"
import computerImg from "../static/computer.png"
import legislationImg from "../static/Legislation.png"
import mercyImg from "../static/Mercy.jpg"
import realTileImg from "../static/rea-tile-2.png"
import sodaImg from "../static/SoDA.png"
import conventionImg from "../static/Stick-to-Conventions.png"
import superImg from "../static/Super.png"
import augustImg from "../static/we-are-august-2.jpg"
import workWithUsImg from "../static/work-with-us.jpg"

const Section = styled.aside`
  margin-top: 70px;
  margin-bottom: 125px;
`

const H2 = styled.h3`
  width: 100%;
  font-size: 3.5625rem;
  margin-bottom: 70px;
`

const RealTile = styled.article`
  background-repeat: no-repeat;
  background-image: url(${props => props.background});
  position: relative;

  width: ${props => props.width};
  background-color: #a53c6c;
  background-size: cover;
  height: 433px;

  overflow: hidden;
  backface-visibility: hidden;
`

const StackBoxInner = styled.a`
  display: block;
  color: ${props => props.color || "#fff"};
  height: 100%;
  position: relative;
  .stacked__box__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005);
  }
  .stacked__box__pad {
    padding: 30px 30px 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    position: absolute;
    z-index: 2;
    width: ${props => props.titleWidth};
    h2 {
      position: absolute;
      transition: all 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms;
      top: 30px;
    }

    .tag {
      position: absolute;
      left: 30px;
      top: -18px;
      transition: all 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms;
    }

    .stacked__box__cta::before {
      content: "";
      height: 2px;
      width: 100%;
      background-color: ${props => props.color || "#fff"};
      bottom: 172px;
      left: 30px;
      position: absolute;
      transform: translateX(100%);
      opacity: 0;
      -moz-transition: transform 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005)
          180ms,
        width 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 300ms,
        opacity 200ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms,
        -moz-transform 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms;
      transition: transform 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms,
        width 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 300ms,
        opacity 200ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms,
        -webkit-transform 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms,
        -moz-transform 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms;
    }

    .stacked__box__cta p {
      margin-bottom: 24px;
      bottom: -170px;
      position: absolute;
      transition: all 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms;
      height: 120px;
      font-size: 1.025rem;
    }
  }

  :hover {
    text-decoration: none;
    color: ${props => props.color || "#fff"};
    .stacked__box__overlay {
      opacity: 0.88;
    }

    .stacked__box__pad {
      h2 {
        top: 60px;
      }

      .tag {
        top: 20px;
      }
      .stacked__box__cta p {
        bottom: 0;
      }

      .stacked__box__cta::before {
        transform: translateX(0) translateZ(0);
        width: 38px;
        opacity: 1;
        transition: transform 450ms cubic-bezier(0.33, 0.005, 0.125, 1.005)
            180ms,
          width 450ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 300ms,
          opacity 400ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms,
          -webkit-transform 450ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms,
          -moz-transform 450ms cubic-bezier(0.33, 0.005, 0.125, 1.005) 180ms;
      }
    }
  }
  .tag {
    color: ${props => props.color || "#fff"};
  }
`

const AboutUs = () => {
  return (
    <Section className="row">
      <H2 className="text-center">
        <span className="tag">This is how we roll</span>
        We plan. We craft. We build. We grow.
      </H2>

      <RealTile
        className="stacked__box stacked__box--wide wp-post stacked__box--purple"
        background={realTileImg}
        width="66.6%"
      >
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="60%"
        >
          <div className="stacked__box__pad">
            <span className="tag">12 November 19</span>
            <h2>August and REA win W3 Gold&nbsp;Award.</h2>
            <div className="stacked__box__cta">
              <p>
                We're delighted to announce our recent work in partnership with
                REA Group—for its global corporate site—has won Gold at the 14th
                Annual W3&nbsp;Awards.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#f56762" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile
        className="stacked__box stacked__box--wide wp-post stacked__box--purple"
        background={superImg}
        width="33.3%"
      >
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
        >
          <div className="stacked__box__pad">
            <span className="tag">20 Jun 20</span>
            <h2>Super 8: Eight intriguing articles in June.</h2>
            <div className="stacked__box__cta">
              <p>
                We're delighted to announce our recent work in partnership with
                REA Group—for its global corporate site—has won Gold at the 14th
                Annual W3&nbsp;Awards.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#00a595" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile
        className="stacked__box stacked__box--wide wp-post stacked__box--purple"
        background={conventionImg}
        width="33.3%"
      >
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
        >
          <div className="stacked__box__pad">
            <span className="tag">14 November 18</span>
            <h2>Finding the balance: convention vs creativity in UX design.</h2>
            <div className="stacked__box__cta">
              <p>
                Can convention and creativity co-exist? Rowan weighs up the pros
                and cons of ‘sameness’ in usability, with seven steps to help
                you find the perfect balance.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#47689b" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile
        className="stacked__box stacked__box--wide wp-post stacked__box--purple"
        background={augustImg}
        width="66.6%"
      >
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="60%"
        >
          <div className="stacked__box__pad">
            <span className="tag">We are August</span>
            <h2>
              Like the month.
              <br />
              And the adjective.
            </h2>
            <div className="stacked__box__cta">
              <p>
                Find out more about us. Who we are, how we started and all the
                things that make us August.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#A63C6C" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile background={oneBlockTwoImg} width="33.3%">
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
        >
          <div className="stacked__box__pad">
            <span className="tag">04 September 19</span>
            <h2>A new design system for the VSBC.</h2>
            <div className="stacked__box__cta">
              <p>
                Working in close collaboration with the VSBC, we developed
                streamlined user experiences and a new interface aesthetic to
                ensure small businesses can find the right resources and
                supports for success.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#47689b" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile background={mercyImg} width="33.3%">
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
        >
          <div className="stacked__box__pad">
            <span className="tag">13 March 18</span>
            <h2>Mercy Health and a healthy regard for collaborative design.</h2>
            <div className="stacked__box__cta">
              <p>
                Over the course of four months, 20-plus workshops with more than
                60 medical professionals, multiple site visits, and several
                immersion sessions, we developed a healthy insight into Mercy
                Health.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#3bacd4" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile background={analyticsImg} width="33.3%">
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
        >
          <div className="stacked__box__pad">
            <span className="tag">14 January 19</span>
            <h2>How to grow solid return on your web analytics investment.</h2>
            <div className="stacked__box__cta">
              <p>
                You've probably heard this several times: understanding what's
                happening on your website is critical to success. Let us show
                you how to the most from your web analytics.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#89cacc" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile background={computerImg} width="66.6%">
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="60%"
        >
          <div className="stacked__box__pad">
            <span className="tag">29 October 18</span>
            <h2>
              Google Analytics doesn’t give you the full picture. This does.
            </h2>
            <div className="stacked__box__cta">
              <p>
                As valuable as they are, Google Analytics metrics can sometimes
                be misleading. How can we get a clearer, more comprehensive
                picture of the way people use your digital product? Watch and
                learn. Literally.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#6bbfc1" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile background={legislationImg} width="33.3%">
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
        >
          <div className="stacked__box__pad">
            <span className="tag">22 May 18</span>
            <h2>GDPR: What it means for Australian businesses</h2>
            <div className="stacked__box__cta">
              <p>
                If you’re an agency, business owner, marketer, or just dabble in
                digital—you may have heard of the GDPR. We’re here to simplify
                it for you.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#47689b" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile background={sodaImg} width="33.3%">
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
        >
          <div className="stacked__box__pad">
            <span className="tag">07 December 15</span>
            <h2>August is part of SoDA</h2>
            <div className="stacked__box__cta">
              <p>
                We’re thrilled and humbled to announce that we have recently
                been voted in to the Society of Digital Agencies (SoDA) by the
                full membership.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#47b5d2" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile background={bCorpImg} width="33.3%">
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
        >
          <div className="stacked__box__pad">
            <span className="tag">08 December 15</span>
            <h2>
              August is
              <br />
              now a certified
              <br />B Corporation!
            </h2>
            <div className="stacked__box__cta">
              <p>
                Find out what it means to become a Certified B Corporation and
                why you should consider becoming one too.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#da2a2c" }}
          />
        </StackBoxInner>
      </RealTile>

      <RealTile background={workWithUsImg} width="33.3%">
        <StackBoxInner
          className="stacked__box__inner"
          href="#"
          titleWidth="93%"
          color="#393839"
        >
          <div className="stacked__box__pad">
            <span className="tag">Careers</span>
            <h2>
              Wanna work
              <br />
              with us?
            </h2>
            <div className="stacked__box__cta">
              <p>
                Come along for the ride. Everyone that works at August has one
                goal: create amazing experiences and products that delight and
                surprise people.
              </p>
            </div>
          </div>
          <span
            className="stacked__box__overlay"
            style={{ background: "#f8f8f8" }}
          />
        </StackBoxInner>
      </RealTile>
    </Section>
  )
}

export default AboutUs
