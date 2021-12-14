import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";

export const ExperienceWrapper = styled.div`
  position: relative;
	height: 750px;
	min-height: 400px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${({ theme }) => theme.color2};
	background-size: cover;
	padding-bottom: 0;
  color: ${({ theme }) => theme.font};
  .epicodus {
    @media screen and (min-width: ${Sizes.laptop}) {
      text-align: right;
    }
  }

  .validate {
    @media screen and (min-width: ${Sizes.laptop}) {
      text-align: left;
    }
  }

  .validateDate {
    text-align: left;
  }
`

export const Title = styled.h1` 
  padding: 50px;
  color: ${({ theme }) => theme.font};

`

export const H2 = styled.h2` 
`

export const H3 = styled.h3` 
  font-weight: 200;
  color: black;
`

export const TechWrapper = styled.div` 
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  margin: 10px;
  color: ${({ theme }) => theme.font};
`

export const TechPill = styled.p` 
  width: 75px;
  margin-right: 10px;
  font-size: 14px !important;
	text-align: left !important;
	padding: 5px 8px 5px 8px !important;
	vertical-align: baseline;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color4};
`