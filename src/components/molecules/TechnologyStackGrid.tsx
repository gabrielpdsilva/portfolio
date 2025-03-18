import { useTranslation } from 'react-i18next'
import { ICON_TOOLTIP_CLASSNAME } from '../../constants'
import { Database } from '../icons/stack/Database'
import { Mobile } from '../icons/stack/Mobile'
import { Notebook } from '../icons/stack/Notebook'

export function TechnologyStackGrid() {
  const { t } = useTranslation()
  return (
    <div className="flex justify-center space-x-1">
      <div
        className={ICON_TOOLTIP_CLASSNAME}
        data-tip={t('overview.stack_tooltips.mobile')}
      >
        <Mobile />
      </div>

      <div
        className={ICON_TOOLTIP_CLASSNAME}
        data-tip={t('overview.stack_tooltips.frontend')}
      >
        <Notebook />
      </div>
      <div
        className={ICON_TOOLTIP_CLASSNAME}
        data-tip={t('overview.stack_tooltips.backend')}
      >
        <Database />
      </div>
    </div>
  )
}
