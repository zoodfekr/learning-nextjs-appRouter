'use client'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import AddIcon from '@mui/icons-material/Add';


import CustomDialog from '../common/CustomDialog'
import Add_user_form from './partials/Add_user_form'
import { Fab } from '@mui/material'
import { useState } from 'react'

const Add_user = ({ handleSendDatatoDb }: { handleSendDatatoDb: (e: { email: string, username: string }) => void }) => {


    const [add_user_dialog, setadd_user_dialog] = useState<boolean>(false)


    const userFields = [
        { label: 'نام کاربری', path: ['username'], icon: <AlternateEmailIcon color="action" /> },
        { label: 'ایمیل', path: ['email'], icon: <AlternateEmailIcon color="action" />, type: 'email' },
    ];

    return (
        <>

            <div className='bordrer border-red-500  fixed bottom-5 right-5'>
                <Fab color="primary" aria-label="add" onClick={() => setadd_user_dialog(true)}>
                    <AddIcon />
                </Fab>
            </div>

            <CustomDialog
                open={add_user_dialog}
                handleClose={setadd_user_dialog}
                oncloser
                maxWidth={'md'}
                title={'افزودن کاربر'}
            >
                <Add_user_form
                    userFields={userFields}
                    handleSubmit={handleSendDatatoDb}
                />
            </CustomDialog>
        </>
    )
}

export default Add_user