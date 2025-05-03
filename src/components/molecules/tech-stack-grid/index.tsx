import { useTranslation } from 'react-i18next'
import { ICON_TOOLTIP_CLASSNAME } from '../../../constants/styles'
import { Mobile } from '../../icons/stack/mobile'
import { Monitor } from '../../icons/stack/monitor'
import { Database } from '../../icons/stack/database'

export function TechStackGrid() {
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
