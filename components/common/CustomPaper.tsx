import { Paper } from '@mui/material'
import React from 'react'

const CustomPaper = ({ children, dir = 'rtl' }: { children: React.ReactNode, dir?: 'rtl' | 'ltr' }) => {
    return (
        <Paper
            elevation={8}
            sx={{
                mx: 'auto',
                position: "relative",
                direction: dir,
                p: 4,
                borderRadius: 6,
                m: 2,
                maxWidth: 420,
                maxHeight: 300,
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            }}
        >
            {children}
        </Paper>
    )
}

export default CustomPaper