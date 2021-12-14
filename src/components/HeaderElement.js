import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";

export const HeaderWrapper = styled.div `
  position: relative;
	height: 630px;
	min-height: 400px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${({ theme }) => theme.color1};
	background-size: cover;
	padding-bottom: 0;
	color: ${({ theme }) => theme.font};


		.iconify {
			color: ${({ theme }) => theme.font};
		}

		h2 {
			margin-top: 20px;
		}

		#github {
			float: left;
			height: 50px;
			width: 50px;
		}

		#theme-switch {
			float: right;
			height: 50px;
			width: 50px;
		}
		#laptop {
			margin-top: 100px;
			height: 150px;
			width: 150px;
			@media screen and (min-width: ${Sizes.laptop}) {
				margin-top: 150px;
			}
		}
`
export const Button = styled.button` 
	border: none;
	background-color: ${({ theme }) => theme.color1};

		.iconify:hover {
			cursor: pointer;
			border: none;
		}
`

export const TopDiv = styled.div` 
	padding: 10px 10px;
`
export const Links = styled.div` 
	height: 150px;
	padding: 40px 300px;
	display: flex;
	justify-content: space-around;

	@media screen and (min-width: ${Sizes.laptop}) {
		height: 150px;
		padding: 40px 500px;
		
	}

	.links {
		height: 50px;
		width: 50px;
		margin-top: 20px;

		@media screen and (min-width: ${Sizes.laptop}) {
			height: 30px;
			width: 30px;
		}
	}
`