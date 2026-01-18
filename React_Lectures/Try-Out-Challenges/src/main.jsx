import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LectureOne from './Lecture_One'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LectureOne />
  </StrictMode>,
)
