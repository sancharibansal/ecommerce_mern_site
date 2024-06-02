import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"
import {sliderItems} from "../data"
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'; 

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "50vh"})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    ${mobile({ width: "30px", height: "30px" })}
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    //background-color: #${props => props.bg};
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
    ${mobile({ height: "50vh", flexDirection: "column" })}
`;
const ImgContainer= styled.div`
    height: 100%;
    flex: 1;
    ${mobile({ height: "50%" })}
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer= styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 45px;
    letter-spacing: 5px;
    color: black;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: #eed1e6;
        transform: scale(1.1);
    }
`;

const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1:0);
        }
    };
  return (
    <Container>
      <Arrow direction="left" onClick = {()=>handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
        // <Slide bg = {item.bg} key={item.id}>
        <Slide bgImg={item.bgImg} key={item.id}>
        <ImgContainer>
            <Image src= {item.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Link to = "/products/women">
            <Button>SHOP NOW</Button>
            </Link>
        </InfoContainer>
        </Slide>
        ))}
        {sliderItems.map((item) => (
        // <Slide bg = {item.bg} key={item.id}>
        <Slide bgImg={item.bgImg} key={item.id}>
        <ImgContainer>
            <Image src= {item.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
        ))}
        {/* <Slide bg="f3e1ec">
        <ImgContainer>
            <Image src= "images/img1.png"/>
        </ImgContainer>
        <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>GET FLAT 20% OFF ON NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide> */}

        {sliderItems.map((item) => (
        // <Slide bg = {item.bg} key={item.id}>
        <Slide bgImg={item.bgImg} key={item.id}>
        <ImgContainer>
            <Image src= {item.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
        ))}{sliderItems.map((item) => (
        // <Slide bg = {item.bg} key={item.id}>
        <Slide bgImg={item.bgImg} key={item.id}>
        <ImgContainer>
            <Image src= {item.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            {/* <Button>SHOP NOW</Button> */}
        </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick = {()=>handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider