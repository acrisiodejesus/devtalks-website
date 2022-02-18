import React from 'react';
import { MemberStyle } from '../../styles/sobreStyle';

type Member = {
  nome: string;
  prof: string;
  description: string;
};

const Members = ({ nome, prof, description }:Member) => {
  return (
    <MemberStyle>
      <div className='profile'/>
      <div className='content'>
        <h4>{nome}</h4>
        <span>{prof}</span>
        <p>{description}</p>
      </div>
    </MemberStyle>
  );
};

export default Members;
