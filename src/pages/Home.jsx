import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='bg-slate-100 min-h-screen flex flex-col items-center justify-center text-center px-4'>
            <h1 className='text-4xl font-bold text-gray-800 mb-8'>Darryl James Cruz</h1>
            <div className='flex flex-wrap gap-4 justify-center'>
                <Link to='/about' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
                    About Me
                </Link>
                <Link to='/portfolio' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
                    Portfolio
                </Link> 
                <a href="https://github.com/darryljamescruz" target="_blank" rel="noopener noreferrer" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/darryljamescruz/" target="_blank" rel="noopener noreferrer" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}