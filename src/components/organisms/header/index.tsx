import { ThemeChanger } from '../../molecules/theme-changer'
import { TranslationChanger } from '../../molecules/translation-changer'

export function Header() {
  return (
    <div className="bg-base-200 flex justify-end">
      <ThemeChanger />
      <TranslationChanger />
    </div>
  )
}
