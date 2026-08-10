import {
  SocialIcons,
  SocialIconsItem,
} from '@/components/molecules/social-icons'

export function Footer({ leftText, rightText, iconItems }: FooterProps) {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-2">
      <aside>
        <div className="flex gap-2">
          <SocialIcons tooltipPosition="top" items={iconItems} />
        </div>
        <p>{`${leftText} • ${rightText}`}</p>
      </aside>
    </footer>
  )
}

type FooterProps = {
  leftText: string
  rightText: string
  iconItems: SocialIconsItem[]
}
