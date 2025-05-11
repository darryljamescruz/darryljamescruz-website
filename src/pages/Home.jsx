import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center text-center px-4 font-mono text-white bg-[#222831]'>
            <div className='font-bold'>
                <h1 className='text-4xl mb-2'>Darryl James Cruz</h1>
                <h2 className='text-2xl mb-8'>Aspiring Full Stack Developer</h2>
            </div>      
            <div className='flex flex-wrap gap-4 justify-center'>
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