import { useTranslation } from 'react-i18next'
import { Card } from '@/components/molecules/card'
import { useState } from 'react'

export function DetailedCardsGrid({ items }: DetailedCardsGridProps) {
  const [selectedItem, setSelectedItem] = useState<DetailedCardItem | null>(
    null
  )

  return (
    <div className="justify-center grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <DetailedCard key={item.title} item={item} onClick={setSelectedItem} />
      ))}

      <DetailedCardModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  )
}

function DetailedCard({ item, onClick }: DetailedCardProps) {
  const { title, src } = item

  return (
    <Card>
      <Card.Title>{title}</Card.Title>

      <div
        className="group relative overflow-hidden rounded-lg cursor-pointer"
        onClick={() => onClick(item)}
      >
        <img
          src={src}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div
          className="
            absolute inset-0
            flex items-center justify-center
            bg-black/0
            transition duration-300
            group-hover:bg-black/50
          "
        >
          <svg
            className="
              h-10 w-10
              text-white
              opacity-0
              scale-75
              transition duration-300
              group-hover:opacity-100
              group-hover:scale-100
            "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14M5 12h14"
            />
          </svg>
        </div>
      </div>
    </Card>
  )
}

function DetailedCardModal({
  selectedItem,
  setSelectedItem,
}: DetailedCardModalProps) {
  const { t } = useTranslation()

  return (
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
              className="py-4 mx-auto max-h-[70vh] max-w-[80vw]"
            />

            <p className="mt-4">{selectedItem.subtitle}</p>

            <div className="modal-action">
              {selectedItem.url && (
                <a
                  href={selectedItem.url}
                  className="btn btn-outline border-secondary text-secondary"
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

type DetailedCardProps = {
  item: DetailedCardItem
  onClick: (item: DetailedCardItem) => void
}

type DetailedCardItem = {
  title: string
  subtitle: string
  src: string
  url: string
}

type DetailedCardModalProps = {
  selectedItem: DetailedCardItem | null
  setSelectedItem: (item: DetailedCardItem | null) => void
}
