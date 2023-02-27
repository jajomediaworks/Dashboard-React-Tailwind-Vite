import React from "react";
import { RiMailFill, RiLockFill, RiEyeFill } from "react-icons/ri";

const Login = () => {
    return(
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8">Iniciar sesión</h1>
           <form action="">
            <button className="flex item-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full">
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className="w-6 h-6"/>
                Ingresar con google
            </button>
                <div className="relative">
                <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2"/>
                    <input className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-md my-5" placeholder="Correo electronico" type="email" />
                </div>
                <div className="relative">
                <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2"/>
                    <input className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-md my-5" placeholder="Contraseña" type="password" />
                <RiEyeFill className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
                </div>
           </form>
    </div>
    )
}

export default Login