import { useContent } from '../../../hooks/use-content'

export function Footer() {
  const { socialMedias, footer } = useContent()
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-2">
      <aside>
        <p>{getFooterText()}</p>
        <p>{footer}</p>
        <div className="flex gap-2">
          {socialMedias.map(({ name, url, Icon }) => (
            <a
              key={name}
              data-tip={name}
              href={url}
              target="_blank"
              className="tooltip hover:cursor-pointer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </aside>
    </footer>
  )
}

function getFooterText(): string {
  const originalReleaseYear = 2025
  const currentYear = new Date().getFullYear()
  return `© ${originalReleaseYear} - ${currentYear}`
}
