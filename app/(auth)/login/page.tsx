import LoginComponent from '@/components/login/LoginComponent'
import { autFuction } from '@/service/auth'
import React from 'react'

const Page = () => {


    return (

        <>
            <LoginComponent actionFunc={autFuction} />
        </>
    )
}

export default Page
