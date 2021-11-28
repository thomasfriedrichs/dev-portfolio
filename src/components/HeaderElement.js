import styled from "styled-components";
import Sizes from "./styles/themes/Sizes";
import Colors from "./styles/themes/Colors";

export const HeaderWrapper = styled.div `
  position: relative;
	height: 520px;
	min-height: 400px;
	width: 100%;
	background-size: cover;
	text-align: center;
	background-color: ${Colors.beige};
	background-size: cover;
	padding-bottom: 0;

		.iconify {
			color: ${Colors.black};
		}

		.top {
			padding: 10px 10px;
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
			@media ${Sizes.laptop} {
				margin-top: 150px;
			}
		}
`