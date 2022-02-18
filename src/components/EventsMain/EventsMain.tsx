import Image from 'next/image';
import React from 'react';
import Container from '../Container/Container';
import {
  ButtonShowEvents,
  ContentList,
  EventsContainer,
  EventsMainsStyle,
  OrnedenadList,
} from './style';


const EventsMain = () => {

  const [index, setIndex] = React.useState<number>(0);

  const content = [
    {
      title: 'OPEN HOUSE',
      photo: 'VideoCall.svg',
      content:
        'É a casa aberta para desenvolvedores partilharem experiências práticas relacionadas com as tecnologias usadas no dia-a-dia. É um evento em que Devs moçambicanos de varias stacks e linguagens de programação colocam a mão na massa para mostrar a potencialidades das tecnologias que usam.',
    },
    {
      title: 'THE INTERVIEW',
      photo: 'VideoCall.svg',
      content:
        'Espaço de conversa de devs que ja actuam no mercado moçambicano, onde estarão compartilhando os desafios ja enfrentados e o processo para superá-los, quais os problemas recorentes e o caminho para resolve-los e muito mais.',
    },
  ];
  return (
    <EventsMainsStyle>
      <Container>
        <EventsContainer>
          <OrnedenadList>
            <li>
              <ButtonShowEvents show={index === 0} onClick={() => setIndex(0)}>
                OPEN HOUSE
              </ButtonShowEvents>
            </li>
            <li>
              <ButtonShowEvents show={index === 1} onClick={() => setIndex(1)}>
                THE INTERVIEW
              </ButtonShowEvents>
            </li>
          </OrnedenadList>
          {content.map(({ content, photo, title }, i) => {
            if (index === i)
              return (
                <ContentList key={i}>
                  <li>
                    <Image
                      src={`/${photo}`}
                      alt='devtalks'
                      width={400}
                      height={400}
                    />
                  </li>
                  <li className='animation'>
                    <h2>{title}</h2>
                    <p>{content}</p>
                  </li>
                </ContentList>
              );
            return null;
          })}
        </EventsContainer>
      </Container>
    </EventsMainsStyle>
  );
};

export default EventsMain;
