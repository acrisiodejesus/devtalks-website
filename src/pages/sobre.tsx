import Members from '../components/Members/Members';
import { EventContainer } from '../styles/EventStyle';
import { About } from '../styles/sobreStyle';

const Sobre: () => JSX.Element = () => {
  return (
    <EventContainer>
      <About>
        <h3>About devtalksMz</h3>
        <p>
          Participe nos eventos, entre na comunidade, se conecte com os melhores
          desenvolvedores Mocambicanos e de fora dos pais! Porque a programacao
          e o nosso forte e nos somos uma familia!
        </p>
        <p>
          Participe nos eventos, entre na comunidade, se conecte com os melhores
          desenvolvedores Mocambicanos e de fora dos pais! Porque a programacao
          e o nosso forte e nos somos uma familia!
        </p>
        <p>
          Participe nos eventos, entre na comunidade, se conecte com os melhores
          desenvolvedores Mocambicanos e de fora dos pais! Porque a programacao
          e o nosso forte e nos somos uma familia!
        </p>
        <section>
          <h3>Membros</h3>
          <Members
            nome='Acrisio de Jesus'
            prof='Desenvolvedor Frontend e Mobile'
            description='SEO na empresa "Seja criativo" entusiasta de tecnologia '
          />
          <Members
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
