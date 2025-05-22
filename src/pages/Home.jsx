import { Link } from 'react-router-dom';
import React from 'react';
import { MatrixRainingLetters } from "react-mdr";

export default function Home() {
    return (

        <div className='min-h-screen flex flex-col items-center justify-center text-center px-4 font-mono text-white bg-[#222831]'>
            {/* Main heading */}
            <div className='absolute inset-0 z-0'>
                <MatrixRainingLetters
                  fontSize={16}
                  fps={60}
                  density={0.9}
                  trail={1.2}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                  backgroundColor="#364153"
                  color="#364153"
                />
            </div>

            <div className='font-bold z-10'>
                <h1 className='text-4xl mb-2'>Darryl James Cruz</h1>
                <h2 className='text-2xl mb-8'>Aspiring Full Stack Developer</h2>
            </div>      
            {/* Nav Links */}
            <div className='flex flex-wrap gap-4 justify-center z-10'>
                <div className='bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition duration-300'>
                    <Link to='/about'>About Me</Link>
                </div>
                <div className='bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition duration-300'>
                    <Link to='/portfolio'>Portfolio</Link>
                </div>
                <div className='bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition duration-300'>
                    <a href="https://github.com/darryljamescruz" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className='bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition duration-300'>
                    <a href="https://www.linkedin.com/in/darryljamescruz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}