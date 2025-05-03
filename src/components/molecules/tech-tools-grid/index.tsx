import { Angular } from '../../icons/techs/angular'
import { Firebase } from '../../icons/techs/firebase'
import { Git } from '../../icons/techs/git'
import { React } from '../../icons/techs/react'
import { Javascript } from '../../icons/techs/javascript'
import { NestJS } from '../../icons/techs/nestjs'
import { Postgres } from '../../icons/techs/postgres'
import { ReactNative } from '../../icons/techs/react-native'
import { Typescript } from '../../icons/techs/typescript'
import { ICON_TOOLTIP_CLASSNAME } from '../../../constants/styles'
import { Jest } from '../../icons/techs/jest'

export function TechToolsGrid() {
  return (
    <div className="justify-center grid grid-cols-5 md:grid-cols-9 space-x-0.5 sm:flex">
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="Git">
        <Git />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="JavaScript">
        <Javascript />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="TypeScript">
        <Typescript />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="React">
        <React />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="React Native">
        <ReactNative />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="NestJS">
        <NestJS />
      </div>
      <div className={ICON_TOOLTIP_CLASSNAME} data-tip="Jest">
        <Jest />
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
