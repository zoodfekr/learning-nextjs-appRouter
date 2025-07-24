'use client'
import CustomDialog from '@/components/common/CustomDialog'
import Todo_component from '@/components/todo/Todo_component'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {

    const router = useRouter()

    const handleClose = () => router.back();

    return (
        <CustomDialog open={true} handleClose={handleClose} title={'نمایش کارهای انجام شده'}>
            <Todo_component />
        </CustomDialog>
    )
}

export default Page