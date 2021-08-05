import React, { useState } from 'react';

// export default function Formularios(){

//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     alert("el formulario se ha enviado");
//   }


//   return(
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit} >
//         <label htmlFor="name">Nombre</label>
//         <input type="text" 
//         id="name" 
//         name="name" 
//         value={nombre} 
//         onChange={(e)=> setNombre(e.target.value)}
//         />

//         <p>Elige tu sabor JS favorito</p>
//         <input 
//         type="radio" 
//         name="sabor" 
//         id="vanilla" 
//         value="vanilla"
//         defaultChecked
//         onChange={(e)=>setSabor(e.target.value)}
//         />
//         <label htmlFor="vanilla">Vanilla</label>
//         <input 
//         type="radio" 
//         name="sabor" 
//         id="react" 
//         value="react"
//         onChange={(e)=>setSabor(e.target.value)}
//         />
//         <label htmlFor="react">React</label>
//         <input 
//         type="radio" 
//         name="sabor" 
//         id="angular" 
//         value="angular"
//         onChange={(e)=>setSabor(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>
//         <input 
//         type="radio" 
//         name="sabor" 
//         id="vue" 
//         value="vue"
//         onChange={(e)=>setSabor(e.target.value)}
//         />
//         <label htmlFor="vue">Vue</label>
//         <input 
//         type="radio" 
//         name="sabor" 
//         id="svelte" 
//         value="svelte"
//         onChange={(e)=>setSabor(e.target.value)}
//         />
//         <label htmlFor="svelte">Svelte</label>
//         <p>Elije tu lenguaje de programacion favorito</p>
//         <select name="lenguaje" id="" onChange={(e)=>setLenguaje(e.target.value)} defaultValue="">
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto terminos y condiciones</label>
//         <input 
//         type="checkbox" 
//         name="terminos" 
//         id="terminos" 
//         onChange={(e)=>setTerminos(e.target.checked)}
//         />
//         <input type="submit" style={{display:"block"}}/>
//       </form>
//     </>
//   );
// }

export default function Formularios(){

  const [form, setForm] = useState({});
  
  const handleChange = (e)=>{
    setForm({
      ...form,[e.target.name]:e.target.value,
    });
  };

  const handleChecked = (e)=>{
    setForm({
      ...form,[e.target.name]:e.target.checked,
    });
  }

  const handleSubmit = (e)=>{
         e.preventDefault();
         alert("el formulario se ha enviado");
       }


  return(
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Nombre</label>
        <input type="text" 
        id="name" 
        name="name" 
        value={form.nombre} 
        onChange={handleChange}
        />

        <p>Elige tu sabor JS favorito</p>
        <input 
        type="radio" 
        name="sabor" 
        id="vanilla" 
        value="vanilla"
        defaultChecked
        onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input 
        type="radio" 
        name="sabor" 
        id="react" 
        value="react"
        onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input 
        type="radio" 
        name="sabor" 
        id="angular" 
        value="angular"
        onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input 
        type="radio" 
        name="sabor" 
        id="vue" 
        value="vue"
        onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input 
        type="radio" 
        name="sabor" 
        id="svelte" 
        value="svelte"
        onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elije tu lenguaje de programacion favorito</p>
        <select name="lenguaje" id="" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input 
        type="checkbox" 
        name="terminos" 
        id="terminos" 
        onChange={handleChecked}
        />
        <input type="submit" style={{display:"block"}}/>
      </form>
    </>
  );
}