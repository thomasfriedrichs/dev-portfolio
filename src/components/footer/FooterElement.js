import styled from "styled-components";
import Sizes from "../styles/themes/Sizes";

export const FooterWrapper = styled.div` 
  position: relative;
	height: 250px;
	min-height: 100px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: black;
	background-size: cover;
	padding-bottom: 0;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${Sizes.laptop}) {
    height: 120px;
  }

  .iconify {
    color: white;
    margin: 100px;
    height: 70px;
    width: 70px;

    @media screen and (min-width: ${Sizes.laptop}) {
      margin: 50px;
      height: 30px;
      width: 30px;
    }
  }
`

export const Email = styled.div` 
  height: 100px;
  color: white;
  background-color: black;
  text-align: center;
  font-size: 30px;

  @media screen and (min-width: ${Sizes.laptop}) {
    height: 50px;
    font-size: 18px;
  }
`
