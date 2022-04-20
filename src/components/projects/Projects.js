import React from 'react';
import { Icon } from '@iconify/react';
import {
  ProjectsWrapper,
  Title,
  ProjectFlexWrapper,
  ProjectBox
} from './ProjectsElement';

const Projects = () => {

  return(
    <ProjectsWrapper>
      <Title>Projects</Title>
      <ProjectFlexWrapper>
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
        <ProjectBox
          href='https://york-hair-thomasfriedrichs.vercel.app/'
          target='_blank'
        >
          <Icon
            className='iconify'
            icon='openmoji:scissors'
          />
          <p>Roland York Hair</p>
        </ProjectBox>
      </ProjectFlexWrapper>
    </ProjectsWrapper>
  )
}

export default Projects;
