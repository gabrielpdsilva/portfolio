import { Suspense } from 'react';
import { Portfolio } from './pages/Portfolio';

function App() {
  return (
    <Suspense fallback="loading">
      <Portfolio />
    </Suspense>
  );
}

export default App;
