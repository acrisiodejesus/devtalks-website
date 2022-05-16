import Members from '../components/Members/Members';
import { EventContainer } from '../styles/EventStyle';
import { About } from '../styles/sobreStyle';

const Sobre: () => JSX.Element = () => {
  return (
    <EventContainer>
      <About>
        <h3>About devtalksMz</h3>
        <p>
          A Devtalks.MZ e uma comunidade Mocambicana de desenvolvedores, que
          gostam de partilhar as suas experiencias um com os outros, por meio de
          foruns, canais, no youtube, facebook, e whatsApp, foi fundada em 2022
          por Acrisio de Jesus e Antonio Sitoe, e conta com varios apoiadores
          que amam a tecnologia, e apoiam uns aos outros.
        </p>
        <p>
          O objectivo principal da DevTalks.Mz e compartilhar conteudo sobre
          tecnologias usadas no mercado, e estar a par das mais novas novidades
        </p>
        <p>Tais conteudos, divididos em 2 tipos de eventos:</p>
        <p>
          <strong>Open House</strong> - evento para mostrar a implementacao de
          uma determinada tecnologia
        </p>
        <p>
          <strong>The interview</strong> - conversas com desenvolvedores sobre
          diversos assuntos.
        </p>
        <section>
          <h3>Membros</h3>
          <Members
            src='/1.jpg'
            nome='Acrisio de Jesus'
            prof='Desenvolvedor Frontend e Mobile'
            description='Fundador da Seja Criativo, intusiasta de tecnologia'
            height={300}
          />
          <Members
            src='/0.jpg'
            nome='Antonio Sitoe'
            prof='Desenvolvedor Frontend & UI Designer'
            description='Apaixonado pelo ecossistema javascript e Content Creator na DevtalksMz e Maputo frontenders'
          />
        </section>
      </About>
    </EventContainer>
  );
};

export default Sobre;
