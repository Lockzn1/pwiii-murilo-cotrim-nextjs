"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Função para fechar menu ao clicar em link (mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Scrollspy básico para atualizar o menu conforme a seção visível
  useEffect(() => {
    const sections = ["inicio", "projetos", "sobre", "contato"];

    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3; // ponto de referência no scroll

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPos >= offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#000066] shadow-md z-50"
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#inicio"
          className="text-white font-bold text-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
          aria-current={activeSection === "inicio" ? "page" : undefined}
        >
          Murilo Cotrim
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="menu-lista"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <ul
          id="menu-lista"
          className={`flex-col md:flex-row md:flex md:items-center absolute md:static bg-[#000066] md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ease-in ${
            isOpen ? "top-full opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
          role="menu"
        >
          {[
            { id: "inicio", label: "Início" },
            { id: "projetos", label: "Projetos & Conquistas" },
            { id: "sobre", label: "Sobre Mim" },
            { id: "contato", label: "Contato" },
          ].map(({ id, label }) => (
            <li key={id} role="none">
              <a
                href={`#${id}`}
                className={`block px-4 py-2 text-white hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded ${
                  activeSection === id ? "text-cyan-400 font-semibold" : ""
                }`}
                onClick={handleLinkClick}
                role="menuitem"
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
