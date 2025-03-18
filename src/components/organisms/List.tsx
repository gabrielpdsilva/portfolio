import { useTranslation } from 'react-i18next'

export function List() {
  const { t } = useTranslation()
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        {t('academic.subtitle')}
      </li>

      <li className="list-row">
        <div>
          <img className="size-14 rounded-box" src="src/assets/fatec.png" />
        </div>
        <div className="space-y-4">
          <div>
            <div className="font-bold">
              {t('academic.technologist_systems_analysis_development.title')}
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {t('academic.technologist_systems_analysis_development.subtitle')}
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            •{' '}
            {t(
              'academic.technologist_systems_analysis_development.course_conclusion'
            )}
            <br />•{' '}
            {t(
              'academic.technologist_systems_analysis_development.certificate'
            )}
          </p>
        </div>
      </li>

      <li className="list-row">
        <div>
          <img className="size-14 rounded-box" src="src/assets/fisk.png" />
        </div>
        <div className="space-y-4">
          <div>
            <div className="font-bold">{t('academic.english.title')}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {t('academic.english.subtitle')}
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            • {t('academic.english.course_conclusion')}
          </p>
        </div>
      </li>

      <li className="list-row">
        <div>
          <img className="size-14 rounded-box" src="src/assets/etec.png" />
        </div>
        <div className="space-y-4">
          <div>
            <div className="font-bold">
              {t('academic.technician_systems_development.title')}
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {t('academic.technician_systems_development.subtitle')}
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            • {t('academic.technician_systems_development.course_conclusion')}
            <br />• {t('academic.technician_systems_development.certificate')}
          </p>
        </div>
      </li>
    </ul>
  )
}
