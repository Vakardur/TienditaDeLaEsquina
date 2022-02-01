import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState<number>(1);

  // var variable = 2;
  // let cosa = 2;
  // const constante = 2;

  // valor = 0
  // valor = 1

  // const [valor, setValor] = useState<number>(0)
  // setValor(1)

  // const []
  // const [contador, setContador]
  // El primer valor del arreglo es el valor de la constante
  // El segundo valor del arreglo es una función, que me permite cambiar el valor de la constante
  // const [contador, setContador] = useState(numero);
  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "50%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
};

export default Contador;
