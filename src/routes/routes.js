import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Navbar from '../comp/navbar';
import { QuizProvider } from '../context/quizContext';
import About from '../page/about';
import Form from '../page/form';
import Home from '../page/home';
import QuizList from '../page/list';
import Search from '../page/search';



const Routes= () =>{
    return (
        <>


        <BrowserRouter>
        <QuizProvider>
        <Navbar/>
        <Switch>
        <Route path={'/'} exact>
                    <Home/>
        </Route>
        <Route path={'/about'} exact>
        <About/>
        </Route>
        <Route path={'/mobile-list'} exact>
            <QuizList/>          
        </Route>
        <Route path={'/mobile-form'} exact>
            <Form/>          
        </Route>
        <Route path={'/mobile-form/edit/:Id'} exact>
        <Form/>           
        </Route>
        <Route path={'/search/:valueOfSearch'} exact>    
        <Search/>      
        </Route>
        </Switch>

        </QuizProvider>
        </BrowserRouter>

        </>
    )



}

export default Routes;