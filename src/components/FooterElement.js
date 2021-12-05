import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";
import Colors from "./styles/themes/Colors";

export const FooterWrapper = styled.div` 
  position: relative;
	height: 250px;
	min-height: 100px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${Colors.black};
	background-size: cover;
	padding-bottom: 0;
  display: flex;
  justify-content: center;

    @media ${Sizes.laptop} {
      height: 120px;
    }

  .iconify {
    color: ${Colors.white};
    margin: 100px;
    height: 70px;
    width: 70px;

      @media ${Sizes.laptop} {
        margin: 50px;
        height: 30px;
        width: 30px;
      }
  }
`
