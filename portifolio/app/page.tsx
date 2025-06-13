"use client";

import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Murilo de Paula Cotrim | Portfólio</title>
        <meta
          name="description"
          content="Portfólio de Murilo de Paula Cotrim - Estudante de tecnologia, finalista da OBF e desenvolvedor web em ascensão."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main
        className="scroll-smooth bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans pt-16"
        tabIndex={-1}
      >
        {/* Seção Início */}
        <section
          id="inicio"
          role="region"
          aria-label="Seção Início"
          tabIndex={-1}
          className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
        >
          <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
            Murilo de Paula Cotrim
          </h1>
          <p className="mt-6 text-xl max-w-2xl text-gray-300">
            Estudante apaixonado por tecnologia, desenvolvimento web e
            desenvolvimento de sistemas. Finalista da OBF 2024. Futuro engenheiro de software.
          </p>
          <a
            href="#projetos"
            className="mt-10 text-cyan-400 hover:underline text-lg animate-bounce"
          >
            Ver projetos ↓
          </a>
        </section>

        {/* Seção Projetos */}
        <section
          id="projetos"
          role="region"
          aria-label="Seção Projetos e Conquistas"
          tabIndex={-1}
          className="min-h-screen px-6 py-16 bg-[#1e1e2f]"
        >
          <h2 className="text-4xl font-bold mb-10 text-center text-purple-400">
            Projetos & Conquistas
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <article className="bg-[#2a2a40] p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-cyan-300">ONGManager</h3>
              <p className="mt-2 text-gray-300">
                Aplicação web desenvolvida como TCC na ETEC Camargo Aranha. Focada em ajudar
                ONGs a gerenciar atividades de forma prática e eficiente.
              </p>
            </article>

            <article className="bg-[#2a2a40] p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-cyan-300">Finalista da OBF 2024 🏅</h3>
              <p className="mt-2 text-gray-300">
                Destaque nacional na Olimpíada Brasileira de Física, mostrando dedicação também
                às ciências exatas.
              </p>
            </article>

            <article className="bg-[#2a2a40] p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-cyan-300">
                Medalha de Bronze – OBLI 🥉
              </h3>
              <p className="mt-2 text-gray-300">
                Reconhecimento por desempenho acima da média na Olimpíada Brasileira de Língua
                Inglesa, demonstrando domínio do idioma.
              </p>
            </article>

            <article className="bg-[#2a2a40] p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-cyan-300">Cursos Cisco</h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>✅ Conceitos Básicos de Rede</li>
                <li>⏳ Em andamento: Introdução à Cibersegurança</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Seção Sobre */}
        <section
          id="sobre"
          role="region"
          aria-label="Seção Sobre Mim"
          tabIndex={-1}
          className="min-h-screen px-6 py-16 bg-[#1a1a2e]"
        >
          <h2 className="text-4xl font-bold mb-10 text-center text-purple-400">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-4">
            <p>
              Estou no terceiro ano do ensino médio e finalizando meu curso técnico na ETEC
              Camargo Aranha, com grande interesse em desenvolvimento web, redes e
              cibersegurança.
            </p>
            <p>
              Pretendo cursar Engenharia de Software na faculdade e trabalhar com soluções
              tecnológicas que ajudem a sociedade.
            </p>
            <p>
              Gosto de estudar, fazer cursos online, participar de olimpíadas acadêmicas e
              também relaxar jogando no PC.
            </p>
          </div>
        </section>

        {/* Seção Contato */}
        <section
          id="contato"
          role="region"
          aria-label="Seção Contato"
          tabIndex={-1}
          className="min-h-screen px-6 py-16 bg-[#10101a]"
        >
          <h2 className="text-4xl font-bold mb-10 text-center text-purple-400">Contato</h2>
          <div className="max-w-2xl mx-auto text-lg text-gray-300 space-y-4 text-center">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:cotrim.murilo@gmail.com"
                className="text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                cotrim.murilo@gmail.com
              </a>
            </p>
            <p>
              <strong>Telefone:</strong>{" "}
              <a
                href="tel:+5511999642015"
                className="text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                (11) 99964-2015
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Lockzn1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                github.com/Lockzn1
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
