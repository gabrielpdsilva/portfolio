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
          {t('academic.technologist_systems_analysis_development.certificate')}
        </p>
        {/*TODO*/}
        {/* <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
        <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button> */}
      </li>

      <li className="list-row">
        <div>
          <img className="size-14 rounded-box" src="src/assets/fisk.png" />
        </div>
        <div>
          <div className="font-bold">{t('academic.english.title')}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {t('academic.english.subtitle')}
          </div>
        </div>
        <p className="list-col-wrap text-xs">
          • {t('academic.english.course_conclusion')}
        </p>
        {/*TODO*/}
        {/* <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
        <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button> */}
      </li>

      <li className="list-row">
        <div>
          <img className="size-14 rounded-box" src="src/assets/etec.png" />
        </div>
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
      </li>
    </ul>
  )
}
