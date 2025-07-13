'use client'

import { MainContext } from "@/context/MainContext";
import { ReactNode, useContext } from "react";

const LayoutContainer = ({ children }: { children: ReactNode }) => {


    const { darkMode } = useContext(MainContext)

    return (
        <div className={`${darkMode == 'dark' ? darkMode : ""}`}>

            {children}
        </div>
    )
};
export default LayoutContainer