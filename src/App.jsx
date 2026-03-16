import './App.css'
import { MainLayout } from './layouts/mainLayout'
import { MainRouter } from './router/mainRouter'

function App() {

  return (
    <>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </>
  )
}

export default App
