import { fakeCars } from '@/api/fakeData_cars'
import Paper_hoc from '@/components/common/HOC/Paper_hoc'
import Mini_card from '@/components/common/Mini_card'
import React from 'react'

interface Props {
    params: { carName: string }
}

const Page = ({ params }: Props) => {
    const data = fakeCars.filter(
        (val) => val.brand.toLowerCase() === params.carName.toLowerCase()
    )

    return (
        <Paper_hoc className="  
        flex-col
        m-2 
        p-2 
        md:p-5 
        gap-4
        md:m-5 
        md:flex-row
        md:gap-8
        
        grid grid-cols-4
           ">

            {data.length === 0 ? (
                <p>هیچ خودرویی با این نام پیدا نشد.</p>
            ) : (
                data.map((val) => (
                    <Mini_card data={val} key={val.id}></Mini_card>
                ))
            )}
        </Paper_hoc>
    )
}

export default Page
