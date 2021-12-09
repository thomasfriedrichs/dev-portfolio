import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";

export const AboutWrapper = styled.div`
  position: relative;
	height: 1220px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${({ theme }) => theme.color5};
	background-size: cover;
	padding-bottom: 0;
  color: ${({ theme }) => theme.font};

    h1 {
      padding: 50px;
    }

    @media ${Sizes.laptop} {
      height: 520px;
    }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

    @media ${Sizes.laptop} {
      flex-direction: row;
    }
`

export const ImageCrop = styled.div`
  width: 40%;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 2px 2px 10px 1px #888888;
  margin: 50px;

    @media ${Sizes.laptop} {
      width: 20%;
    }
`
export const Image = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`
export const AboutText = styled.p`
  border: 2px solid;
  border-color: lightgrey;
  border-radius: 10px;
  width: 80%;
  height: 500px;
  font-size: 38px;

    @media ${Sizes.laptop} {
      width: 50%;
      height: 250px;
      font-size: 24px;
    }
`
export const Lights = styled.div`
  height: 9%;
  width: 100%;
  border: solid 1px;
  border-color: lightgrey;
  border-radius: 5px;
  display: flex;
  font-size: 15px;
  margin-bottom: 5px;

  .iconify {
    align-items: center;
    margin: 10px;

      @media ${Sizes.laptop} {
      margin: 2px 5px;
      }
  }
`