"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function CardInfo({ open, setOpen, dataTable }: { open: any, setOpen: any, dataTable: any }) {

    return (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-80"
              leave="ease-in duration-200"
              leaveFrom="opacity-80"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
            </Transition.Child>
    
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div className="px-4 sm:px-6 lg:px-8">
                      <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                  <tr>
                                    <th className="sticky top-0 z-10 bg-white whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                      Tiempo
                                    </th>
                                    <th className="sticky top-0 z-10 bg-white whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                      Estado
                                    </th>
                                    <th className="sticky top-0 z-10 bg-white whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                                      Consumo (W)
                                    </th>
                                  </tr>
                                </thead>
                              </table>
                              <div className="h-96 overflow-y-auto">
                                <table className="min-w-full divide-y divide-gray-300">
                                  <tbody className="divide-y divide-gray-200 bg-white">
                                    {dataTable.map((transaction: any, index: any) => (
                                      <tr key={index}>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{transaction.time}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                          {transaction.state === 0 ? (
                                            <div className="flex items-center">
                                              <div className="flex-none rounded-full p-1 text-red-500">
                                                <div className="h-2 w-2 rounded-full bg-current"></div>
                                              </div>
                                              <h1 className="ml-2">Apagado</h1>
                                            </div>
                                          ) : transaction.state === 1 ? (
                                            <div className="flex items-center">
                                              <div className="flex-none rounded-full p-1 text-green-500">
                                                <div className="h-2 w-2 rounded-full bg-current"></div>
                                              </div>
                                              <h1 className="ml-2">Activo</h1>
                                            </div>
                                          ) : null}
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.consume}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpen(false)}
                      >
                        Regresar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      );
}
