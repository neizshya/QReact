import React,{useState,useEffect, useContext} from "react"
import axios from "axios"
import Tabel from "./tabel"
import { QuizContext } from "../context/quizContext"


const QuizList = () => {
    const {
        fetchStats,setFetchStats,fefu} = useContext(QuizContext)
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

    

    return (
        <>

        

        <Tabel/>



        </>
    )
}

export default QuizList;