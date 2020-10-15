import React,{useState,Fragment} from 'react';
import {useForm}from 'react-hook-form';
import { useCookies } from 'react-cookie';

const Form = () => {

const {register, errors, handleSubmit} = useForm();
const [info,setInfo]=useState([]);
 const [cookies, setCookie] =useCookies(['name'] )

const onSubmit=(date, e)=>{
   
setInfo([
    ...info,
   date
])
setCookie('name', date, {path:'/'}) ;
e.target.reset();
}

 return (
<div className="formu container mt-4">
     <h3>Formulario de ingreso</h3>
    <form action="Cookies.html" method="post" id="form-user" className="form-row" onSubmit={handleSubmit(onSubmit)}>
       <div className="form-row">
        <div className="form-group col-md-6">    
        <input
          placeholder="Ingrese Nombre"
          className="form-control"
          name="nameperson"
          type="text"
          ref={
              register({
                  required:{value:true, message:'* Campo Obligatorio'}
              })
          }
          />
          <span className="text-danger text-small d-block mb-2">
                    {errors?.nameperson?.message}
       </span>
        </div>

        <div className="form-group col-md-6 ">
        <input 
          placeholder="Ingrese Apellido"
          className="form-control"
          name="lastName"
         type="text"
          
           ref={
            register({
                required:{value:true, message:'* Campo Obligatorio'}
            })
        }
           />
            <span className="text-danger text-small d-block mb-2">
                    {errors?.lastName?.message}
       </span>
        </div>
        <div className="form-group col-md-6 ">
        <input 
           placeholder="Ingrese Cédula"
           className="form-control"
           name="document"
        
           type="number"
           ref={
            register({
                required:{value:true, message:'* Campo Obligatorio'},
                maxLength: {
                    value: 10, 
                    message: '* Cédula incorrecta!'
                    },
            })
        }
           />
            <span className="text-danger text-small d-block mb-2">
                    {errors?.document?.message}
       </span>
        </div>
        <div className="form-group col-md-6">
        <input 
            placeholder="Fecha de nacimiento"
            className="form-control"
            name="date"
           
           type="date"
            ref={
                register({
                    required:{value:true, message:'* Campo Obligatorio'}
                })
            }
            />
             <span className="text-danger text-small d-block mb-2">
                    {errors?.date?.message}
       </span>
        </div>
        <div className="form-group col-md-6">
        <input 
             placeholder="Ingrese correo electronico"
             className="form-control"
             name="email"
           
             type="email"
             ref={
                register({
                    required:{value:true, message:'* Campo Obligatorio'}
                })
            }
             />
              <span className="text-danger text-small d-block mb-2">
                    {errors?.email?.message}
       </span>
        </div>
        <div className="form-group col-md-6">
        <input 
           placeholder="Ingrese gitHub"
           className="form-control"
           name="github"
           
           type="text"
            ref={
                register({
                    required:{value:true, message:'* Campo Obligatorio'}
                })
            }
            />
             <span className="text-danger text-small d-block mb-2">
                    {errors?.github?.message}
       </span>
        </div>
        <div className="col-md-6 mt-2">
        <button className="btn btn-primary btn-lg button">Enviar</button>
        </div>
        </div>
    </form>
    
        </div>
        
    )
}

export default Form;
