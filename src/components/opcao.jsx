/**
 * Você pode mudar as classes pelo props:
 *
 * class_opcao
 *
 * class_imagem
 *
 * class_legenda
 *
 * Quando não estão em uso, o estilo aplicado é o padrão das classes:
 *
 * opcao
 *
 * imagem
 *
 * legenda
 */
const Opcao = (props) => {
  return (
    <divid
      className={`${
        props.class_opcao !== undefined ? props.class_opcao : "opcao" /* Caso não defina uma nova classe, é aplicado uma padrão */
      } `}
      onClick={() => props.click(props.id)}
    >
      <div
        className={`${
          props.class_imagem !== undefined ? props.class_imagem : "imagem " /* Caso não defina uma nova classe, é aplicado uma padrão */
        } `}
        style={{
          backgroundImage: `url(${props.imagem}) `,
        }}
      ></div>
      <div
        className={`${
          props.class_legenda !== undefined ? props.class_legenda : "legenda " /* Caso não defina uma nova classe, é aplicado uma padrão */
        } `}
      >
        {props.children}
      </div>
    </divid>
  );
};

export default Opcao;
