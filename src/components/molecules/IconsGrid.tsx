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
  const containerClassName =
    'tooltip transform transition duration-500 hover:scale-125'
  return (
    <div className="justify-center grid grid-cols-9 sm:flex">
      <div className={containerClassName} data-tip="Git">
        <Git />
      </div>
      <div className={containerClassName} data-tip="JavaScript">
        <JavaScript />
      </div>
      <div className={containerClassName} data-tip="TypeScript">
        <TypeScript />
      </div>
      <div className={containerClassName} data-tip="React">
        <React />
      </div>
      <div className={containerClassName} data-tip="React Native">
        <ReactNative />
      </div>
      <div className={containerClassName} data-tip="NestJs">
        <NestJs />
      </div>
      <div className={containerClassName} data-tip="Firebase">
        <Firebase />
      </div>
      <div className={containerClassName} data-tip="Postgres">
        <Postgres />
      </div>
      <div className={containerClassName} data-tip="Angular">
        <Angular />
      </div>
    </div>
  )
}
