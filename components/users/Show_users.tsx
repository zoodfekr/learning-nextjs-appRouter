import React from 'react'
import { Box, Typography, Stack, Avatar, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import { UserType } from '@/types/users'
import CustomPaper from '../common/CustomPaper'
import Delete_button from './partials/Delete_button'

const Show_users = ({ user }: { user: UserType }) => {
    return (
        <CustomPaper dir="ltr" >
            <Box textAlign="center" mb={2}>
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
                >
                    {user.username?.[0]?.toUpperCase()}
                </Avatar>
                <Typography variant="subtitle2" color="text.secondary">
                    @{user.username}
                </Typography>
            </Box>

            <Stack spacing={1.5} mb={4}>
                <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="body2">
                        <strong>Email:</strong> {user.email}
                    </Typography>
                </Box>
            </Stack>

            <Box position="absolute" bottom={16} left={0} right={0} textAlign="center" className='gap-3'>
                <Button
                    variant="contained"
                    color="primary"
                    href={`/users/${user.id}`}
                    sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        boxShadow: 2,
                    }}
                >
                    نمایش
                </Button>
                

                <Delete_button id={user?.id ?? 0} />
            </Box>
        </CustomPaper>
    )
}

export default Show_users
