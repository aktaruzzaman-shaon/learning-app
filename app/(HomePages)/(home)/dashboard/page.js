"use client"
import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter'
import { getCoureList } from '@/app/_services'
import CourseList from './_components/CourseList'

const Browse = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
  }, [])

  const getCourses = () => {
    getCoureList()
      .then(res => {
        console.log(res)
        setCourses(res.courseLists)
      })
  }
  return (
    <div>
      <CategoryFilter></CategoryFilter>
      {courses ? <CourseList courses={courses}></CourseList> : null}
    </div>
  )
}

export default Browse