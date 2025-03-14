import { openInNewTab } from '../../shortcuts'
import { URLS } from '../../specs'
import { Github } from '../icons/social-medias/Github'
import { StackOverflow } from '../icons/social-medias/StackOverflow'

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>{getFooterText()}</p>
        <div className="flex">
          <div
            className="hover:cursor-pointer"
            onClick={() => openInNewTab(URLS.GITHUB)}
          >
            <Github />
          </div>
          <div
            className="hover:cursor-pointer"
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
