import React from 'react';

export default function BottomBox() {
  return (
    <div className="mt-8 bg-white p-4 shadow rounded-lg">
      <div className="bg-white p-4 rounded-md mt-4">
        <h2 className="text-gray-500 text-lg font-semibold pb-4">Transacciones</h2>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Nombre</th>
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Fecha</th>
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300 text-right">Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">Carlos Sánchez</td>
              <td className="py-2 px-4 border-b border-gray-300">27/07/2023</td>
              <td className="py-2 px-4 border-b border-gray-300 text-right">$1500</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">Pedro Hernández</td>
              <td className="py-2 px-4 border-b border-gray-300">02/08/2023</td>
              <td className="py-2 px-4 border-b border-gray-300 text-right">$1950</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">Sara Ramírez</td>
              <td className="py-2 px-4 border-b border-gray-300">03/08/2023</td>
              <td className="py-2 px-4 border-b border-gray-300 text-right">$1850</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">Daniel Torres</td>
              <td className="py-2 px-4 border-b border-gray-300">04/08/2023</td>
              <td className="py-2 px-4 border-b border-gray-300 text-right">$2300</td>
            </tr>
          </tbody>
        </table>
        <div className="text-right mt-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
 