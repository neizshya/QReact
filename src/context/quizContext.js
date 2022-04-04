import axios from "axios";
import React, { createContext, useState } from "react";
import {useHistory,useParams} from 'react-router-dom'

export const QuizContext = createContext();
export const QuizProvider = props =>{
    const  [datQu,setDatQu] = useState([])
    const [input,setInput] =useState({
        name : "",
        description :"",
        category:"",
        size:0,
        price:0,
        rating:5,
        image_url:"",
        release_year:2007,
        is_android_app:0,
        is_ios_app:0,
        
    })
    const [curId,setCurId] = useState(-1)
    const [fetchStats,setFetchStats] = useState(true)
    let fetchdata = async ()=>{
        let {data} = await axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps`)
        let hasil = data.map((res)=>{
          let {
            id,
            created_at,
            updated_at,
            name,
            description,
            category,
            size,
            price,
            rating,
            image_url,
            release_year,
            is_android_app,
            is_ios_app
          } = res
          return{
            id,
            name,
            description,
            category,
            size,
            price,
            rating,
            image_url,
            release_year,
            is_android_app,
            is_ios_app
          }
        })
        setDatQu([...hasil])
      }
      const fusubmit =  (parame)=>{
        axios.post(`https://backendexample.sanbercloud.com/api/mobile-apps`,{name:input.name,description:input.description,category:input.category
    , size:input.size,price:input.price,rating:input.rating,image_url:input.image_url,release_year:input.release_year,
is_android_app:input.is_android_app,is_ios_app:input.is_ios_app})
        .then((res)=>{
          setFetchStats(true)
        })
      }
      const fuupdate=(parame)=>{
        axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${curId}
        `,{name:input.name
          ,description:input.description
          ,category:input.category
            , size:input.size,
            price:input.price,
            rating:input.rating,
            image_url:input.image_url
            ,release_year:input.release_year,
        is_android_app:input.is_android_app,is_ios_app:input.is_ios_app})
        .then((res)=>{
        setFetchStats(true)
        })
      }
      const fudelete = (idData)=>{
        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
        .then((res)=>{
          setFetchStats(true)

        }).catch((err)=>{
           console.log(err)
        })
      }
      const [filteredData,setFilteredData] = useState(datQu)
      
      const searchdata =(event)=>{
        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${event}`)
        
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = datQu.filter((data) => {return data.title.search(value) != -1;});setFilteredData(result);
        


      }
      const fefu = {
        fetchdata,
        fusubmit,
        fuupdate,
        fudelete,searchdata
    }
    return (
        <QuizContext.Provider value = {{
            datQu,setDatQu,
            input,setInput,
            curId,setCurId,
            fetchStats,setFetchStats,fefu
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

