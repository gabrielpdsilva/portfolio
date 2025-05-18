import { Suspense } from 'react'
import { Portfolio } from './pages/portfolio'
import { Fallback } from './components/atoms/fallback'

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Portfolio />
    </Suspense>
  )
}

export default App
