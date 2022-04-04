import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import sanber from '../assets/img/logo/logo.png' 
import { useHistory,useParams } from 'react-router-dom'
import { QuizContext } from '../context/quizContext'



const Navbar = ()=> { 
    const {
        fetchStats,setFetchStats,fefu,datQu} = useContext(QuizContext)
        const {searchdata} = fefu
        

    const back = useHistory()
    const handleSearch = (valueOfSearch)=>{
        searchdata()
        back.push(`/search/${valueOfSearch}`)
    }
    
    return (
    <>

        <ul className='inline-flex w-full fixed top-0  items-center bg-white dark:bg-gray-800  shadow py-4'>
        <Link className="flex-shrink-0 bg-white" to={'/'}>
            <img className='w-2/4 bg-white' src={sanber} />
            </Link>
        <li className=' bg-white  text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium'>
            <Link className='bg-white' to={""}>
            Home
        </Link>
        </li>
        <li className=' bg-white text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium'>
            <Link className='bg-white' to={"/mobile-list"}>
            Mobile List
        </Link>
        </li>
        <li className=' bg-white text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium'>
            <Link className='bg-white' to={"/about"}>
            About
        </Link>
        </li>
        <form className=" bg-white flex flex-col md:flex-row  md:w-full max-w-sm md:space-x-3   justify-center fixed right-0">
                            <div className=" relative bg-white">
                                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border 
                                border-gray-300 w-full py-2 px-4 bg-white text-gray-700 
                                placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 
                                focus:ring-purple-600 focus:border-transparent" placeholder="Search"/>
                                </div>
                                <button className='flex-shrink-0 px-4 py-2 text-base font-semibold 
                                text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                                focus:ring-offset-purple-200' type="submit" onChange={handleSearch}>
                                    Search
                                </button>
                            </form>
        </ul>

    </>
    )
}
export default Navbar;