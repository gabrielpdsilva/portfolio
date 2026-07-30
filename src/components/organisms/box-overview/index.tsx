import { ICON_TOOLTIP_CLASSNAME } from '../../../constants/styles'
import { ReactNode } from 'react'

export function BoxOverview({
  title,
  subtitle,
  detail,
  primaryIcons,
  secondaryIcons,
}: BoxOverviewProps) {
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
              {title}
            </h1>
            <div className="font-bold text-2xl py-2 text-center lg:text-left group transition duration-300 text-primary">
              {subtitle}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary" />
            </div>
            <p className="italic">{detail}</p>
          </div>
        </div>

        <div className="space-y-1">
          <PrimaryIcons icons={primaryIcons} />
          <SecondaryIcons icons={secondaryIcons} />
        </div>
      </div>
    </div>
  )
}

function PrimaryIcons({ icons }: IconsProps) {
  return (
    <div className="flex justify-center space-x-1">
      {icons.map(({ name, Icon }) => (
        <div key={name} className={ICON_TOOLTIP_CLASSNAME} data-tip={name}>
          <Icon />
        </div>
      ))}
    </div>
  )
}

function SecondaryIcons({ icons }: IconsProps) {
  return (
    <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
      {icons.map(({ name, Icon }) => (
        <div key={name} data-tip={name} className={ICON_TOOLTIP_CLASSNAME}>
          <Icon />
        </div>
      ))}
    </div>
  )
}

type BoxOverviewProps = {
  title: string
  subtitle: string
  detail: string
  primaryIcons: BoxOverviewIcon[]
  secondaryIcons: BoxOverviewIcon[]
}

type BoxOverviewIcon = {
  name: string
  Icon: () => ReactNode
}

type IconsProps = {
  icons: BoxOverviewIcon[]
}
