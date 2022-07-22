import api from "../services/api";
import Texto from "../components/texto";
import Opcao from "../components/opcao";
import { useEffect, useState } from "react";
import Logotipo from "../components/logoitpo";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [personagens, Setpersonagens] = useState([]); // Hook do React para estado//
  const Nav = useNavigate(); // Hook da lib React-router-dom para navegar entre componentes //

  const Characters = (id) => { /* função para rota e salvar dados */
    Nav("/characters"); /* Muda do componente Home para o Characters  */
    for (let i = 0; i <= personagens.length; i++) { /* O laço  percorre o JSON */
      const list = personagens[i];
      if (list.id === id) { /* verifica se o id do JSON é o mesmo que o usuário escolheu */
        document.title = `${list.nome} | Oyasumi Punpun`; /* Adiciona no título o nome do personagem para o próximo componente */
        sessionStorage.setItem("personagem", JSON.stringify(list)); /* Salva os dados em string do personagem temporariamente em sessionStorage na key personagem*/
      }
    }
  };

  useEffect(() => { /* Muda estado de um componente caso ocorra alguma mudança na dependência */
    api.get("/personagens").then((response) => { 
      Setpersonagens(response.data); /* Acessa a rota /persoagens, tendo sucesso, seta em Setpersonagens */
    });
  }, []); /* Dependência */

  return ( 
    <div className="content-home">
      <Logotipo texto_01={"Oyasumi"} texto_02={"Punpun"} />
      <div className="cartao">
        
        {personagens?.map((list) => { 
          /* percorre o JSON e retorna para os componentes (a quantidade de impressão é conforme o tamanho do JSON)*/
          return (
            <Opcao
              imagem={list.imagem}
              key={list.id}
              click={Characters}
              id={list.id}
            >
              <Texto nome={list.nome} />
            </Opcao>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
