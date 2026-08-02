import {
  SocialIcons,
  SocialIconsItem,
} from '@/components/molecules/social-icons'

export function Footer({ primaryText, secondaryText, iconItems }: FooterProps) {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-2">
      <aside>
        <p>{primaryText}</p>
        <p>{secondaryText}</p>
        <div className="flex gap-2">
          <SocialIcons tooltipPosition="top" items={iconItems} />
        </div>
      </aside>
    </footer>
  )
}

type FooterProps = {
  primaryText: string
  secondaryText: string
  iconItems: SocialIconsItem[]
}
