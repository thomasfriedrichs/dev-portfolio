import React from "react";
import { Icon } from "@iconify/react";
import { 
  AboutText, 
  AboutWrapper, 
  FlexContainer, 
  Image, 
  ImageCrop, 
  Lights 
} from "./AboutElement";
import Info from '../../data/info';
import profileImg from '../../assets/images/profile-pic.png';

const About = () => {
  return (
    <>
      <AboutWrapper>
        <h1>{Info.about}</h1>
        <FlexContainer>
          <ImageCrop>
            <Image src={profileImg} alt='Profile Portrait'/>
          </ImageCrop>
          <AboutText>
            <Lights>
              <Icon className="iconify" icon='emojione:red-circle'/>
              <Icon className="iconify" icon='twemoji:yellow-circle'/>
              <Icon className="iconify" icon='twemoji:green-circle'/>
            </Lights>
            {Info.aboutText}
          </AboutText>
        </FlexContainer>
      </AboutWrapper>
    </>
  );
};

export default About;