const CampoInfor = (props) => {
  return (
    <div className="campo-infor">
      <h1>{props.etiqueta}</h1>
      <p>{props.texto}</p>
    </div>
  );
};

export default CampoInfor;
