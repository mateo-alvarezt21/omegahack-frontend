"use client"
import { useState, useEffect } from 'react';
import { DocumentChartBarIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import CardInfo from "./components/cards-info";
import { data } from "./data";

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Hacer la solicitud a la API cuando el componente se monte
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/consumo');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log('Datos de la API:', jsonData); // Imprimir los datos en la consola
      setApiData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(apiData)

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl pb-5 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Hogar</h1>
        </div>
      </header>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <li
            key={item.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={item.imageUrl} alt="" />
              <h3 className="mt-6 text-sm font-medium text-gray-900">{item.name}</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{item.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
                    {item.role}W
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    onClick={handleClick}
                    className="relative cursor-pointer -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <DocumentChartBarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    Consumos
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    {item.rolePromedio && (
                      Number(item.role) > Number(item.rolePromedio) * 1.05 ? (
                        <div className="flex items-center">
                          <div className="flex-none rounded-full p-1 text-red-500">
                            <div className="h-2 w-2 rounded-full bg-current"></div>
                          </div>
                          <h1 className="ml-2">Alto Consumo</h1>
                        </div>
                      ) : Number(item.role) < Number(item.rolePromedio) * 0.95 ? (
                        <div className="flex items-center">
                          <div className="flex-none rounded-full p-1 text-green-500">
                            <div className="h-2 w-2 rounded-full bg-current"></div>
                          </div>
                          <h1 className="ml-2">Bajo consumo</h1>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="flex-none rounded-full p-1 text-orange-500">
                            <div className="h-2 w-2 rounded-full bg-current"></div>
                          </div>
                          <h1 className="ml-2">Estable</h1>
                        </div>
                      )
                    )}

                    <CardInfo open={open} setOpen={setOpen} dataTable={item.data} />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

