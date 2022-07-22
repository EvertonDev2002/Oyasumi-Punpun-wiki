import Opcao from "../components/opcao";
import Texto from "../components/texto";
import Linha from "../components/linha";
import Marcador from "../components/marcador";
import { useNavigate } from "react-router-dom";
import CampoInfor from "../components/campo_infor";

const Characters = () => {

  const list = JSON.parse(sessionStorage.getItem("personagem")); /* Pega dados em sessionStorage na Key personagem e converte para JSON */
  const Nav = useNavigate(); // Hook da lib React-router-dom para navegar entre componentes //

  const Home = () => { /* função para rota */
    Nav("/"); /* Muda do componente Characters para o Home  */
    document.title = `Oyasumi Punpun`; /* tira título com o nome do personagem para o próximo componente */
  };

  return (
    <div className="content-characters">
      <div className="tabela">
        <Opcao imagem={list.imagem} class_legenda={"nome-kanji"}>
          <Texto nome={list.nome} kanji={list.kanji} />
        </Opcao>
        <Marcador marcador={"Informações Gerais"} />
        <Linha etiqueta={"Status"} texto={list.status} />
        <Linha etiqueta={"Sexo"} texto={list.sexo} />
        <Linha etiqueta={"Escolaridade"} texto={list.escolaridade} />
        <Marcador marcador={"Primeira Aparição"} />
        <Linha etiqueta={"Capítulo"} texto={list.capitulo} />
      </div>
      <div className="infor">
        <CampoInfor etiqueta={"Descrição"} texto={list.descricao} />
        <CampoInfor etiqueta={"Personalidade"} texto={list.personalidade} />
        <div className="voltar">
          <span onClick={() => Home()}>Home</span>
        </div>
      </div>
    </div>
  );
};

export default Characters;
