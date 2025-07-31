import { themes } from '../../../types'
import { useThemeSelector } from './use-theme-selector'

export function ThemeSelector() {
  const { theme, changeTheme } = useThemeSelector()

  return (
    <div className="form-control w-full max-w-xs">
      <select
        className="select select-bordered"
        value={theme}
        onChange={changeTheme}
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  )
}
