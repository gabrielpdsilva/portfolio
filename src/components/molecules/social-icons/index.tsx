import { ReactNode } from 'react'

export function SocialIcons({ tooltipPosition, items }: SocialIconsProps) {
  return items.map(({ name, url, Icon }) => (
    <a
      key={name}
      data-tip={name}
      href={url}
      target="_blank"
      className={`tooltip tooltip-${tooltipPosition} hover:cursor-pointer`}
    >
      <Icon />
    </a>
  ))
}

type SocialIconsProps = {
  items: SocialIconsItem[]
  tooltipPosition: 'top' | 'bottom'
}

export type SocialIconsItem = {
  name: string
  url: string
  Icon: () => ReactNode
}
