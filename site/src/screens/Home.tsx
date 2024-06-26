import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="p-5">
        <h1 className="text-white text-3xl font-bold">Delpi API</h1>

        <p className="text-gray-300 mt-3">
          En la era de los servicios digitales y las aplicaciones, la
          necesidad de datos estructurados y facilmente accesibles es
          una necesidad indispensable. Para paises como Paraguay donde
          los datos se encuentran dispersos o inconsistentes, esto es
          aún más crucial.
        </p>

        <p className="text-gray-300 mt-5">
          Desarrolladores, investigadores y empresas enfrentan
          dificultades al integrar información local en sus servicios
          debido a la falta de una API centralizada y estandarizada.
          Este documento describe el desarrollo de una API diseñada
          para abordar estos desafíos proporcionando datos
          estructurados sobre departamentos, ciudades y barrios de
          Paraguay.
        </p>
      </div>
    </Layout>
  );
}
