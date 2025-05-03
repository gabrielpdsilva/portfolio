import { Angular } from '../../icons/technologies/angular'
import { Firebase } from '../../icons/technologies/firebase'
import { Git } from '../../icons/technologies/git'
import { React } from '../../icons/technologies/react'
import { JavaScript } from '../../icons/technologies/javascript'
import { NestJs } from '../../icons/technologies/nestjs'
import { Postgres } from '../../icons/technologies/postgres'
import { ReactNative } from '../../icons/technologies/react-native'
import { TypeScript } from '../../icons/technologies/typescript'
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
