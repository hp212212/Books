import React from 'react';
import Registration1 from "./Registration1";
import UserLogin1 from "./UserLogin1";
// import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { Routes, Route, useLocation,} from 'react-router-dom'

const Admin1 = () => {
    const location = useLocation();
    return (
        <>
        <h1>Hites</h1>
        {/* <h1>{location}</h1> */}

            <Routes>
                {/* <Route exact path="Admin1/Registration1" element={<Registration1 />} />
                <Route exact path="Admin1/UserLogin1" element={<UserLogin1 />} /> */}
                <Route exact path="Admin1/UserLogin1" element={<Registration1 />} />
                <Route exact path="Admin1/Registration1" element={<UserLogin1 />} />
            </Routes>
            Admin1
        </>
    )
}

export default Admin1;