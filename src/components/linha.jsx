const Linha = (props) => {
  return (
    <div className="linha">
      <span>{props.etiqueta}</span>
      <span>{props.texto}</span>
    </div>
  );
};

export default Linha;
