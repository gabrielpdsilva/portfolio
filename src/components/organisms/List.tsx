export function List() {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Minhas principais conquistas acadêmicas
      </li>

      <li className="list-row">
        <div>
          <img className="size-14 rounded-box" src="src/assets/fatec.png" />
        </div>
        <div>
          <div className="font-bold">
            Tecnólogo em Análise e Desenvolvimento de Sistemas
          </div>
          <div className="text-xs uppercase font-semibold opacity-60">
            FATEC da Zona Leste (2019-2022)
          </div>
        </div>
        <p className="list-col-wrap text-xs">
          • TCC: aplicativo baseado em ajuda psicológica, que conecta
          voluntários a pessoas anônimas com problemas psicológicos.
          <br />• Adquiri certificado de excelência pelo meu desempenho no curso
        </p>
        {/*TODO*/}
        {/* <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
        <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button> */}
      </li>

      <li className="list-row">
        <div>
          <img className="size-14 rounded-box" src="src/assets/fisk.png" />
        </div>
        <div>
          <div className="font-bold">Curso de Inglês</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            FISK Centro de Ensino (2018-2020)
          </div>
        </div>
        <p className="list-col-wrap text-xs">
          • MET (nível B2): aprimorei minhas habilidades no inglês, o que me
          possibilitou passar no MET (Michigan English Test).
        </p>
        {/*TODO*/}
        {/* <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
        <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button> */}
      </li>

      <li className="list-row">
        <div>
          <img className="size-14 rounded-box" src="src/assets/etec.png" />
        </div>
        <div>
          <div className="font-bold">
            Técnico em Desenvolvimento de Sistemas
          </div>
          <div className="text-xs uppercase font-semibold opacity-60">
            ETEC da Zona Leste (2018 - 2019)
          </div>
        </div>
        <p className="list-col-wrap text-xs">
          • TCC: um aplicativo para sessões de RPG de mesa
          <br />• Adquiri certificado de excelência pelo meu desempenho na turma
        </p>
      </li>
    </ul>
  )
}
