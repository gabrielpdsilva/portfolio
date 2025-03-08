import { TecnologyIconsGrid } from '../molecules/IconsGrid'

export function Overview() {
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="src/assets/avatar-gather.png" />
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
      <TecnologyIconsGrid />
    </div>
  )
}
