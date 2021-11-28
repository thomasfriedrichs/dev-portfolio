import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";
import Colors from "./styles/themes/Colors";

export const SkillsWrapper = styled.div`
  position: relative;
	height: 400px;
	min-height: 200px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${Colors.grey};
	background-size: cover;
	padding-bottom: 0;
`

export const Title = styled.h1`
  padding-top: 50px;
`

export const IconWrapper = styled.div` 
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

    @media ${Sizes.laptop} {
      flex-direction: row;
    }
`

export const IconBox = styled.div`
  border-radius: 5px;
  height: 80px;
  width: 8%;
  background-color: ${Colors.lightgrey};
  p {

  }

  .iconify {
    width: 50px;
    height: 50px;
    padding-top: 10px;

  }
`