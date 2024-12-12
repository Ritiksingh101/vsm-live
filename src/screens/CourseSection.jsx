import React from 'react'
import Header from '../component/Header';
import Footer from '../component/Footer';

const CourseSection = () => {
    return (
        <>
            <Header />
            <div className="about-container">
                <h1 className='text-center text-gray-800 font-bold text-6xl'>Courses</h1>
                <p className='text-center text-gray-700 font-bold text-2xl mt-5'>Coming Soon...</p>
            </div>
            <Footer />
        </>
    );
}

export default CourseSection;

