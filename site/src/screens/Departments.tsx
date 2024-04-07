import { useState } from "react";
import ReactJson from "react-json-view";
import useSWR from "swr";
import { HiClipboard } from "react-icons/hi2";

import Layout from "../components/Layout";
import axios from "../config/axios";

const fetchData = async (url: string) => (await axios.get(url)).data;

export default function Departments() {
  const [departmentSelected, setDepartmentSelected] =
    useState<string>("");

  const { data: departaments } = useSWR(
    departmentSelected === ""
      ? "/departamentos"
      : `/departamentos/${departmentSelected}`,
    fetchData
  );

  const handleFocus = () =>
    document.getElementById("department")?.focus();

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

          <div className="relative mt-5">
            <div
              role="button"
              className="absolute top-1/2 -translate-y-1/2 left-5"
              onClick={handleFocus}
            >
              <p className="text-lg text-neutral-500">
                https://delpi.com/api/v2/departamentos/
              </p>
            </div>

            <button className="h-auto rounded-sm ring-1 absolute right-5 p-2 top-1/2 -translate-y-1/2 ring-neutral-600 text-white">
              <HiClipboard className="text-neutral-300 text-2xl" />
            </button>

            <input
              id="department"
              type="text"
              className="text-lg text-white bg-[#101010] h-16 rounded-lg w-full pl-[388px]"
              value={departmentSelected}
              onChange={(e) => setDepartmentSelected(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-y-scroll h-auto p-5 bg-[#101010] mt-5 rounded-md">
          <ReactJson
            theme={"grayscale"}
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
