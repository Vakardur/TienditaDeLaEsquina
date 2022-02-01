import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Articulo.module.css";

// 1.
// Solo con HTML
// Haga un formulario que reciba una imagen y un titulo para agregar un articulo.
// Y un botón de guardar que por el momento no tiene que hacer nada.
// Por ejemplo, una imagen de un pan, y un input de texto donde yo pueda escribir "pan"

// 2.
// Edite la vista principal (index.tsx) para que muestre un título gigante de bienvenida
// A la tiendita de la esquina. (la ruta base es /)

// 3.
// HARD QUESTION
// El siguiente código devuelve un json con un link hacia una imagen
//   fetch("https://picsum.photos/200").then((response) =>
//     response.json().then((res) => console.log(res))

// Haga una misma respuesta pero con imagenes de 300px y coloquela al lado de la otra imagen

// EJEMPLO:

const Articulo = () => {
  const [imagen, setImagen] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://picsum.photos/200").then((response) =>
      setImagen(response.url)
    );
  }, []);

  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>Articulo</h1>
      <p className={styles.perfil}>Good ol HTML de toda la vida</p>
      {imagen && <img src={imagen} alt="imagen" />}
    </div>
  );
};

export default Articulo;
