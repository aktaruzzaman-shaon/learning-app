import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseList = ({ courses }) => {
    return (
        <div className='mt-5 grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        '>
            {
                courses.map((course, index) => (
                    <Link href={"/course-preview/"+course.id}>
                        <div key={index} oncli className='border rounded-lg p-2 coursor-pointer hover:border-purple-800'>
                            <Image src={course.banner.url} alt={course.name} width={500} height={500}></Image>

                            <div clas>
                                <h2 className='text-[16px] font-medium'>{course.name}</h2>
                                <h2>{course.author}</h2>
                            </div>
                        </div></Link>

                ))
            }
        </div>
    )
}

export default CourseList