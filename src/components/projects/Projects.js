import React from 'react';
import { Icon } from '@iconify/react';
import {
  ProjectsWrapper,
  Title,
  ProjectWrapper,
  ProjectBox
} from './ProjectsElement';

const Projects = () => {

  return(
    <ProjectsWrapper>
      <Title>Projects</Title>
      <ProjectWrapper>
        <ProjectBox 
          href='https://crypto-data-thomasfriedrichs.vercel.app/'
          target='_blank'
        >
          <Icon 
            className='iconify' 
            icon='arcticons:crypto-prices'
          />
          <p>Akimbo</p>
        </ProjectBox>
      </ProjectWrapper>
    </ProjectsWrapper>
  )
}

export default Projects;
