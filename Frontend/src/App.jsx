import { Route, Routes } from 'react-router-dom'
import { StudentHomePage } from './Pages/StudentHomePage'
import { StudentProfilePage } from './Pages/StudentProfilePage'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<StudentHomePage/>}></Route>
      <Route path='/profile' element={<StudentProfilePage/>}></Route>
    </Routes>
  )
}

export default App