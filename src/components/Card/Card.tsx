import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const LI = styled.li`
  color: white;
  margin: 3rem 0;
  h3 {
    margin: 1rem 0;
    strong {
      color: #81b936;
    }
  }
  img {
    width: 100%;
    height: 250px;
    border-radius: 0.3rem;
  }
`;
type EventsProps = {
  key: number;
  title: string;
  author: string;
  category: string;
  image: string;
};
const Card = ({ title, author, key, image }: EventsProps) => {
  console.log(image);
  return (
    <LI key={key}>
      <Image src={`${image}`} alt='image' width={800} height={250} />
      <h3>
        <strong></strong> - {title}
      </h3>
      <p>Por: {author}</p>
    </LI>
  );
};

export default Card;
