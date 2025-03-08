import { openInNewTab } from '../../shortcuts'
import { Github } from '../icons/social-medias/Github'
import { StackOverflow } from '../icons/social-medias/StackOverflow'

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {currentYear} - Created by Gabriel</p>
        <div className="flex">
          <div
            className="hover:cursor-pointer"
            onClick={() => openInNewTab('https://github.com/gabrielpdsilva')}
          >
            <Github />
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() =>
              openInNewTab(
                'https://stackoverflow.com/users/12829458/gabrielpdsilva'
              )
            }
          >
            <StackOverflow />
          </div>
        </div>
      </aside>
    </footer>
  )
}
