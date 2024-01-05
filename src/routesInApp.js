import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import ClientLandingPage from "./clients/views/Landing";

const NavigationInApp = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="https://wrfmixo.github.io/gttech/" element={ClientLandingPage} />
            </Routes>
        </BrowserRouter>
    )
}