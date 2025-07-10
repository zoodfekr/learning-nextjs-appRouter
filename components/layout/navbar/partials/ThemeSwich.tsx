'use client'

import { MainContext } from '@/context/MainContext'
import { FormControlLabel, Switch } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

const ThemeSwich = () => {



    const { darkMode, toggleTheme } = useContext(MainContext)

    useEffect(() => {
        console.log("in useEffect", darkMode);
    }, [darkMode])

    const handleChange = () => {
        console.log("in function", darkMode === 'dark' ? 'light' : 'dark');
        toggleTheme()
    }

    return (
        <div>
            <FormControlLabel
                control={<Switch checked={darkMode === "dark" ? true : false} onChange={handleChange} />}
                label=""
            />
        </div>
    )
}

export default ThemeSwich
