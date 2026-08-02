import {
  SocialIcons,
  SocialIconsItem,
} from '@/components/molecules/social-icons'
import { ThemeChanger } from '@/components/molecules/theme-changer'
import { TranslationChanger } from '@/components/molecules/translation-changer'

export function Header({ iconItems }: SocialIconsProps) {
  return (
    <div className="relative flex items-center justify-end bg-base-200">
      <div className="absolute left-1/2 -translate-x-1/2">
        <SocialIcons tooltipPosition="bottom" items={iconItems} />
      </div>

      <div className="flex items-center gap-2">
        <ThemeChanger />
        <TranslationChanger />
      </div>
    </div>
  )
}

type SocialIconsProps = {
  iconItems: SocialIconsItem[]
}
