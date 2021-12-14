import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { 
  ExperienceWrapper, 
  TechPill, 
  TechWrapper, 
  Title,
  H2,
  H3
} from './ExperienceElement';
import Info from '../data/info';
import { Epicodus, EpicodusTech } from '../data/epicodus';
import { Validate, ValidateTech } from '../data/validate';

const Experience = () => {

  const epicodusTechnology = Object.values(EpicodusTech).map((technology, i) => {
    return(
        <TechPill pill key={i}>
          {technology}
        </TechPill>
    )
  })

  const validateTechnology = Object.values(ValidateTech).map((technology, i) => {
    return(
      <TechPill pill key={i}>
        {technology}
      </TechPill>
    )
  })

  return (
    <>
      <ExperienceWrapper>
        <Title>{Info.experienceTitle}</Title>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            icon={<span className="iconify" data-icon="akar-icons:react-fill"></span>}
            date={Validate.time}
            dateClassName={ 'validateDate' }
            iconStyle={{
              background: "#412234",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <H2 className='validate'>{Validate.name}</H2>
            <H3 className='validate'>{Validate.title}</H3>
            <TechWrapper>
              {validateTechnology}
            </TechWrapper>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            icon={<span className="iconify" data-icon="whh:html"></span>}
            date={Epicodus.time}
            iconStyle={{
              background: "#412234",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <H2 className='epicodus'>{Epicodus.name}</H2>
            <H3 className='epicodus'>{Epicodus.title}</H3>
            <TechWrapper>
              {epicodusTechnology}
            </TechWrapper>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            id="hourglass"
            icon={<span className="iconify" data-icon="fontisto:hourglass-end"></span>}
            iconStyle={{
              background: "#412234",
              color: "#fff",
              textAlign: "center",
            }}
          >
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ExperienceWrapper>
    </>
  );
};

export default Experience; 
