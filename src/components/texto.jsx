const Texto = (props) => {
  if (props.kanji !== undefined) { /* Caso seja não definido, é retornado o padrão */
    return (
      <>
        <p>{props.nome}</p>
        <p>{props.kanji}</p>
      </>
    );
  } else {
    return <p>{props.nome}</p>;
  }
};

export default Texto;
