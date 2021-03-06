import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import {Navbar} from "./Navbar";

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before":{
                left: "calc(50% - 1px)",
                right: "auto",
            }
        }
    },
    timeLineItem: {
        position: "relative",
        padding: "1rem",
        margin: "1rem 3rem 1rem 3rem",
        borderBottom: "2px solid tan",
        clear: "both",
        "&:before": {
            content: "''",
            position: "absolute",
            borderStyle: "solid",
            right: "-0.625rem",
            top: "calc(50% - 1px)",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        "&:after": {
            content: "''",
            position: "absolute",
        },
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)":{
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before":{
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
            },
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.35rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)":{
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before":{
                display: "none",
            },
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase",
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Web Design
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                        Company Name Where Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Explain about yourself?
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2021
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        HTML & CSS
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                        Company Name Where Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Explain about yourself?
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2022
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        BootStrap
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                        Company Name Where Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Explain about yourself?
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2023
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        JavaScript
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                        Company Name Where Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Explain about yourself?
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2024
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        React| Redux
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                        Company Name Where Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Explain about yourself?
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2025
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        MERN Stack
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"tomato"}}>
                        Company Name Where Worked
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Explain about yourself?
                    </Typography>
                </Box>
                </Box>
            </Box>
        </>
    );
};

export default Resume;