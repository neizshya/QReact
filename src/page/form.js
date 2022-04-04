import React, { useContext,useEffect,useState } from "react";
import {useHistory,useParams} from 'react-router-dom'
import axios from "axios";
import { QuizContext } from "../context/quizContext";

const Form = ()=>{
    let {Id} = useParams()
    useEffect(()=>{
        if (Id !== undefined){
            axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${Id}`)
            .then((res)=>{
              let data = res.data
              setInput({
                name:data.name,description:data.description,category:data.category
                , size:data.size,price:data.price,rating:data.rating,image_url:data.image_url,release_year:data.release_year,
            is_android_app:data.is_android_app,is_ios_app:data.is_ios_app
              })
              setCurId(Id)
            })
            .catch((err)=>{ 
              console.log(err)
            })
        }
     
      },[])
      const HandleCb=(event)=>{
        let check;
        let value = event.target.value
        let name = event.target.name
      if(event.target.checked){
      value = 1;

      }else{
    value = 0;
     }
        setInput({...input,[name]:value})
      }
    
    const {
        input,setInput,
        curId,setCurId,
        fefu} = useContext(QuizContext)
        const {fusubmit,fuupdate} = fefu

    const handleChange = (event)=>{
        let value = event.target.value
        let name = event.target.name

        setInput({...input,[name]:value})
    }
    const backing = useHistory()
    const handleSubmit = (event)=>{
        event.preventDefault()
        let {name,
            description,
            category,
            size,
            price,
            rating,
            image_url,
            release_year,
            is_android_app,
            is_ios_app} = input

        if(curId===-1){
            fusubmit()
            backing.push('/mobile-list')
        }else{
            fuupdate()
            backing.push('/mobile-list')
        }
        setInput({
            name : "",
            description :"",
            category:"",
            size:0,
            price:0,
            rating:5,
            image_url:"",
            release_year:0,
            is_android_app:0,
            is_ios_app:0,
        })
        setCurId(-1)
        }


 
    return(
    <>
        <div className="mt-24 bg-white w-11/12 m-auto m-0 p-8 mb-10">
             <h1 className="font-bold text-center text-3xl bg-white">Form Mobile Apps</h1>
            <form onSubmit={handleSubmit} method="post" className="bg-white">
              <label    className="text-gray-700 bg-white">Name : </label>
              <input className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required onChange={handleChange} value={input.name} type="text" name="name"/>    
              <label    className="text-gray-700 bg-white">Description : </label>
              <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required onChange={handleChange} value={input.description} name="description" />
              <label    className="text-gray-700 bg-white">Category</label>
              <input className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required onChange={handleChange} value={input.category} type="text" name="category" />
              <label    className="text-gray-700 bg-white">Size</label>
              <input className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required onChange={handleChange} value={input.size} type="number" name="size" />
              <label    className="text-gray-700 bg-white">Price</label>
              <input className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required onChange={handleChange} value={input.price} type="number" name="price" />
              <label    className="text-gray-700 bg-white">Rating</label>
              <input className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required onChange={handleChange} value={input.rating} type="number" name="rating" min={0} max={5}/>
              <label    className="text-gray-700 bg-white">URL Image</label>
              <input className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required onChange={handleChange} value={input.image_url} type="text" name="image_url" />
              <label    className="text-gray-700 bg-white">Release Year</label>
              <input className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required onChange={handleChange} value={input.release_year} type="number" name="release_year" min={2007} max={2021} defaultValue={2007}/>
              <label className="text-gray-700 bg-white break-normal grid-cols-1">Platform   </label>
              <input  type="checkbox"  onChange={HandleCb} value={input.is_ios_app} name="is_ios_app"/>IOS   
              <input type="checkbox"  onChange={HandleCb} value={input.is_android_app} name="is_android_app"/>Android   
              <br/>
              <input className=" mt-10 w-32 py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2" type="submit" value="Submit"/>
            </form>
            </div>
    </>)
}
export default Form
