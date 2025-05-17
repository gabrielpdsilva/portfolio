import { TechToolsGrid } from '../../molecules/tech-tools-grid'
import { TechStackGrid } from '../../molecules/tech-stack-grid'
import { useContent } from '../../../hooks/use-content'

export function Overview() {
  const { overview } = useContent()
  return (
    <div className="card w-fit border-1 border-base-content">
      <div className="card-body">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="assets/avatar-gather.png" />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-center lg:text-left">
              {overview.title}
            </h1>
            <div className="font-bold text-2xl py-6 text-center lg:text-left group transition duration-300 text-primary">
              {overview.subtitle}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary" />
            </div>
            <p className="italic">{overview.detail}</p>
          </div>
        </div>
        <div className="space-y-1">
          <TechStackGrid />
          <TechToolsGrid />
        </div>
      </div>
    </div>
  )
}
