import React, { useState, useEffect } from 'react';

export default function ScrollHooks (){
 const [scrollY,setScrollY] = useState(0);

  useEffect(()=>{
    console.log("Moviendo el Scroll");
    const detectarScroll = ()=>setScrollY(window.pageYOffset);
    window.addEventListener("scroll",detectarScroll);

    return ()=> window.removeEventListener("scroll",detectarScroll);
    
   },[scrollY]);

   useEffect(()=>{
    //console.log("fase de montaje");

   },[]);

   useEffect(()=>{
    // console.log("fase de actualizacion");
  });

  useEffect(()=>{    
    return ()=>{
     // console.log("Fase de desmontaje");
    }
 });

  return(
    <>
      <h2>Hooks - useEfect y el ciclo de vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}