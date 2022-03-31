import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import 'antd/dist/antd.min.css';
import '../styles/mainCarousel.css'

const MainCarouselBox = styled.div`
  width: 100%;
  position: relative;
  margin: 30px 0;
`
const MainBannerImg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  img{
    width: 100%;
  }
`
const ContentBox = styled.div`
  height: 360px;  
`

// Carousel 스타일 및 속성
const contentStyle = {
  height: '360px',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'none',
};

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <img alt='next' src='./img/leftArrow.png'></img>    
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <img alt='next' src='./img/rightArrow.png'></img>
  </button>
);


export const MainCarousel = () => {
  return (
    <MainCarouselBox>
        <MainBannerImg>
          <img alt='MainBannerImg' src='./img/mainBannerImg.png'></img>
        </MainBannerImg>
        <Carousel effect="fade" dots={false} arrows={true} prevArrow={<SlickArrowLeft />} nextArrow={<SlickArrowRight />} autoplay>
          <ContentBox>
            1
          </ContentBox>
          <ContentBox>
            2
          </ContentBox>
          {/* <div>
            <h3 style={contentStyle}>

            </h3>
          </div> */}
          {/* <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div> */}
        </Carousel>
        
    </MainCarouselBox>
  )
}
