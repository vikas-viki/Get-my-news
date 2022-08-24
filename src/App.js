import './App.css';
//      4617bf624f77495b8bcc0c658b633337
import React, { useState } from 'react';
import NavBar from './myComponents/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import News from './myComponents/News';
import LoadingBar from 'react-top-loading-bar';
export default function App (){
   const apiKey= process.env.REACT_APP_MY_NEWS_API_KEY;
  let  [progress,setProgress]= useState(0);
  
 
    return (
      <>
      <LoadingBar
                color='#00fdb1'
                height={3}
                progress={progress}
              />
      <BrowserRouter>
        <NavBar 
        title="GMN" 
        navItemOne={{text:'General',needed:true}}
        navItemTwo={{text:'Business',needed:true}}
        navItemThree={{text:'Sports',needed:true}}
        navItemFour={{text:'Technology',needed:true}}
        navItemFive={{text:'Health',needed:true}}
        navItemSix={{text:'Entertainment',needed:true}}
        navItemSeven={{text:'Science',needed:true}}
        navItemEight={{text:'navItemEight',needed:false}}
        searchBarNeeded={true}
        dropDown={{
          title:'Languages',
          needed: false,
          item1Text: 'English(en)',
          item2Text: 'Arabic(ar)',
          item3Text: 'French(fr)',
          item4Text: 'Italian(it)',
          item5Text: 'Russian(ru)'
        }}
        />
        <Routes>
          <Route exact  path='/' element={<News key='general' country='in' apiKey={apiKey} setProgress={setProgress} category='general'/>}/>
          <Route exact  path='/Business' element={<News key='business' country='in' apiKey={apiKey} setProgress={setProgress} category='business'/>}/>
          <Route exact  path='/Sports' element={<News key='sports' country='in' apiKey={apiKey} setProgress={setProgress} category='sports'/>}/>
          <Route exact  path='/Technology' element={<News key='technology' country='in' apiKey={apiKey} setProgress={setProgress} category='technology'/>}/>
          <Route exact  path='/Health' element={<News key='health' country='in' apiKey={apiKey} setProgress={setProgress} category='health'/>}/>
          <Route exact  path='/Entertainment' element={<News key='entertainment' country='in' apiKey={apiKey} setProgress={setProgress} category='entertainment'/>}/>
          <Route exact  path='/Science' element={<News key='science' country='in' apiKey={apiKey} setProgress={setProgress} category='science'/>}/>
        </Routes>
        
      </BrowserRouter>
      </>
    )
  
}

