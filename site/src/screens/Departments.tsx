import useSWR from "swr";
import ReactJson from "react-json-view";
import toast from "react-hot-toast";

import Layout from "../components/Layout";
import axios from "../config/axios";
import Search from "../components/Search";

const fetchData = async (url: string) => (await axios.get(url)).data;

export default function Departments() {
  const { data: departaments } = useSWR(
    "/api/departamentos",
    fetchData
  );

  const handleCopyUrlCompany = async () => {
    const textElement = document.getElementById("urlEndpoint");

    if (textElement) {
      const text = textElement.textContent;
      if (text) {
        await navigator.clipboard.writeText(text);
        toast("Enlace copiado", {
          icon: "📋",
        });
      } else {
        console.error("El contenido de texto está vacío.");
      }
    } else {
      console.error(
        "No se encontró el elemento con el ID 'urlCompany'."
      );
    }
  };

  const handleSearch = () => {};

  return (
    <Layout>
      <form className="p-5 h-[calc(100dvh_-_64px)] flex flex-col">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Departamentos
          </h3>

          <p className="text-neutral-300">
            Una lista de departamentos de Paraguay con sus respectivos
            IDs y nombres. Estos datos pueden utilizarse para mostrar
            opciones geográficas en una página web, como en un menú
            desplegable o selección de ubicación.
          </p>

          <Search
            text="/api/departamentos"
            handleCopy={handleCopyUrlCompany}
            handleSearch={handleSearch}
          />
        </div>

        <div className="overflow-y-scroll h-auto p-5 bg-[#101010] mt-5 rounded-md">
          <ReactJson
            theme="grayscale"
            src={
              departaments || {
                status: 404,
                message: "Respuesta no encontrada",
              }
            }
          />
        </div>
      </form>
    </Layout>
  );
}
