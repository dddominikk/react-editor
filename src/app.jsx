import React, {useState,useEffect,Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import {Header,Textarea,Navbar} from './exports.js';



const App = () => {

    return (
      <div className="App">
      <Header />
      
      <body
        className="App-body"
        >
        <Navbar />
        <Textarea />

      </body>

    </div>

    )
  }





ReactDOM.render(<App />, document.getElementById('root'));


