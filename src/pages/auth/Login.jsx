import React, { useState } from "react";
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom"

const Login = () => {
const [ showPassword, setShowPassword ] = useState(false);

    return(
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] text-center text-white mb-8">Iniciar sesión</h1>
           <form className="mb-8" action="">
            <button className="flex item-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full">
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className="w-6 h-6"/>
                Ingresar con google
            </button>
                <div className="relative">
                <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-grey-500"/>
                    <input className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-md my-5" placeholder="Correo electronico" type="email" />
                </div>
                <div className="relative">
                <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2 text-grey-500"/>
                    <input 
                    className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-md my-5" 
                    placeholder="Contraseña" 
                    type={showPassword ? "text" : "password"} /> {/* Si showPassword esta en true tu type vas ser text o sino password */}
                    
                    {showPassword ? (
                        <RiEyeOffFill onClick={()=> setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
                    ) : (
                        <RiEyeFill onClick={()=> setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
                    )}
                </div>
                <div>
                    <button className="bg-blue-800 w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors">
                        Ingresar
                    </button>
                    </div>
           </form>
           <div className="flex flex-col text-center gap-4">
                <Link className="hover:text-primary transition-colors" to="/">¿Olvidaste yu contraseña?</Link>
                <span> ¿No tienes cuenta? <Link className="text-primary ml-3 hover:text-gray-400 transition-colors" to="/auth/registro">Registrate</Link></span>
           </div>
    </div>
    )
}

export default Login