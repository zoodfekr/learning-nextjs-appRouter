
import React from 'react'

import Paper_hoc from '@/components/common/HOC/Paper_hoc'
import Mini_card from '@/components/common/Mini_card'

import { fakeCars } from '@/api/fakeData_cars'



export default async function Page({ params }: { params: Promise<{ carName: string }> }) {
    
    const resolvedParams = await params;

    const data = resolvedParams.carName
        ? fakeCars.filter((val) => val.brand.toLowerCase() === resolvedParams.carName.toLowerCase())
        : [];

    return (
        <Paper_hoc className="flex-col m-2 p-2 md:p-5 gap-4 md:m-5 md:flex-row md:gap-8 grid grid-cols-4">
            {data.length === 0 ? (
                <p>هیچ خودرویی با این نام پیدا نشد.</p>
            ) : (
                data.map((val) => <Mini_card data={val} key={val.id} />)
            )}
        </Paper_hoc>
    );
}
