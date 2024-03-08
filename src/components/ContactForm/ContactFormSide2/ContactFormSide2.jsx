import React from 'react';

export default function ContactFormSide2() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="text-center py-0 pt-4 px-2">
        <h1 className="font-bold text-3xl text-gray-900">Entre em Contato</h1>
        <p className="text-gray-600 px-4">Ingresse sua informação e mensagem e responderemos o mais breve possível!</p>
      </div>
      <form className="px-8 py-6">
        <div className="mb-4">
          <label htmlFor="fullName" className="text-xs font-semibold px-1">Nome Completo</label>
          <div className="flex items-center border-b border-gray-300">
            <i className="mdi mdi-account-outline text-gray-400 text-lg px-1"></i>
            <input id="fullName" type="text" className="w-full py-2 px-1 focus:outline-none" placeholder="João da Silva Sauro"/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
          <div className="flex items-center border-b border-gray-300">
            <i className="mdi mdi-email-outline text-gray-400 text-lg px-1"></i>
            <input id="email" type="email" className="w-full py-2 px-1 focus:outline-none" placeholder="johnsmith@example.com"/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="content" id="content" name="content" className="text-xs font-semibold px-1">Conteúdo da Mensagem:</label>
          <div className="flex items-center border-b border-gray-300">
            <i className="mdi mdi-lock-outline text-gray-400 text-lg px-1"></i>
            <textarea class="h-24 w-full border-b border-gray-300 overflow-hidden resize-none py-2 px-1 focus:outline-none text-black p-2 transition ease-in-out duration-300" placeholder="Escreva sua mensagem. . ."></textarea>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg py-3 px-4 font-semibold">Enviar Mensagem</button>
        </div>
      </form>
    </div>
  );
}
