import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";
import Colors from "./styles/themes/Colors";

export const SkillsWrapper = styled.div`
  position: relative;
	height: 800px;
	min-height: 200px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${Colors.grey};
	background-size: cover;
	padding-bottom: 0;

    @media ${Sizes.laptop} {
      height: 400px;
    }
`

export const Title = styled.h1`
  padding-top: 50px;
`

export const IconWrapper = styled.div` 
  margin-top: 100px;
  display: grid;
  grid-template-columns: 120px 120px 120px;
  grid-template-rows: 120px 120px 120px;
  grid-gap: 25px;
  justify-content: space-around;
  text-align: center;

    @media ${Sizes.laptop} {
      flex-direction: row;
      margin-top: 100px;
      display: flex;
      justify-content: space-around;
    }
`

export const IconBox = styled.div`
  border-radius: 5px;
  height: 80px;
  width: 8%;
  text-align: center;

  .iconify {
    width: 100px;
    height: 100px;

    @media ${Sizes.laptop} {
      width: 50px;
      height: 50px;
      padding-top: 10px;
    }
  }
`