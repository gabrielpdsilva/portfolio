import { useTranslation } from 'react-i18next'
import { Card } from '../../molecules/card'
import { useState } from 'react'

export function DetailedCardsGrid({ items }: DetailedCardsGridProps) {
  const { t } = useTranslation()

  const [selectedItem, setSelectedItem] = useState<HighlightCardItem | null>(
    null
  )

  return (
    <div className="justify-center grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <HighlightCard key={item.title} item={item} onClick={setSelectedItem} />
      ))}

      <dialog className={`modal ${selectedItem ? 'modal-open' : ''}`}>
        <div className="modal-box w-fit max-w-none p-6">
          <button
            onClick={() => setSelectedItem(null)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          {selectedItem && (
            <>
              <h3 className="text-3xl font-bold">{selectedItem.title}</h3>

              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="mx-auto max-h-[70vh] max-w-[80vw] rounded-lg object-contain"
              />

              <p className="mt-4">{selectedItem.subtitle}</p>

              <div className="modal-action">
                {selectedItem.url && (
                  <a
                    href={selectedItem.url}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('highlights.more_button')}
                  </a>
                )}

                <button className="btn" onClick={() => setSelectedItem(null)}>
                  {t('highlights.close_button')}
                </button>
              </div>
            </>
          )}
        </div>

        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => setSelectedItem(null)}
        >
          <button>{t('highlights.close_button')}</button>
        </form>
      </dialog>
    </div>
  )
}

function HighlightCard({ item, onClick }: HighlightCardProps) {
  const { t } = useTranslation()
  const { title, src } = item

  const iconColor = 'blue'

  return (
    <Card>
      <Card.Title>{title}</Card.Title>

      <img src={src} className="mb-2 h-52 w-full rounded-lg" />

      <button
        data-tip={t('highlights.details_button')}
        className="tooltip btn btn-soft btn-outline mt-auto self-end"
        onClick={() => onClick(item)}
      >
        <svg
          className="w-6 h-6 text-base-content"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
          />
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
    </Card>
  )
}

type DetailedCardsGridProps = {
  items: DetailedCardsGridItem[]
}

type DetailedCardsGridItem = {
  title: string
  subtitle: string
  url: string
  src: string
}

type HighlightCardProps = {
  item: HighlightCardItem
  onClick: (item: HighlightCardItem) => void
}

type HighlightCardItem = {
  title: string
  subtitle: string
  src: string
  url: string
}
