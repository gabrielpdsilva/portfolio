import { openInNewTab } from '../../../shortcuts'
import { URLS } from '../../../constants/urls'
import { GitHub } from '../../icons/social-medias/gh'
import { StackOverflow } from '../../icons/social-medias/stack-overflow'

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-2">
      <aside>
        <p>{getFooterText()}</p>
        <div className="flex gap-2">
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
