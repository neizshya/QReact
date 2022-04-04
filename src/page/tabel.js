import React,{useContext} from 'react'
import { QuizContext } from '../context/quizContext'
import { Link,useHistory } from 'react-router-dom'





const Tabel= ()=>{
    const {datQu,fefu} = useContext(QuizContext)
    const {fudelete} = fefu

const handleDelete = (event)=>{
    let idData = parseInt(event.target.value)
    fudelete(idData)
    
  }


  const backing = useHistory()
  const handleEdit=(event)=>{
    let idData = parseInt(event.target.value)
    backing.push(`/mobile-form/edit/${idData}`)
  }


  const handlePrice = (param)=>{
    if(param === 0 ){
      return "Free"
    }else{
      return `${param}`
    }
  }
  const handlePlatform = (android,ios)=>{
    if(android === 1 && ios===1){
        return "Android,IOS"
    }else if(android === 1 && ios === 0 ){
        return "Android"
      }else if(android === 0 && ios === 1 ){
        return "IOS"
      }
    else{
      return `Mohon Masukan Platform Mobile`
    }
  }
  
  return (
    <>  
    <div className='mt-24 bg-white w-11/12 m-0 m-auto mb-24 p-5'>

    <Link to={'/mobile-form'}><button className="  px-6 py-2  transition ease-in duration-200 
    uppercase rounded-full hover:bg-gray-800
    hover:text-white border-2 border-gray-900 
    focus:outline-none bg-white w-48 mb-2 button-table">Tambah Data</button></Link>
    <table id="table-mobile" className=" table p-4 bg-white shadow rounded-lg w-11/12 m-0 m-auto">
    <thead>
			<tr>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>No</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Name</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Category</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>description</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Release Year</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Size</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Price</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Rating</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Platform</th>
				<th className='bg-white border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900'>Action</th>
        </tr>
            </thead>
            
            <tbody> 
                {datQu !== null &&(
                    <>
                      {datQu.map((res,index)=>{

                        return (
                          <tr key={res.id} className='text-gray-700'>
                            <td className='bg-white border p-4 dark:border-dark-5'>{index+1}</td>
                            <td className='bg-white border p-4 dark:border-dark-5'>{res.name}</td>
                            <td className='bg-white border p-4 dark:border-dark-5'>{res.category}</td>
                            <td className='bg-white border p-4 dark:border-dark-5 overflow-hidden text-ellipsis'>{res.description}</td>
                            <td className='bg-white border p-4 dark:border-dark-5'>{res.release_year}</td>
                            <td className='bg-white border p-4 dark:border-dark-5'>{res.size}</td>
                            <td className='bg-white border p-4 dark:border-dark-5'>{handlePrice(res.price)}</td>
                            <td className='bg-white border p-4 dark:border-dark-5'>{res.rating}</td>
                            <td className='bg-white border p-4 dark:border-dark-5'>{handlePlatform(res.is_android_app,res.is_ios_app)}</td>
                            <td className='bg-white border p-4 dark:border-dark-5'>
                            <button onClick={handleEdit} value={res.id} className="buedit13
                              text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 
                              focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center 
                              mr-2 mb-2 dark:focus:ring-yellow-900
                              ">Edit</button>
                              <button onClick={handleDelete} value={res.id }className="budelete14 
                              text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 
                              font-medium rounded-full text-sm px-5 py-2.5 text-center
                               mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
                               space-x-0.5">Delete</button>
                            </td>
                          </tr>
                        )
                      })}
                    </>
                )}
  
            </tbody>

        </table>
    </div>
    </>
  )
}
export default Tabel