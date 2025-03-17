import { Angular } from '../icons/tecnologies/Angular'
import { Firebase } from '../icons/tecnologies/Firebase'
import { Git } from '../icons/tecnologies/Git'
import { React } from '../icons/tecnologies/React'
import { JavaScript } from '../icons/tecnologies/JavaScript'
import { NestJs } from '../icons/tecnologies/NestJs'
import { Postgres } from '../icons/tecnologies/Postgres'
import { ReactNative } from '../icons/tecnologies/ReactNative'
import { TypeScript } from '../icons/tecnologies/Typescript'

export function TecnologyIconsGrid() {
  return (
    <div className="justify-center grid grid-cols-9 sm:flex">
      <div className="tooltip" data-tip="Git">
        <Git />
      </div>
      <div className="tooltip" data-tip="JavaScript">
        <JavaScript />
      </div>
      <div className="tooltip" data-tip="TypeScript">
        <TypeScript />
      </div>
      <div className="tooltip" data-tip="React">
        <React />
      </div>
      <div className="tooltip" data-tip="React Native">
        <ReactNative />
      </div>
      <div className="tooltip" data-tip="NestJs">
        <NestJs />
      </div>
      <div className="tooltip" data-tip="Firebase">
        <Firebase />
      </div>
      <div className="tooltip" data-tip="Postgres">
        <Postgres />
      </div>
      <div className="tooltip" data-tip="Angular">
        <Angular />
      </div>
    </div>
  )
}
