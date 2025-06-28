'use client'
import Custom_Divider from '@/components/common/Custom_Divider'

import {
    Box, Button, TextField, Typography, Paper, InputAdornment,
    Divider
} from '@mui/material'

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

import React, { useState } from 'react'



const Add_user_form = ({
    userFields,
    addressFields,
    contactFields,
    companyFields,
    handleSubmit
}) => {



    return (
        <Box
            component={Paper}
            elevation={6}
            sx={{
                mx: 'auto',
                p: 1,
                bgcolor: '#f5f5f5',
                borderRadius: 3
            }}
        >
            <form onSubmit={handleSubmit} >

                <Custom_Divider text={'مشخصات'} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {userFields.map((field, idx) => (
                        <div key={idx}>
                            <TextField
                                label={field.label}
                                // value={field.value}
                                // onChange={e => handleChange(e, [...field.path])}
                                fullWidth
                                type={field.type || 'text'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {field.icon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </div>

                <Custom_Divider text={'آدرس'} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {addressFields.map((field, idx) => (
                        <div key={idx}>
                            <TextField
                                label={field.label}
                                // // value={field.value}
                                // onChange={e => handleChange(e, [...field.path])}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {field.icon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </div>

                <Custom_Divider text={'ارتباطات'} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactFields.map((field, idx) => (
                        <div key={idx}>
                            <TextField
                                label={field.label}
                                // // value={field.value}
                                // onChange={e => handleChange(e, [...field.path])}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {field.icon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </div>

                <Custom_Divider text={'شرکت'} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {companyFields.map((field, idx) => (
                        <div key={idx}>
                            <TextField
                                label={field.label}
                                // // value={field.value}
                                // onChange={e => handleChange(e, [...field.path])}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {field.icon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div className='w-full flex justify-end mt-4'>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ width: '150px', fontWeight: 'bold', fontSize: 18 }}
                    >
                        ثبت کاربر
                    </Button>
                </div>
            </form>
        </Box>
    )
}

export default Add_user_form