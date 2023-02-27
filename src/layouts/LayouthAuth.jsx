import React from "react";
import { Outlet } from "react-router-dom";

function LayouthAuth(params) {
    return(
        <div className="min-h-screen flex items-center justify-center">
            <Outlet />
        </div>
    )
}

// const LayouthAuth = () => {
//     return <div>
//             Layouth Autentificación <Outlet />
//         </div>
// }

export default LayouthAuth