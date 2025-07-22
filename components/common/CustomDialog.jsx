'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, DialogActions } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { deepPurple, purple } from '@mui/material/colors';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = (props) => {
    const {
        open = false,
        handleClose,
        type,
        Dialog_fullWidth,

        title,
        text,
        edit_dialog,
        children,
        handleConfirm,
        maxWidth,
        IconButton_display,
        sendData,
        textSize

    } = props;

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Dialog
                fullScreen={isMobile}
                dir='rtl'
                maxWidth={maxWidth ? maxWidth : 'sm'}
                fullWidth={Dialog_fullWidth ?? true}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        boxShadow: 8,
                        bgcolor: theme.palette.mode === 'dark'
                            ? "rgba(40,54,68,0.5)"
                            : "rgba(40,54,68,0.5)",
                        backdropFilter: "blur(7px)",
                        // backgroundImage: theme.palette.mode === 'dark'
                        //     ? 
                        //     : undefined,
                        p: 0,
                        overflow: "hidden"
                    }
                }}
            >

                <IconButton
                    aria-label="close"
                    onTouchEnd={handleClose}
                    onClick={(e) => {
                        handleClose();
                        e.currentTarget.blur();
                    }}
                    sx={{
                        position: 'absolute',
                        display: IconButton_display ? IconButton_display : "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        left: 8,
                        top: 5,
                        color: theme.palette.mode === 'dark'
                            ? "#fff"
                            : (theme) => theme.palette.grey[500],
                        zIndex: 2,
                        // bgcolor: theme.palette.mode === 'dark' ? purple[900] : "#fff",
                        // '&:hover': {
                        //     bgcolor: theme.palette.mode === 'dark' ? purple[800] : "#eee"
                        // }
                    }}
                >
                    <CloseIcon className="IconButton closeIcon" sx={{ borderRadius: "50%" }} />
                </IconButton >

                <DialogTitle
                    sx={{
                        m: 0,
                        py: 1,
                        px: 3,
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                        fontWeight: 700,
                        color: "#fff",
                        // background: theme.palette.mode === 'dark'
                        //     ? `linear-gradient(90deg, ${purple[800]} 0%, ${deepPurple[900]} 100%)`
                        //     : `linear-gradient(90deg, ${purple[400]} 0%, ${purple[700]} 100%)`,
                        letterSpacing: 1,
                        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? purple[900] : purple[200]}`
                    }}
                // id="customized-dialog-title"
                // className='bg-gradient-to-l from-purple-600 via-purple-700 to-purple-900 text-white chart_title'
                >

                    {title}
                </DialogTitle>

                <DialogContent
                    sx={{
                        zIndex: 10,
                        mt: 0,
                        pt: { xs: 2, sm: 3, md: 4 },
                        // border: "1px solid red",+ 23
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        bgcolor: theme.palette.mode === 'dark'
                            ? "transparent"
                            : "#f7fafc",
                        minHeight: 50
                    }}
                >
                    {text && (
                        <Typography
                            gutterBottom
                            sx={{
                                my: 0,
                                fontSize: textSize || "1rem",
                                color: theme.palette.mode === 'dark'
                                    ? "#fff"
                                    : theme.palette.text.primary,
                                m: 2
                            }}
                        >
                            {text}
                        </Typography>
                    )}
                    <Box className='relative h-full' sx={{ mt: 1, height: "100%", width: "100%" }}>
                        {children}
                    </Box>
                </DialogContent>
            </Dialog>

        </>
    )
};

export default CustomDialog;