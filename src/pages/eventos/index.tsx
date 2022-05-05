import { GetServerSideProps } from 'next';
import React from 'react';
import Card from '../../components/Card/Card';
import Error from '../../Helper/Error';
import { graphcms } from '../../lib/graphcms';
import { Query_Events } from '../../lib/query';
import { Btn, EventContainer, NavEventstyle } from '../../styles/EventStyle';

export type EventsProps = {
  id: string
  link: string
  title: string
  image: {
    url: string
  }
  content: Array<string>
  description: string
};

interface Props {
  evento: Array<EventsProps>
}


const eventos = ({ evento }: Props) => {
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
        {typeof evento === 'string' ? (
          <Error msg={evento} />
        ) : (
          evento?.map(
            (item: EventsProps) =>
              <Card key={item.id} item={item}
              />

          )
        )}
      </ul>
    </EventContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { evento } = await graphcms.request(Query_Events)
  return {
    props: {
      evento
    }
  }
}

export default eventos
