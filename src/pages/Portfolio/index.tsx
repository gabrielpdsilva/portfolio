import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Angular } from '../../components/icons/tecnologies/Angular';
import { Firebase } from '../../components/icons/tecnologies/Firebase';
import { Git } from '../../components/icons/tecnologies/Git';
import { React } from '../../components/icons/tecnologies/React';
import { JavaScript } from '../../components/icons/tecnologies/JavaScript';
import { NestJs } from '../../components/icons/tecnologies/NestJs';
import { Postgres } from '../../components/icons/tecnologies/Postgres';
import { ReactNative } from '../../components/icons/tecnologies/ReactNative';
import { Typescript } from '../../components/icons/tecnologies/Typescript';
import { Footer } from '../../components/molecules/Footer';
import { Header } from '../../components/molecules/Header';

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
  );
}

function IconsGrid() {
  return (
    <div className="justify-center grid grid-cols-9 sm:flex">
      <Git />
      <JavaScript />
      <Typescript />
      <React />
      <ReactNative />
      <NestJs />
      <Firebase />
      <Postgres />
      <Angular />
    </div>
  );
}

function CardsGrid() {
  const { t } = useTranslation();
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      <div className="card w-96 h-44 bg-base-100 card-lg shadow-md">
        <div className="card-body">
          <h2 className="card-title font-bold">Foco no valor</h2>
          <p>Lorem ipsum</p>
        </div>
      </div>

      <div className="card w-96 h-44 bg-base-100 card-lg shadow-md">
        <div className="card-body">
          <h2 className="card-title font-bold">
            {t('principles.clean_code.title')}
          </h2>
          <p>
            Uma aplicação só terá sucesso através de um design escalável e um
            código flexível.
          </p>
        </div>
      </div>

      <div className="card w-96 h-44 bg-base-100 card-lg shadow-md">
        <div className="card-body">
          <h2 className="card-title font-bold">Constante aprendizado</h2>
          {/* <p>
        "i may not know the answer, but i know how to find it, and i
        will find the answer"
      </p> */}
          <p>
            "Pode ser que eu não saiba a resposta, mas eu sei como encontrá-la,
            e a encontrarei."
          </p>
          <p className="text-sm">Adaptado de À Procura da Felicidade</p>
          {/* <p className="text-sm">Adapted from The Pursuit of Happyness</p> */}
        </div>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Gabriel Pimentel
          </h1>
          <p className="font-bold text-2xl py-6 text-center lg:text-left">
            Desenvolvedor de Software
          </p>
          <p className="italic">
            Agregando valor ao mundo através de soluções tecnológicas
          </p>
        </div>
      </div>
      <IconsGrid />
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="font-bold text-2xl text-center">{title}</p>
      {children}
    </div>
  );
}

export function Portfolio() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div className="hero bg-base-200 min-h-screen">
        <div className="space-y-8">
          <Overview />
          <Section title={t('principles.title')}>
            <CardsGrid />
          </Section>

          <Section title={t('academic.title')}>
            <FooBar />
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
