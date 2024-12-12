import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Profile from "../assets/profile.jpeg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    grid: {
        // borderWidth: "thin",
        // border: "#666666",
        // borderStyle: "dashed",
        // backgroundColor: "#e1e1e1",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3%",
    },
    profile_pic: {
        maxWidth: 500,
        height: 400,
        backgroundImage: `url(${Profile})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        // margin: "20px",
        // border: "1px solid grey",
    },

    // profile_pic: {
    //   maxWidth: "100%",
    //   width: "450px",
    // },
    profile_text: {
        textAlign: "left",
        margin: "auto",
        // margin: "40px 0px 0px 20px",
        // border: "1px solid red",
    },
    title: {
        marginBottom: "20px",
    },
    border: {
        // borderWidth: "thin",
        // border: "#666666",
        // borderStyle: "dashed",
        // backgroundColor: "#e1e1e1",
    },
}));

const Intro = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const onMouseEnterHandler = (id) => (e) => {
        console.log("enter handler", id);
        setActiveStep(id);
    };
    const onMouseLeaveHandler = (id) => (e) => {
        console.log("leave handler", id);
        setActiveStep(0);
    };

    return (
        <Grid container className={classes.grid}>
            <Grid item xs={12} sm={6} className={classes.border}>
                <div className={classes.profile_text}>
                    <Typography variant="h5" component="h2" color="primary">
                        Welcome to Ekta's home page
                    </Typography>
                    <Typography
                        className={classes.title}
                        color="secondary"
                        gutterBottom
                    >
                        Manager - Strategic Research at Capgemini
                    </Typography>
                    <Typography gutterBottom>
                        Consultant with close to 12 years of experience, with demonstrated history of working in the
                        Healthcare, Life Sciences Research, Pharma-IT and Market research industry. Skilled in
                        Consulting and Analytics covering a broad set of domains such as Primary and Secondary Market
                        Research, Insights, Patient Analytics, Competitive Intelligence, Client servicing and reporting,
                        End-to-end
                        servicing of primary market research projects, Project management, Market research, Budget
                        management, Team management, Operations management, Customer insight, Microsoft office and
                        PowerPoint.
                        <br></br>
                        <br></br>
                        I have managed and executed Quantitative and Qualitative Research projects across USA, Canada,
                        APAC, EMEA region. Majorly responsible for client and vendor communication, team building, team
                        management/training and perform internal process updates.
                    </Typography>
                    <Typography gutterBottom style={{ marginTop: '16px', color: 'gray'  }}>
                        Skills: Project management, People management, Team management and training, Process development and management, Vendor management, Client Servicing/communication, Project requirement analysis, Process improvements, Positive proactive approach, Strong work ethics.
                    </Typography>
                </div>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
        <img src={Profile} className={classes.profile_pic} />
      </Grid> */}
            <Grid
                item
                sm={5}
                xs={12}
                className={classes.border}
                onMouseEnter={onMouseEnterHandler("profile_pic")}
                onMouseLeave={onMouseLeaveHandler("profile_pic")}
            >
                <Paper
                    className={classes.profile_pic}
                    elevation={activeStep === "profile_pic" ? 8 : 2}
                />
            </Grid>
        </Grid>
    );
};

export default Intro;
