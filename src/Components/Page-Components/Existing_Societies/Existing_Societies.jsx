import React from "react";
import Slider_Helper from "./Slider_Helper";
import avaran from '../../../assets/Society_Img/avaran.jpg'
import chromavita from '../../../assets/Society_Img/chromavita.jpg'
import drishti from '../../../assets/Society_Img/drishti.jpeg'
import electronauts from '../../../assets/Society_Img/electronauts.jpg'
import gdsc from '../../../assets/Society_Img/gdsc.jpg'
import hash_define from '../../../assets/Society_Img/hash_define.jpg'
import ieee_wie from '../../../assets/Society_Img/ieee_wie.jpg'
import ieee from '../../../assets/Society_Img/ieee.jpg'
import kalam from '../../../assets/Society_Img/kalam.jpg'
import mavericks from '../../../assets/Society_Img/mavericks.jpg'
import namespace from '../../../assets/Society_Img/namespace.jpg'
import octave from '../../../assets/Society_Img/octave.jpg'
import opticlick from '../../../assets/Society_Img/opticlick.jpg'
import panache from '../../../assets/Society_Img/panache.jpg'
import wibd from '../../../assets/Society_Img/wibd.jpg'
import anveshan from '../../../assets/Society_Img/anveshan.jpg'


const Existing_Societies = ()=>{
     const Technical_societies = [
        {name : 'WiBD' , imgSrc : wibd },{name:'anveshan',imgSrc:anveshan},
        {name : 'IEEE' , imgSrc : ieee },{name : 'WIE' , imgSrc : ieee_wie },
        {name : 'GDSC' , imgSrc : gdsc },{name : 'nameSpace' , imgSrc : namespace },
        {name : 'Electronauts' , imgSrc : electronauts },{name : '#define' , imgSrc : hash_define },

     ]

     const Non_Tech_Societies = [
        {name : 'Photography' , imgSrc : opticlick },{name : 'Dance' , imgSrc : mavericks },
        {name : 'Fashion' , imgSrc : panache },{name : 'Art' , imgSrc : chromavita },
        {name : 'Drama' , imgSrc : avaran },{name : 'Music' , imgSrc : octave },
        {name : 'Literary' , imgSrc : kalam },
     ]

      return(
      <>
       <div className="relative w-full mx-auto mt-10 ">
        <img
          className="h-80 w-full blur-sm "
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="BPIT img"
        />
        <div className="absolute inset-0  opacity-100">
          <div className="absolute inset-0 flex items-center justify-center ml-15">
            <h2 className="text-white font-bold text-4xl">
              View Existing Societies
            </h2>
          </div>
        </div>
      </div>
      
      <Slider_Helper name="Non-Technical Societies" societies={Non_Tech_Societies}/>

      <Slider_Helper name="Technical Societies" societies={Technical_societies}/>


     </>
      );
}

export default Existing_Societies;