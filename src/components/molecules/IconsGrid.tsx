import { Angular } from '../icons/tecnologies/Angular'
import { Firebase } from '../icons/tecnologies/Firebase'
import { Git } from '../icons/tecnologies/Git'
import { React } from '../icons/tecnologies/React'
import { JavaScript } from '../icons/tecnologies/JavaScript'
import { NestJs } from '../icons/tecnologies/NestJs'
import { Postgres } from '../icons/tecnologies/Postgres'
import { ReactNative } from '../icons/tecnologies/ReactNative'
import { Typescript } from '../icons/tecnologies/Typescript'

export function TecnologyIconsGrid() {
  return (
    <div className="justify-center grid grid-cols-9 sm:flex">
      <Git />
      <JavaScript />
      <Typescript />
      <React />
      <ReactNative />
      <NestJs />
      <Firebase />
      <Postgres />
      <Angular />
    </div>
  )
}
