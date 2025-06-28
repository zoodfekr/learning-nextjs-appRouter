'use client'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import HomeIcon from '@mui/icons-material/Home'
import ApartmentIcon from '@mui/icons-material/Apartment'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice'
import PublicIcon from '@mui/icons-material/Public'
import PhoneIcon from '@mui/icons-material/Phone'
import LanguageIcon from '@mui/icons-material/Language'
import BusinessIcon from '@mui/icons-material/Business'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import WorkspacesIcon from '@mui/icons-material/Workspaces'
import AddIcon from '@mui/icons-material/Add';


import CustomDialog from '../common/CustomDialog'
import Add_user_form from './partials/Add_user_form'
import { Fab } from '@mui/material'
import { useState } from 'react'

const Add_user = () => {


    const [add_user_dialog, setadd_user_dialog] = useState<boolean>(false)


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // ارسال اطلاعات فرم
        console.log(e);
    };

    const userFields = [
        { label: 'نام', path: ['name'], icon: <PersonIcon color="action" /> },
        { label: 'نام کاربری', path: ['username'], icon: <AlternateEmailIcon color="action" /> },
        { label: 'ایمیل', path: ['email'], icon: <AlternateEmailIcon color="action" />, type: 'email' },
    ];
    const addressFields = [
        { label: 'خیابان', path: ['address', 'street'], icon: <HomeIcon color="action" /> },
        { label: 'واحد', path: ['address', 'suite'], icon: <ApartmentIcon color="action" /> },
        { label: 'شهر', path: ['address', 'city'], icon: <LocationCityIcon color="action" /> },
        { label: 'کدپستی', path: ['address', 'zipcode'], icon: <LocalPostOfficeIcon color="action" /> },
        { label: 'عرض جغرافیایی', path: ['address', 'geo', 'lat'], icon: <PublicIcon color="action" /> },
        { label: 'طول جغرافیایی', path: ['address', 'geo', 'lng'], icon: <PublicIcon color="action" /> },
    ];
    const contactFields = [
        { label: 'تلفن', path: ['phone'], icon: <PhoneIcon color="action" /> },
        { label: 'وبسایت', path: ['website'], icon: <LanguageIcon color="action" /> },
    ];
    const companyFields = [
        { label: 'نام شرکت', path: ['company', 'name'], icon: <BusinessIcon color="action" /> },
        { label: 'شعار', path: ['company', 'catchPhrase'], icon: <EmojiObjectsIcon color="action" /> },
        { label: 'حوزه فعالیت', path: ['company', 'bs'], icon: <WorkspacesIcon color="action" /> },
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
                    addressFields={addressFields}
                    contactFields={contactFields}
                    companyFields={companyFields}
                    handleSubmit={handleSubmit}
                />
            </CustomDialog>
        </>
    )
}

export default Add_user