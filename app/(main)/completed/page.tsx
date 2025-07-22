import Todo_component from '@/components/todo/Todo_component'
import { grey } from '@mui/material/colors'
import React from 'react'

const Completed = () => {

    // ? کامپوننت اصلی نمایش کارهای انجام شده

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                    borderRadius: 16,
                    background: grey[500],
                    padding: 32,
                    minWidth: 350,
                    maxWidth: 420,
                }}
            >
                <Todo_component />
            </div>
        </div>
    )
}

export default Completed