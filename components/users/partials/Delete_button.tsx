'use client'
import { delete_userData_action } from '@/actions/users/delete_user_action'
import { Button } from '@mui/material'
import React from 'react'


const Delete_button = ({ id }: { id: number }) => {
    return (
        <Button
            variant="contained"
            color='error'
            onClick={() => delete_userData_action({ id })}
            sx={{
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: 2,
            }}
        >
            حذف
        </Button>
    )
}

export default Delete_button