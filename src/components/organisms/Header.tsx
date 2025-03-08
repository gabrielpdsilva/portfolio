import { ThemeChanger } from '../molecules/ThemeChanger'
// import { TranslationChanger } from '../molecules/TranslationChanger'

// TODO translations
export function Header() {
  return (
    <div className="bg-base-200 flex justify-end">
      <ThemeChanger />
      {/* <TranslationChanger /> */}
    </div>
  )
}
