import React from 'react'
import { Box, Typography, Link, Stack, Avatar } from '@mui/material'

import { UserType } from '@/types/users'
import EmailIcon from '@mui/icons-material/Email'
import CustomPaper from '../common/CustomPaper'


const Show_users = ({ user }: { user: UserType }) => {
    return (
        <CustomPaper dir='ltr' >
            <Box textAlign="center" mb={3}>
                <Avatar
                    sx={{
                        width: 72,
                        height: 72,
                        mx: 'auto',
                        mb: 1.5,
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontSize: 32,
                        boxShadow: 2,
                    }}
                />
                <Typography variant="subtitle2" color="text.secondary">
                    @{user.username}
                </Typography>
            </Box>

            <Stack spacing={2} mb={2} >
                <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon sx={{ color: 'primary.main' }} />
                    <Typography>
                        <strong>Email:</strong> {user.email}
                    </Typography>
                </Box>

                {/* <div className=''></div> */}

                <div className='absolute bottom-5'>


                    <Link
                        href={`/users/${user.id}`}
                        className=" px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition flex justify-center"
                    >
                        <span className='text-white'>
                            نمایش
                        </span>
                    </Link>
                </div>

            </Stack>


        </CustomPaper>
    )
}

export default Show_users