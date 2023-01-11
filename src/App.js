import { useRoutes } from 'react-router-dom'
import { routes } from './Routes'
import './designs/css/main.css'


function App() {

  let content = useRoutes(routes)

  return (
    <>
      {content}
    </>
  )
}

export default App