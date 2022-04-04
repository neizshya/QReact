import React,{useEffect,useContext,useState} from "react";
import { QuizContext } from "../context/quizContext";
import { useParams } from "react-router-dom";

const Search = ()=>{
    const {
        fetchStats,setFetchStats,fefu,datQu,setDatQu} = useContext(QuizContext)
        const {fetchdata,searchdata} = fefu
        let {valueOfSearch} = useParams()   
    useEffect(()=>{
      
        if (valueOfSearch !== undefined){
          searchdata()
          .then(response => {console.log(response)
            setDatQu(response.data);
            setFilteredData(response.data);})
            .catch(error => {console.log('Error getting fake data: ' + error);})
        }
        
    },[])


    const [filteredData,setFilteredData] = useState(datQu)
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
      
    


    return (
        <>
        <section className="mt-24 w-11/12 m-0 m-auto bg-white p-4 mb-24">
        <h1 className="bg-white m-0 m-auto mt-10 text-center font-bold text-3xl">Daftar Mobile Apps</h1>

                {filteredData !== null &&(
                    <>
                      {filteredData.map((res)=>{

                        return (
                          <>
                          <div className=" bg-white w-11/12  p-8 m-0 m-auto border-b border-gray-400 mb-10">
                          <h3 className="bg-white ml-0 font-bold text-2xl mb-4">{res.name}</h3>
                          <h5 className="bg-white">Release Year: {res.release_year}</h5>
                          <img className="w-2/5" src={res.image_url}/>
                          <p className="bg-white mt-4 font-bold">Price : Rp {res.price}</p>
                          <p className="bg-white mt-4 font-bold">Rating : {res.rating}</p>
                          <p className="bg-white mt-4 font-bold">Size : {res.size/1000} MB</p>
                          <p className="bg-white mt-4 font-bold">Platform : {handlePlatform(res.is_android_app,res.is_ios_app)}</p>
                          <p className="bg-white mt-8  break-normal"><b className="bg-white">Description</b> : {res.description}</p>
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
export default Search;