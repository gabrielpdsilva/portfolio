import { Angular } from '../icons/tecnologies/Angular'
import { Firebase } from '../icons/tecnologies/Firebase'
import { Git } from '../icons/tecnologies/Git'
import { React } from '../icons/tecnologies/React'
import { JavaScript } from '../icons/tecnologies/JavaScript'
import { NestJs } from '../icons/tecnologies/NestJs'
import { Postgres } from '../icons/tecnologies/Postgres'
import { ReactNative } from '../icons/tecnologies/ReactNative'
import { TypeScript } from '../icons/tecnologies/TypeScript'
import { ICON_TOOLTIP_CLASSNAME } from '../../constants'

export function TechnologyToolsGrid() {
  return (
    <div className="justify-center grid grid-cols-9 sm:flex">
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="Git">
        <Git />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="JavaScript">
        <JavaScript />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="TypeScript">
        <TypeScript />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="React">
        <React />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="React Native">
        <ReactNative />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="NestJs">
        <NestJs />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="Firebase">
        <Firebase />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="Postgres">
        <Postgres />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="Angular">
        <Angular />
      </div>
    </div>
  )
}
