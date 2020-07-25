import React from "react"
import styled from "styled-components"
import bannerImg from "../static/banner.jpg"
import Nav from "./Nav"

const BannerWrapper = styled.div`
  background-color: #f8f8f8;
  background-image: url(${props => props.bg});
  height: 820px;
  background-size: cover;
  z-index: 100;
`

const BannerInner = styled.div`
  position: relative;
  height: 820px;
  color: #f8f8f8;
`

const HeaderContainer = styled.div`
  min-height: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
`

const BottomTriangle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  overflow: hidden;
`

const H1 = styled.h1`
  font-size: 3.5625rem;
  line-height: 1.2;
  margin-top: 200px;
`

const HeaderSmall = styled.small`
  font-size: 0.8125rem;
  display: block;
  font-family: interface, helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 3px;
  -moz-transition: all 200ms cubic-bezier(0.33, 0.005, 0.125, 1.005);
  transition: all 200ms cubic-bezier(0.33, 0.005, 0.125, 1.005);
  margin-bottom: 1em;
`

const createSVG = () => ({
  __html: `<svg style="fill: #fff;" id="header-feature__cover__triangle" width="2550px" height="187px"
         viewBox="969 303.9 2550 186" enableBackground="new 969 303.9 2550 186" xml:space="preserve">
      <path id="header-feature__cover__triangle__path"
  d="M969,303.5C969,303.5,969,490.5,969,490.5C969,490.5,3519,490.5,3519,490.5C3519,490.5,3519,490.5,3519,490.5C3519,490.5,969,303.5,969,303.5C969,303.5,969,303.5,969,303.5"/>
      <desc>Created with Snap</desc>
      <defs/></svg>`,
})

const Banner = () => (
  <BannerWrapper bg={bannerImg}>
    <BannerInner>
      <Nav/>
      <HeaderContainer className="container">
        <div className="row">
          <div className="col-sm-11 col-sm-offset-1">
            <H1>
              <HeaderSmall>We are August</HeaderSmall> Hello.
              <br/> We're August.
            </H1>
          </div>
        </div>
      </HeaderContainer>
      <BottomTriangle dangerouslySetInnerHTML={createSVG()} />
    </BannerInner>
  </BannerWrapper>
)

export default Banner
