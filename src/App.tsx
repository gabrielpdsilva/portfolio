import { Suspense } from 'react'
import { Portfolio } from './pages/portfolio'

function App() {
  return (
    <Suspense fallback="loading">
      <Portfolio />
    </Suspense>
  )
}

export default App
