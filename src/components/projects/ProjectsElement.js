import styled from "styled-components";
import Sizes from "../styles/themes/Sizes";

export const ProjectsWrapper = styled.div`
  position: relative;
	height: 800px;
	min-height: 200px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${({ theme }) => theme.color5};
	background-size: cover;
	padding-bottom: 0;
  color: ${({ theme }) => theme.font};

    @media screen and (min-width: ${Sizes.laptop}) {
      height: 400px;
    }
`

export const Title = styled.h1`
  padding-top: 50px;
`

export const ProjectWrapper = styled.div` 
  margin-top: 100px;
  display: grid;
  grid-template-columns: 120px 120px 120px;
  grid-template-rows: 120px 120px 120px;
  grid-gap: 25px;
  justify-content: space-around;
  text-align: center;

    @media screen and (min-width: ${Sizes.laptop}) {
      flex-direction: row;
      margin-top: 100px;
      display: flex;
      justify-content: space-around;
    }
`

export const ProjectBox = styled.a`
  border-radius: 5px;
  height: 80px;
  width: 8%;
  text-align: center;
  color: ${({ theme }) => theme.font} !important;
  text-decoration: none;

  .iconify {
    width: 100px;
    height: 100px;
    

    @media screen and (min-width: ${Sizes.laptop}) {
      width: 100px;
      height: 100px;
      padding-top: 10px;
    }
  }
`