import React,{useEffect,useContext} from "react";
import { QuizContext } from "../context/quizContext";


const Home = ()=>{
    const {
        fetchStats,setFetchStats,fefu,datQu} = useContext(QuizContext)
        const {fetchdata} = fefu

    useEffect(()=>{

      if(fetchStats){
        fetchdata()
        setFetchStats(false)
      }
      return  ()=>{
        fetchdata()
      }
    },[fetchStats,setFetchStats])
    const handlePlatform = (android,ios)=>{
        if(android === 1 && ios===1){
            return "Android & IOS"
        }else if(android === 1 && ios === 0 ){
            return "Android"
          }else if(android === 0 && ios === 1 ){
            return "IOS"
          }
        else{
          return `Mohon Masukan Platform Mobile`
        }
      }
      
      const handlePrice = (param)=>{
        if(param === 0 ){
          return "Free"
        }else{
          return `Rp ${param}`
        }
      }


    return (    
        <>
        <section className="mt-24 w-11/12 m-0 m-auto bg-white p-4 mb-24" >
        <h1 className="bg-white m-0 m-auto mt-10 text-center font-bold text-3xl">Daftar Mobile Apps</h1>

                {datQu !== null &&(
                    <>
                      {datQu.map((res,index)=>{

                        return (
                          <>
                          <div className=" bg-white w-11/12  p-8 m-0 m-auto border-b border-gray-400 mb-10" key={res.id}>
                          <h3 className="bg-white ml-0 font-bold text-2xl mb-4">{res.name}</h3>
                          <h5 className="bg-white">Release Year: {res.release_year}</h5>
                          <img className="w-2/5" src={res.image_url}/>
                          <p className="bg-white mt-4 font-bold">Price : {handlePrice(res.price)}</p>
                          <p className="bg-white mt-4 font-bold">Rating : {res.rating}</p>
                          <p className="bg-white mt-4 font-bold">Size : {res.size/1000} MB</p>
                          <p className="bg-white mt-4 font-bold">Platform : {handlePlatform(res.is_android_app,res.is_ios_app)}</p>
                          <p className="bg-white mt-8  break-all"><b className="bg-white">Description</b> : {res.description}</p>
                          </div>

                          </>

                        )
                      })}
                    </>
                )}


        </section>
        
        </>
    )
}
export default Home;