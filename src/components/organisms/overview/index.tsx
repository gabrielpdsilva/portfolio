import { useContent } from '../../../hooks/use-content'
import { ICON_TOOLTIP_CLASSNAME } from '../../../constants/styles'

export function Overview() {
  const { overview, technologies, stacks } = useContent()
  return (
    <div className="card w-fit border-1 border-base-content">
      <div className="card-body">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="assets/avatar-gather.png" />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-center lg:text-left">
              {overview.title}
            </h1>
            <div className="font-bold text-2xl py-6 text-center lg:text-left group transition duration-300 text-primary">
              {overview.subtitle}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary" />
            </div>
            <p className="italic">{overview.detail}</p>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-center space-x-1">
            {stacks.map(({ name, Icon }) => (
              <div
                key={name}
                className={ICON_TOOLTIP_CLASSNAME}
                data-tip={name}
              >
                <Icon />
              </div>
            ))}
          </div>

          <div className="place-items-center grid grid-cols-5 md:grid-cols-10">
            {technologies.map(({ name, Icon }) => (
              <div
                key={name}
                data-tip={name}
                className={ICON_TOOLTIP_CLASSNAME}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
