import { ThemeChanger } from '@/components/molecules/theme-changer'
import { TranslationChanger } from '@/components/molecules/translation-changer'

export function Header() {
  return (
    <div className="bg-base-200 flex justify-end">
      <ThemeChanger />
      <TranslationChanger />
    </div>
  )
}
