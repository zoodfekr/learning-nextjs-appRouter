import Custom_Divider from '@/components/common/Custom_Divider'
import { Box, Button, TextField, Paper, InputAdornment } from '@mui/material'
import React from 'react'


type userFormDataType = {
    label: string;
    path: string[];
    type?: string;
    icon?: React.ReactNode;
};

const Add_user_form = (
    {
        userFields,
        handleSubmit
    }: {
        userFields: userFormDataType[],
        handleSubmit: (e: { username: string, email: string }) => void
    }
) => {


    const handleFormData = (e: FormData) => {
        const tempData = {
            username: e.get('username') as string,
            email: e.get('email') as string
        };
        handleSubmit(tempData);
    };


    return (
        <Box
            component={Paper}
            elevation={10}
            sx={{
                mx: 'auto',
                p: { xs: 2, sm: 4 },
                bgcolor: 'linear-gradient(135deg, #f5f5f5 60%, #e3e3fd 100%)',
                borderRadius: 5,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                maxWidth: 600,
                minWidth: { xs: '90vw', sm: 400 },
                mt: 1,
            }}
        >
            <Custom_Divider text="فرم ثبت کاربر جدید" />
            <form action={handleFormData} autoComplete="off">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {userFields.map((field, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                            <TextField
                                name={field.path.join('.')}
                                label={field.label}
                                fullWidth
                                type={field.type || 'text'}
                                InputProps={{
                                    startAdornment: field.icon ? (
                                        <InputAdornment position="start">
                                            {field.icon}
                                        </InputAdornment>
                                    ) : undefined,
                                    sx: {
                                        bgcolor: '#fff',
                                        borderRadius: 2,
                                    }
                                }}
                                sx={{
                                    '& label': { color: '#3f51b5', fontWeight: 500 },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#bdbdbd' },
                                        '&:hover fieldset': { borderColor: '#3f51b5' },
                                        '&.Mui-focused fieldset': { borderColor: '#3f51b5' },
                                    },
                                }}
                            />
                        </div>
                    ))}
                </div>
                <div className='w-full flex justify-end mt-8'>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            width: '180px',
                            fontWeight: 'bold',
                            fontSize: 20,
                            borderRadius: 3,
                            boxShadow: '0 4px 20px 0 rgba(63,81,181,0.15)',
                            background: 'linear-gradient(90deg, #3f51b5 60%, #5c6bc0 100%)',
                            transition: 'all 0.2s',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #283593 60%, #5c6bc0 100%)',
                                transform: 'translateY(-2px) scale(1.03)',
                                boxShadow: '0 8px 32px 0 rgba(63,81,181,0.18)',
                            },
                        }}
                    >
                        ثبت کاربر
                    </Button>
                </div>
            </form>
        </Box>
    )
}

export default Add_user_form