import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/about.css'

const About = ()=>{

    return(
        <>
        <div className='bg-white bodyabout'> 
        <div className='bg-white about'>
    <h2 className='bg-white'>Data Peserta Sanbercode Bootcamp ReactJS</h2>
    <ol >
        <li className='bg-white'><b className='bg-white'> Nama Peserta:</b> Mochamad Nurul Adzan</li>
        <li className='bg-white'><b className='bg-white'> Email:</b> nurul.adzan24@gmail.com</li>
        <li className='bg-white'><b className='bg-white'> Sistem Operasi Yang Digunakan:</b> Windows</li>
        <li className='bg-white'><b className='bg-white'> Akun Gitlab:</b> @Neizshya</li>
        <li className='bg-white'><b className='bg-white'> Akun Telegram:</b> @Axsyxd</li>
    </ol>
    </div >
    <hr/>
        <Link to={'/'}>
        <button className='px-6 py-2  transition ease-in duration-200 uppercase rounded-full
     hover:bg-gray-800 hover:text-white border-2 border-gray-900 
     focus:outline-none mt-9 bg-white'>index</button>
        </Link>
        </div>
        </>
    )
}
export default About;