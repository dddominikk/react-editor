import React, { Component,useState, useEffect } from 'react';
import './textarea.css';
import {fix} from './fix.js';

const Textarea = () => {
  
  const [value,setValue] = React.useState(
    localStorage.getItem('cachedValue') || ''
    );
  
  React.useEffect(() => {
    localStorage.setItem('cachedValue',value);
      },[value]);
  
  const onChange = event => setValue(event.target.value);
  
  return (
    <div class="EditorArea">
    <textarea 
      type="text"
      onChange={onChange}
      placeholder="Write something..."></textarea>

      <div class="Divider"></div>      

      <div class="Preview">{value}</div>


      </div>

      )
};

export default Textarea;
