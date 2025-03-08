export function FooBar() {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Lorem ipsum</li>

      <li className="list-row">
        <div>
          <img
            className="size-10 rounded-box"
            src="https://img.daisyui.com/images/profile/demo/1@94.webp"
          />
        </div>
        <div>
          <div>Tecnólogo em Análise e Desenvolvimento de Sistemas</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            FATEC da Zona Leste (2019-2022)
          </div>
        </div>
        <p className="list-col-wrap text-xs">
          TCC Lorem ipsum
          <br />
          Certificado de excelência
        </p>
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
        </button>
      </li>

      <li className="list-row">
        <div>
          <img
            className="size-10 rounded-box"
            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
          />
        </div>
        <div>
          <div>Técnico em Desenvolvimento de Sistemas</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            ETEC da Zona Leste (2018 - 2019)
          </div>
        </div>
        <p className="list-col-wrap text-xs">
          Lorem ipsum baseado em um aplicativo de RPG de mesa
          <br />
          Certificado de excelência
        </p>
      </li>
    </ul>
  )
}
