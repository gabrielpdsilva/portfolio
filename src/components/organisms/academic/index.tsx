import { useTranslation } from 'react-i18next'

export function Academic() {
  const { t } = useTranslation()
  return (
    <div className="flex justify-center">
      <div className="md:w-6xl space-y-2">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">
                {t(
                  'academic.technologist_systems_analysis_development.subtitle'
                )}
              </time>
              <div className="text-lg font-black">
                {t('academic.technologist_systems_analysis_development.title')}
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
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end  mb-10">
              <time className="font-mono italic">
                {t('academic.english.subtitle')}
              </time>
              <div className="text-lg font-black">
                {t('academic.english.title')}
              </div>
              <p className="list-col-wrap text-xs">
                • {t('academic.english.course_conclusion')}
              </p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">
                {t('academic.technician_systems_development.subtitle')}
              </time>
              <div className="text-lg font-black">
                {t('academic.technician_systems_development.title')}
              </div>
              <p className="list-col-wrap text-xs">
                •{' '}
                {t('academic.technician_systems_development.course_conclusion')}
                <br />•{' '}
                {t('academic.technician_systems_development.certificate')}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
