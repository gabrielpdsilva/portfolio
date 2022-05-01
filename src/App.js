import { Footer, Header } from 'atoms'
import { Resume, Home } from 'organisms'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <>
    <GlobalStyle/>
      <Header/>
      <Home/>
      <Resume/>
      <Footer/>
    </>
  )
}

export default App
