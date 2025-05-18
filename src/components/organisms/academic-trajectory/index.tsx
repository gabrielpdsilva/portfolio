import { useContent } from '../../../hooks/use-content'

export function AcademicTrajectory() {
  const { timeline } = useContent()
  return (
    <div className="flex justify-center">
      <div className="md:w-6xl space-y-2">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {timeline.items.map(({ title, subtitle, details }, i) => {
            const isFirstItem = i === 0
            const isLastItem = i === timeline.items.length - 1
            const isOddIndex = i % 2 !== 0
            return (
              <li key={title}>
                {!isFirstItem && <hr />}
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
                <div
                  className={
                    isOddIndex
                      ? 'timeline-end mb-10'
                      : 'timeline-start mb-10 md:text-end'
                  }
                >
                  <time className="font-mono italic">{subtitle}</time>
                  <div className="text-lg font-black">{title}</div>
                  <p className="list-col-wrap text-xs">
                    {details.map((it) => (
                      <p key={it}>{it}</p>
                    ))}
                  </p>
                </div>
                {!isLastItem && <hr />}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
