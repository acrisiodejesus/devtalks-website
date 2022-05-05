import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { EventsProps } from '../../pages/eventos';

const LI = styled.li`
  color: white;
  margin: 3rem 0;
  h3 {
    margin: 1rem 0;
    color: whitesmoke;
    strong {
      background: #81b936 !important;
    }
  }
  img {
    width: 100%;
    height: 250px;
    border-radius: 0.3rem;
  }
`;

interface ItemProps {
  item: EventsProps
}

const Card = ({ item }: ItemProps, key: number) => {
  return (
    <LI key={key}>

      <a href={item.link}>
        <Image src={`${item.image?.url}`} alt='image' width={800} height={500} />
        <h3>
          <strong></strong> - {item.title}
        </h3>
      </a>

    </LI>
  );
};

export default Card;
