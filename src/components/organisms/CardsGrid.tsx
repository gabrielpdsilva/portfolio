import { useTranslation } from 'react-i18next';

export function CardsGrid() {
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
