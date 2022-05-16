import Image from 'next/image';
import React from 'react';
import { MemberStyle } from '../../styles/sobreStyle';

type Member = {
  nome: string;
  prof: string;
  description: string;
  src: string;
};

const Members = ({ nome, prof, description, src }: Member) => {
  return (
    <MemberStyle>
      <Image
        src={src}
        alt='imagem perfil'
        width={300}
        height={400}
        className='profile'
      />
      <div className='content'>
        <h4>{nome}</h4>
        <span>{prof}</span>
        <p>{description}</p>
      </div>
    </MemberStyle>
  );
};

export default Members;
