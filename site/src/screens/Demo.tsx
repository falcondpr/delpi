import { useState } from "react";
import clsx from "clsx";
import useSWR from "swr";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

import Layout from "../components/Layout";
import axios from "../config/axios";
import {
  IDataDepartment,
  IDepartament,
} from "../interface/department";
import { ICity, ICityData } from "../interface/city";
import {
  INeighbourhood,
  INeighbourhoodData,
} from "../interface/neighbourhood";

const fetchData = async (url: string) => (await axios.get(url)).data;

const Demo: React.FC = () => {
  const [queryDepartment, setQueryDepartment] = useState("");
  const [queryCity, setQueryCity] = useState("");

  const [selectedDepartment, setSelectedDepartment] =
    useState<IDataDepartment | null>(null);
  const [selectedCity, setSelectedCity] = useState<ICityData | null>(
    null
  );
  const [selectedNeightbourhood, setSelectedNeightbourhood] =
    useState<ICityData | null>(null);

  const { data: departaments } = useSWR<IDepartament>(
    "/api/departamentos",
    fetchData
  );

  const { data: cities } = useSWR<ICity>(
    `/api/ciudades/${selectedDepartment?.id}`,
    selectedDepartment?.id ? fetchData : null
  );

  const { data: neightbourhoods } = useSWR<INeighbourhood>(
    `/api/barrios/${selectedCity?.id}`,
    selectedCity?.id ? fetchData : null
  );

  const departmentsFiltered = departaments?.data?.filter(
    (department) =>
      department?.nombre
        ?.toLowerCase()
        ?.includes(queryDepartment?.toLowerCase())
  );

  const citiesFiltered = cities?.data?.filter((department) =>
    department?.nombre
      ?.toLowerCase()
      ?.includes(queryCity.toLowerCase())
  );

  const neightbourhoodsFiltered = neightbourhoods?.data?.filter(
    (nei) =>
      nei?.nombre?.toLowerCase()?.includes(queryCity.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-5 h-[calc(100dvh_-_64px)] flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3">Demo</h3>

        <div className="mt-5">
          <h4 className="mb-3 text-lg text-neutral-300 font-semibold">
            Selecciona un departamento:
          </h4>
          <div className="w-52">
            <Combobox
              value={selectedDepartment}
              onChange={(value) => setSelectedDepartment(value)}
              onClose={() => setQueryDepartment("")}
            >
              <div className="relative">
                <ComboboxInput
                  className={clsx(
                    "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  displayValue={(department: IDataDepartment) =>
                    department?.nombre ?? "Seleccione"
                  }
                  onChange={(event) =>
                    setQueryDepartment(event.target.value)
                  }
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                  <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                </ComboboxButton>
              </div>

              <ComboboxOptions
                anchor="bottom"
                transition
                className={clsx(
                  "w-[var(--input-width)] rounded-xl border border-white/5 bg-neutral-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                  "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
              >
                {departmentsFiltered?.map((department) => (
                  <ComboboxOption
                    key={department.id}
                    value={department}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                  >
                    <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-white">
                      {department.nombre}
                    </div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-3 text-lg text-neutral-300 font-semibold">
            Selecciona una ciudad:
          </h4>
          <div className="w-52 relative">
            <Combobox
              value={selectedCity}
              onChange={(value) => setSelectedCity(value)}
              onClose={() => setQueryCity("")}
            >
              <div
                className="relative"
                style={
                  !selectedDepartment
                    ? { opacity: 0.5 }
                    : { opacity: 1 }
                }
              >
                <ComboboxInput
                  disabled={!selectedDepartment}
                  className={clsx(
                    "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  displayValue={(city: ICityData) =>
                    city?.nombre ?? "Seleccione"
                  }
                  onChange={(event) =>
                    setQueryCity(event.target.value)
                  }
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                  <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                </ComboboxButton>
              </div>

              <ComboboxOptions
                anchor="bottom"
                transition
                className={clsx(
                  "w-[var(--input-width)] rounded-xl border border-white/5 bg-neutral-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                  "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
              >
                {citiesFiltered?.map((city) => (
                  <ComboboxOption
                    key={city.id}
                    value={city}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                  >
                    <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-white">
                      {city.nombre}
                    </div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-3 text-lg text-neutral-300 font-semibold">
            Selecciona un barrio:
          </h4>
          <div className="w-52 relative">
            <Combobox
              value={selectedNeightbourhood}
              onChange={(value) => setSelectedNeightbourhood(value)}
              onClose={() => setQueryCity("")}
            >
              <div
                className="relative"
                style={
                  !selectedDepartment
                    ? { opacity: 0.5 }
                    : { opacity: 1 }
                }
              >
                <ComboboxInput
                  disabled={!selectedCity}
                  className={clsx(
                    "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  displayValue={(city: INeighbourhoodData) =>
                    city?.nombre ?? "Seleccione"
                  }
                  onChange={(event) =>
                    setQueryCity(event.target.value)
                  }
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                  <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                </ComboboxButton>
              </div>

              <ComboboxOptions
                anchor="bottom"
                transition
                className={clsx(
                  "w-[var(--input-width)] rounded-xl border border-white/5 bg-neutral-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                  "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
              >
                {neightbourhoodsFiltered?.map((nei) => (
                  <ComboboxOption
                    key={nei.id}
                    value={nei}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                  >
                    <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-white">
                      {nei.nombre}
                    </div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Demo;
