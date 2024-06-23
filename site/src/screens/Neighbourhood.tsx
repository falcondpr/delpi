import { useState } from "react";
import ReactJson from "react-json-view";

import {handleCopyUrlCompany} from "../utils/handleCapyUrlCompany.ts";
import Layout from "../components/Layout";
import Search from "../components/Search";
import useSWR from "swr";
import axios from "../config/axios";
import { INeighbourhood } from "../interface/neighbourhood";

const fetchData = async (url: string) => (await axios.get(url)).data;

export default function Neighbourhood() {
  const [cityId, setCityId] = useState<string>("1");

  const { data: barrios } = useSWR<INeighbourhood[]>(
    `/api/barrios/${cityId}`,
    cityId ? fetchData: null
  );

  const handleSearch = () => {};

  return (
    <Layout>
      <div className="p-5 h-[calc(100dvh_-_64px)] flex flex-col">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Barrios
          </h3>

          <p className="text-neutral-300">
            Una lista de departamentos de Paraguay con sus respectivos
            IDs y nombres. Estos datos pueden utilizarse para mostrar
            opciones geográficas en una página web, como en un menú
            desplegable o selección de ubicación.
          </p>

          <Search
            handleCopy={handleCopyUrlCompany}
            handleSearch={handleSearch}
            text="/api/barrios/"
            placeholder="id"
            inputValue={cityId}
            handleChangeInputValue={(value) => setCityId(value)}
          />
        </div>

        <div className="overflow-y-scroll h-auto p-5 bg-[#101010] mt-5 rounded-md">
          <ReactJson theme={"grayscale"} src={barrios ?? []} />
        </div>
      </div>
    </Layout>
  );
}
