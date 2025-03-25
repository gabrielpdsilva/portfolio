import { useTranslation } from 'react-i18next'
import { ICON_TOOLTIP_CLASSNAME } from '../../constants/style'
import { Database } from '../icons/stack/Database'
import { Mobile } from '../icons/stack/Mobile'
import { Monitor } from '../icons/stack/Monitor'

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
        <Monitor />
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
