import React from "react"
import { Outlet } from "react-router-dom"


function Register() {
    return(
        <div>
            Registro <Outlet />
        </div>
    )
}
// const Register = () => {
//     return<div>Registro <Outlet /></div>
// }

export default Register