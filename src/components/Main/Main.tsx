import Link from 'next/link';
import React from 'react';
import { MainStyle } from './style';

const Main = () => {
  const typewriter = React.useRef<any>();
  React.useEffect(() => {
    function typeWriter(elemento: any): void {
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra: string, i: number) => {
        setTimeout(() => (elemento.innerHTML += letra), 75 * i);
      });
    }
    if (typewriter.current) typeWriter(typewriter.current);
  }, [typewriter]);

  return (
    <MainStyle>
      <div>
        <span>
          <h2 ref={typewriter}>
            Os melhores eventos de Tecnologia em Moçambique
          </h2>
          <p>
            Participe nos eventos, entre na comunidade, se conecte com os
            melhores desenvolvedores Mocambicanos e de fora dos pais! Porque a
            programação e o nosso forte e nos somos uma familia!
          </p>
          <Link href={'/eventos'}>Conheca os eventos</Link>
        </span>
      </div>
    </MainStyle>
  );
};

export default Main;
