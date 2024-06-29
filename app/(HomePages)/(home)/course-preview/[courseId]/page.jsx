"use client"
import React, { useEffect } from 'react'

const CoursePreview = ({ params }) => {
    useEffect(() => {
        console.log(params.courseId)
    }, [])
    return (
        <div>{params.courseId}</div>
    )
}

export default CoursePreview