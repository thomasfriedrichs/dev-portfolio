import React from 'react'
import { Icon } from '@iconify/react';
import { SkillsWrapper, Title, IconWrapper, IconBox } from './SkillsElement';
import Info from '../data/info';
import Icons from '../data/icons';

const Skills = () => {
  return (
    <>
      <SkillsWrapper>
        <Title>{Info.skillsTitle}</Title>
        <IconWrapper>
          <IconBox>
            <Icon className="iconify" icon='akar-icons:javascript-fill'/>
            <p>{Icons.javascript}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='akar-icons:react-fill'/>
            <p>{Icons.react}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='akar-icons:html-fill'/>
            <p>{Icons.html}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='akar-icons:css-fill'/>
            <p>{Icons.css}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='cib:sass-alt'/>
            <p>{Icons.sass}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='bi:bootstrap'/>
            <p>{Icons.bootstrap}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='mdi:language-csharp'/>
            <p>{Icons.csharp}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='cib:mysql'/>
            <p>{Icons.mysql}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='bi:git'/>
            <p>{Icons.git}</p>
          </IconBox>
          <IconBox>
            <Icon className="iconify" icon='bx:bxl-aws'/>
            <p>{Icons.aws}</p>
          </IconBox>
        </IconWrapper>
      </SkillsWrapper>
    </>
  )
}

export default Skills;
