import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { TasksPage } from './pages/TasksPage';
import { TasksFormPage } from './pages/TaskFormPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-content">
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to='/tasks' />}/>
          <Route path='/tasks' element={<TasksPage />}/>
          <Route path='/tasks-create' element={<TasksFormPage />}/>
          <Route path='/tasks/:id' element={<TasksFormPage />}/>
        </Routes>
        <Toaster />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;