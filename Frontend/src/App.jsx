import { Route, Routes } from 'react-router-dom'
import { StudentHomePage } from './Pages/StudentHomePage'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<StudentHomePage/>}></Route>
    </Routes>
  )
}

export default App