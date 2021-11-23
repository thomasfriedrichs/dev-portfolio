import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";
import Colors from "./styles/themes/Colors";

export const HeaderWrapper = styled.div `
  position: relative;
	height: 520px;
	min-height: 400px;
	width: 100%;
	background-size: cover;
	/* -webkit-background-size: cover; */
	text-align: center;
	/* overflow: hidden; */
	background-color: ${Colors.beige};
	/* -webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover; */
	background-size: cover;
	padding-top: 150px;
	padding-bottom: 0;

	p {
		margin: 20px;
		font-size: 25px;
	}

	.top {
		margin: 10px;
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
		@media ${Sizes.laptop} {
			margin-top: 200px;
		}
	}
`