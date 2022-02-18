import React from 'react';
import Card from '../components/Card/Card';
import { Btn, EventContainer, NavEventstyle } from '../styles/EventStyle';

const List = [
  {
    image: 'only.png',
    category: 'Open House',
    title: '#01 - O inicio da devtalks',
    author: 'Acrisio de Jesus',
  },
  {
    image: 'only.png',
    category: 'Open House',
    title: '#01 - O inicio da devtalks',
    author: 'Acrisio de Jesus',
  },
  {
    image: 'only.png',
    category: 'Open House',
    title: '#01 - O inicio da devtalks',
    author: 'Acrisio de Jesus',
  },
  {
    image: 'only.png',
    category: 'Open House',
    title: '#01 - O inicio da devtalks',
    author: 'Acrisio de Jesus',
  },
];

const eventos = () => {
  const [toogle, setToogle] = React.useState<Boolean>(false);
  return (
    <EventContainer>
      <NavEventstyle>
        <li>
          <Btn onClick={() => setToogle(true)} toogle={toogle}>
            Open House
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setToogle(false)} toogle={toogle}>
            The Interview
          </Btn>
        </li>
      </NavEventstyle>
      <ul>
        {List.map(({ title, author, category, image }) => {
          return (
            <Card
              title={title}
              author={author}
              category={category}
              image={image}
            />
          );
        })}
      </ul>
    </EventContainer>
  );
};

export default eventos;
