import { GetStaticProps } from 'next';
import React from 'react';
import Card from '../components/Card/Card';
import Error from '../Helper/Error';
import { graphcms } from '../lib/graphcms';
import { Query_Events } from '../lib/query';
import { Btn, EventContainer, NavEventstyle } from '../styles/EventStyle';

const eventos = ({ events }: any) => {
  const [toogle, setToogle] = React.useState(0);

  return (
    <EventContainer>
      <NavEventstyle>
        <li>
          <Btn id='first' show={toogle === 0} onClick={() => setToogle(0)}>
            Open House
          </Btn>
        </li>
        <li>
          <Btn id='second' show={toogle === 1} onClick={() => setToogle(1)}>
            The Interview
          </Btn>
        </li>
      </NavEventstyle>
      <ul>
        {typeof events === 'string' ? (
          <Error msg={events} />
        ) : (
          events?.map(
            ({ id, title, author, content, coverImage: { url } }: any) => {
              return (
                <Card
                  key={id}
                  title={title}
                  author={author}
                  category={content}
                  image={url}
                />
              );
            }
          )
        )}
      </ul>
    </EventContainer>
  );
};

export const getStaticProps: GetStaticProps = async function () {
  let evento;
  try {
    const { events } = await graphcms.request(Query_Events);
    evento = events;
  } catch (error) {
    evento = 'Falha ao buscar a lista de eventos';
  }

  return {
    props: {
      events: evento,
    },
    revalidate: 60,
  };
};

export default eventos;
