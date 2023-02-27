import React from "react";
// Para que apareazca el home hay que importar outlet
import { Outlet } from "react-router-dom";

function LayoutAdmin() {
    return(
        <div>
            Layout Admin <Outlet />
        </div>
    )
}

// const LayoutAdmin = () => {
//     return <div>Layout Admin <Outlet /></div>
// }

export default LayoutAdmin