import { Angular } from '../../icons/technologies/Angular'
import { Firebase } from '../../icons/technologies/Firebase'
import { Git } from '../../icons/technologies/Git'
import { React } from '../../icons/technologies/React'
import { JavaScript } from '../../icons/technologies/JavaScript'
import { NestJs } from '../../icons/technologies/NestJs'
import { Postgres } from '../../icons/technologies/Postgres'
import { ReactNative } from '../../icons/technologies/ReactNative'
import { TypeScript } from '../../icons/technologies/TypeScript'
import { ICON_TOOLTIP_CLASSNAME } from '../../../constants/styles'

export function TechToolsGrid() {
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
