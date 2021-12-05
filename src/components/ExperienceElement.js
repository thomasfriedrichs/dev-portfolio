import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";
import Colors from "./styles/themes/Colors";

export const ExperienceWrapper = styled.div`
  position: relative;
	height: 750px;
	min-height: 400px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${Colors.mistyrose};
	background-size: cover;
	padding-bottom: 0;

  .epicodus {
    @media ${Sizes.laptop} {
      text-align: right;
    }
  }

  .validate {
    @media ${Sizes.laptop} {
      text-align: left;
    }
  }

  .validateDate {
    text-align: left;
  }
`


export const Title = styled.h1` 
  padding: 50px;
`

export const H2 = styled.h2` 
  color: black;
`

export const H3 = styled.h3` 
  font-weight: 200;
`

export const TechWrapper = styled.div` 
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  margin: 10px;
`

export const TechPill = styled.p` 
  width: 75px;
  margin-right: 10px;
  font-size: 14px !important;
	text-align: left !important;
	padding: 5px 8px 5px 8px !important;
	vertical-align: baseline;
  border-radius: 5px;
  background-color: ${Colors.lightgrey};
`