import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LectureOne from './Lecture_One'
import LectureTwo from './Lecture_Two'
import LectureFive from './Lecture_Five'
import LectureThree from './Lecture_Three'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LectureOne />
    <LectureTwo />
    <LectureThree />
    <LectureFive />
  </StrictMode>,
)
