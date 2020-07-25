import React, { useState } from "react"
import styled from "styled-components"
import sprite from "../static/sprite@2x.png"

const Aside = styled.aside`
  margin-top: 135px;
  margin-bottom: 135px;
`

const H3 = styled.h3`
  width: 100%;
`

const Ol = styled.ol`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
`

const Li = styled.li`
  text-align: center;
  font-size: 2.25rem;
  padding: 85px 125px;
  width: 900px;
  line-height: 1.5;
  font-family: "Kreon", serif;
  min-height: 342px;
`

const NextPreviousGroup = styled.div`
  width: 156px;
  margin: 0 auto;
`

const SlickNext = styled.button`
  margin: 0 auto;
  display: block;
  line-height: 0;
  font-size: 0;
  cursor: pointer;
  color: transparent;
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  background: none;
  span {
    background-size: 304px 250px;
    background-image: url(${props => props.sprite});
    background-position: -188px 0;
    display: block;
    width: 116px;
    height: 16px;
    :hover {
      background-position: -188px -92px;
    }
  }
`

const SlickRight = styled.button`
  margin: 0 auto;
  display: block;
  line-height: 0;
  font-size: 0;
  cursor: pointer;
  color: transparent;
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  background: none;
  span {
    background-size: 304px 250px;
    background-image: url(${props => props.sprite});
    background-position: 0 -179px;
    display: block;
    width: 116px;
    height: 16px;
    :hover {
      background-position: -188px -46px;
    }
  }
`

const SlideText = styled.div`
  text-align: center;
  color: #ff0051;
  font-style: italic;
  width: 156px;
  font-family: "Vollkorn", sans-serif;
`

const Features = () => {
  const slides = [
    "Our team is spread across 3 continents. We know how to work together, no matter where we are.",
    "We've been independent and proud since 2005 - and we've got the T-shirt to prove it.",
    "We've shown the world that accessible, standards-compliant websites can rock.",
    "We've developed processes that mean we're both fast and high quality. Yes, you really can have both.",
    "We care about WCAG. We're making it our business to know all there is to know about accessibility.",
    "Creativity is the lifeblood of our business. We believe everyone is creative and everyone can contribute ideas.",
  ]

  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <Aside className="row">
      <H3 className="tag text-center">6 THINGS YOU MIGHT NOT KNOW ABOUT US</H3>
      <Ol className="row">
        <Li>{slides[slideIndex]}</Li>
      </Ol>
      <NextPreviousGroup className="row">
        <SlickNext
          type="button"
          sprite={sprite}
          onClick={() => {
            setSlideIndex(
              slideIndex < slides.length - 1 ? slideIndex + 1 : slideIndex
            )
          }}
        >
          <span>Next</span>
        </SlickNext>
        <SlideText>
          {slideIndex + 1} of {slides.length}
        </SlideText>
        <SlickRight
          type="button"
          sprite={sprite}
          onClick={() => {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideIndex)
          }}
        >
          <span>Previous</span>
        </SlickRight>
      </NextPreviousGroup>
    </Aside>
  )
}

export default Features
