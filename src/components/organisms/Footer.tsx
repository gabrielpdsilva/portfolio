import { openInNewTab } from '../../shortcuts'
import { URLS } from '../../specs'
import { GitHub } from '../icons/social-medias/Github'
import { StackOverflow } from '../icons/social-medias/StackOverflow'

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside className="flex">
        <p>{getFooterText()}</p>
        <p>—</p>
        <div className="flex">
          <div
            className="tooltip hover:cursor-pointer"
            data-tip="GitHub"
            onClick={() => openInNewTab(URLS.GITHUB)}
          >
            <GitHub />
          </div>
          <div
            className="tooltip hover:cursor-pointer"
            data-tip="Stack Overflow"
            onClick={() => openInNewTab(URLS.STACKOVERFLOW)}
          >
            <StackOverflow />
          </div>
        </div>
      </aside>
    </footer>
  )
}

function getFooterText(): string {
  const originalReleaseYear = 2025
  const currentYear = new Date().getFullYear()
  return `Copyright © ${originalReleaseYear} - ${currentYear}`
}
