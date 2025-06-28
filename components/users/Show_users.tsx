import { UserType } from '@/types/users'
import React from 'react'
import { Box, Typography, Paper, Link, Stack, Avatar } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LanguageIcon from '@mui/icons-material/Language'
import CustomPaper from '../common/CustomPaper'


const stringAvatar = (name: string) => ({
    children: name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase(),
})

const Show_users = ({ user }: { user: UserType }) => {
    return (
        <CustomPaper dir='ltr' >
            <Box textAlign="center" mb={3}>
                <Avatar
                    {...stringAvatar(user.name)}
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
                <Typography variant="h5" fontWeight="bold" color="primary.dark">
                    {user.name}
                </Typography>
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
                <Box display="flex" alignItems="center" gap={1}>
                    <PhoneIcon sx={{ color: 'primary.main' }} />
                    <Typography>
                        <strong>Phone:</strong> {user.phone}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <LanguageIcon sx={{ color: 'primary.main' }} />
                    <Typography>
                        <strong>Website:</strong>{' '}
                        <Link href={`https://${user.website}`} target="_blank" rel="noopener" underline="hover">
                            {user.website}
                        </Link>
                    </Typography>
                </Box>

                {/* <div className=''></div> */}

                <div className='absolute bottom-5'>


                    <Link
                        href={`/users/${user.id}`}
                        className=" px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition
                    flex justify-center
                    "
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