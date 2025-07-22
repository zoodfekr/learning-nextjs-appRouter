
import CustomDialog from '@/components/common/CustomDialog'
import { Button } from '@mui/material';
import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const fakeTodos = [
    { id: 1, title: 'خرید نان', completed: true },
    { id: 2, title: 'مطالعه کتاب', completed: true },
    { id: 3, title: 'تمرین برنامه‌نویسی', completed: true },
];



const Todo_component = () => {
    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: 24 }}>
            <h2 style={{ textAlign: 'center', marginBottom: 16 }}>کارهای انجام شده</h2>
            {fakeTodos.map(todo => (
                <div key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 12, background: '#f3f3f3', borderRadius: 8, padding: 12 }}>
                    <CheckCircleIcon color="success" style={{ marginLeft: 8 }} />
                    <span style={{ fontSize: 16 }} className='text-black'>{todo.title}</span>
                </div>
            ))}
            <CustomDialog open={false} /> {/* نمادین */}
        </div>
    )
}

export default Todo_component