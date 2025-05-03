import { Suspense } from 'react'
import { Portfolio } from './pages/p'

function App() {
  return (
    <Suspense fallback="loading">
      <Portfolio />
    </Suspense>
  )
}

export default App
