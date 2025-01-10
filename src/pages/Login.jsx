import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='bg-blue-500 h-[100vh]'>
            <div className='pt-12'>


                <form className='flex flex-col w-[300px] mx-auto bg-blue-200 p-5 rounded-xl  shadow-xl '>
                    <h2 className='text-2xl  font-medium  text-center mb-5'>LOGIN</h2>
                    <input type="text" placeholder='Username' className='focus:outline-none mb-3 py-2 px-3 rounded-md  shadow-md' />
                    <input type="number" placeholder='Password' className='focus:outline-none mb-3 py-2 px-3 rounded-md  shadow-md' />
                    <Link className='bg-green-500 text-xl text-white text-center py-1 rounded-md  shadow-md cursor-pointer hover:bg-green-600 mt-4'>Login</Link>
                    <div className='flex  gap-5  text-center ml-[100px] mt-3'  >
                        <p>About</p>
                        <Link to={'/signup'}>Register</Link>
                    </div>
                </form> </div>
        </div>
    )
}

export default Login
