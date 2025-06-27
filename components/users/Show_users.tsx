import { UserType } from '@/types/users'
import React from 'react'
import { Box, Typography, Paper, Link, Divider, Stack } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LanguageIcon from '@mui/icons-material/Language'
import BusinessIcon from '@mui/icons-material/Business'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Show_users = ({ user }: { user: UserType }) => {
    return (
        <Paper elevation={4} sx={{ mx: 'auto', p: 4, borderRadius: 4, m: 1 }}>
            <Box textAlign="center" mb={3}>
                <Typography variant="h5" fontWeight="bold">{user.name}</Typography>
                <Typography variant="subtitle2" color="text.secondary">@{user.username}</Typography>
            </Box>

            <Stack spacing={1.5}>
                <Box display="flex" alignItems="center">
                    <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography><strong>Email:</strong> {user.email}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography><strong>Phone:</strong> {user.phone}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <LanguageIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography>
                        <strong>Website:</strong>{' '}
                        <Link href={`https://${user.website}`} target="_blank" rel="noopener" underline="hover">
                            {user.website}
                        </Link>
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <BusinessIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle1" fontWeight="medium">Company</Typography>
                </Box>
                <Typography fontWeight="bold">{user.company.name}</Typography>
                <Typography variant="body2" fontStyle="italic">"{user.company.catchPhrase}"</Typography>
                <Typography variant="body2" color="text.secondary">{user.company.bs}</Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle1" fontWeight="medium">Address</Typography>
                </Box>
                <Typography>{user.address.suite}, {user.address.street}</Typography>
                <Typography>{user.address.city} - {user.address.zipcode}</Typography>
                <Typography variant="caption" color="text.secondary">
                    Geo: {user.address.geo.lat}, {user.address.geo.lng}
                </Typography>
            </Box>
        </Paper>
    )
}

export default Show_users