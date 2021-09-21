import React, { Component,useState, useEffect } from 'react';
import './textarea.css';

const Textarea = () => {
  
  const [value,setValue] = React.useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );
  
  React.useEffect(()=>{
    localStorage.setItem('myValueInLocalStorage',value);
  },[value]);
  
  const onChange = event => setValue(event.target.value);
  
  return (
    <div class="EditorArea">
    <textarea 
      type="text"
      onChange={onChange}
      placeholder="Write something..."></textarea>
      
      <div>{value}</div>
      </div>

      )
};

export default Textarea;
