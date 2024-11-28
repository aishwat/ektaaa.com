import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {Fragment} from "react";
import Profile from "../assets/profile.jpeg";
import Chip from "@material-ui/core/Chip";

import SubHeader from "./SubHeader";
import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
    imageIcon: {
        height: '100%'
    },
    iconRoot: {
        textAlign: 'center'
    },
    profile_pic: {
        maxWidth: 500,
        height: 400,
        backgroundImage: `url(${Profile})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        margin: "20px",
        // border: "1px solid grey",
    },

    profile_text: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        paddingLeft: "20px",
        overflow: "hidden",
        color: "rgba(80,80,80, 1)",
    },
    title: {
        // fontFamily: ["MarkPro", "sans-serif"],
        fontSize: "18pt",
        fontWeight: "700",
        color: "#3f51b5",
    },

    gridRoot: {
        // borderWidth: "thin",
        // border: "#666666",
        // borderStyle: 'dashed',
        // padding: theme.spacing(0),
    },
    // gridBox: {
    //   margin: theme.spacing(0),
    //   backgroundColor: '#e1e1e1',
    // },
    border: {
        // borderWidth: "thin",
        // border: "#666666",
        // borderStyle: "dashed",
        // backgroundColor: "#e1e1e1",
    },
    stepper: {
        textAlign: "left",
        backgroundColor: "#f5f5f5",
    },
    label: {
        // display: "flex",
        // justifyContent: "space-between",
        // alignItems: "center",
    },
    stepContent: {
        padding: "15px 0px 0px 20px",
    },
    designation: {
        marginBottom: "10px",
        fontSize: "12pt",
        fontWeight: "700",
        color: "rgba(0, 0, 0, 0.6)",
    },
    designationHover: {
        marginBottom: "10px",
        fontSize: "12pt",
        fontWeight: "700",
        color: "rgb(63,81,181)",
        // color: "rgba(0, 0, 0, 1)",
    },
    desc: {
        fontSize: "12pt",
        color: "rgba(0, 0, 0, 0.6)",
    },
    ul: {
        fontWeight: "normal",
        fontSize: "13pt",
        color: "rgba(80, 80, 80, 1)",
    },
    ulHover: {
        fontWeight: "normal",
        fontSize: "13pt",
        color: "rgba(0, 0, 0, 1)",
    },
    li: {
        margin: "10px 0",
    },
}));

const getWorkEx = () => {
    return [
        {
            "company": "Tesco Technology",
            "duration": "Since May 2024",
            "data": [
                {
                    "designation": "Lead Software Engineer",
                    "desc": "Leading the transition to Federated GraphQL Architecture to enhance scalability and maintainability.",
                    "points": [
                        "Led the decomposition of a monolithic GraphQL application into federated microservices using Apollo Federation.",
                        "Architected and implemented a Federated GraphQL Architecture to enhance scalability and maintainability.",
                        "Guided cross-functional teams in rearchitecting systems, improving performance and modularity."
                    ]
                }
            ]
        },
        {
            "company": "Vita Mojo",
            "duration": "Feb 2022 - Mar 2024",
            "data": [
                {
                    "designation": "Lead Engineer",
                    "desc": "Focused on integrating external systems and ensuring compliance with global standards.",
                    "points": [
                        "Integrated Subway APIs into kiosks along with ingesting Subway catalog data into Vita Mojo system using AWS Step Functions.",
                        "Enabled POS (point-of-sale) systems with France Fiscalization, ensuring compliance.",
                        "Developed architecture diagrams to streamline the onboarding process for new team members."
                    ]
                },
                {
                    "designation": "Full Stack Engineer",
                    "desc": "Optimized loyalty and delivery integrations within the Vita Mojo ecosystem.",
                    "points": [
                        "Refactored loyalty system using strategy pattern to reduce integration time for new providers, integrating Acteol and Como.",
                        "Integrated delivery providers like UberEats and JustEats with Vita Mojo’s ecosystem using AWS Lambda and DynamoDB."
                    ]
                }
            ]
        },
        {
            "company": "Jio",
            "duration": "Jun 2021 - Jan 2022",
            "data": [
                {
                    "designation": "Lead Engineer",
                    "desc": "Designed subscription management systems for bundled services.",
                    "points": [
                        "Designed a subscription engine for provisioning bundled services like Netflix, Hotstar, and Amazon Prime with new Jio connections.",
                        "Utilized NodeJS, Java microservices, RabbitMQ, and Oracle in the development of JioSubscriptionEngine FTTX."
                    ]
                }
            ]
        },
        {
            "company": "Target",
            "duration": "Jan 2017 - Jun 2021",
            "data": [
                {
                    "designation": "Back End Developer",
                    "desc": "Focused on database design and operational automation.",
                    "points": [
                        "Created an email-chaining graph database for Target-vendor settlements using Dgraph and Neo4j.",
                        "Developed chatbots for Target store operations and order queries using NodeJS and Botkit.ai.",
                        "Designed orchestration systems for patching Target servers using SpringBoot."
                    ]
                },
                {
                    "designation": "Frontend Developer",
                    "desc": "Improved personalization and user recommendations on Target.com.",
                    "points": [
                        "Built personalization and guest recommendation features for Target.com.",
                        "Developed reusable components for Target’s online platform using ReactJS and Redux."
                    ]
                }
            ]
        },
        {
            "company": "Tesco Bengaluru",
            "duration": "Jun 2014 - Dec 2016",
            "data": [
                {
                    "designation": "Back End Developer",
                    "desc": "Enhanced inventory and KPI tools for Tesco store managers.",
                    "points": [
                        "Developed tools for Tesco store managers to manage inventory replenishment and access KPI data.",
                        "Utilized NodeJS, AWS, MongoDB, and JSON Web Tokens in the Store Empowerment project."
                    ]
                },
                {
                    "designation": "Mobile Application Developer",
                    "desc": "Developed customer-facing mobile apps and hybrid applications.",
                    "points": [
                        "Built Tesco’s iOS Grocery App and Digital Clubcard using Swift.",
                        "Created Tesco’s Store Locator app, enabling customers to find products using Angular and Ionic."
                    ]
                }
            ]
        },
        {
            "company": "CERN",
            "duration": "May 2013 - Jul 2013",
            "data": [
                {
                    "designation": "Summer Intern",
                    "desc": "Worked on physics data analysis methods and frameworks.",
                    "points": [
                        "Compared luminosity measurement methods (hf and et-sum).",
                        "Worked on ROOT, a physics data analysis framework based on Python."
                    ]
                }
            ]
        }
    ];
};
const getEd = () => {
    return [
        {
            "college": "National Institute of Technology Goa - Bachelor of Technology, Computer Science",
            "duration": "2010 - 2014",
            "points": [
                "Achieved a Grade of 9.14 CGPA.",
                "Recipient of the KK Sancheti Endowment Award for Excellent Academic Performance."
            ]
        },
        {
            "college": "Sir Padampat Singhania School - AISSCE, Information Practices",
            "duration": "2009 - 2010",
            "points": [
                "Achieved a Grade of 90.1%.",
                "Awarded the 0.1% Merit Certificate by CBSE for standing among the top 0.1% highest-scoring candidates in Information Practices across India."
            ]
        }
    ]
};

const Journey = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const workSteps = getWorkEx();
    const edSteps = getEd();

    const onMouseEnterHandler = (id) => (e) => {
        console.log("enter handler", id);
        setActiveStep(id);
    };
    const onMouseLeaveHandler = (id) => (e) => {
        console.log("leave handler", id);
        setActiveStep(0);
    };

    return (
        <div>
            <SubHeader>My Professional Journey</SubHeader>
            <Grid container className={classes.gridRoot}>
                <Grid item xs={12} className={classes.border}></Grid>
                <Grid item sm={7} xs={12} className={classes.profile_text}>
                    <Typography variant="h5" className={classes.border}>
                        Fast track global career
                    </Typography>
                    <Typography variant="h5" className={classes.border}>
                        Ex Engineer - Target Corporation
                    </Typography>
                    <Typography variant="h5" className={classes.border}>
                        Currently Lead Engineer at Tesco Technology
                    </Typography>
                    <Chip label="Accomplished at building and leading engineering teams"/>
                    <Chip label="Building products from scratch to a USD 10M+ P&L "/>
                    <Chip
                        label="E-commerce, Retail & FMCG domains, Across Asia, UK & Europe"
                    />
                </Grid>
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
                    <Contact displayInline/>
                </Grid>
            </Grid>

            <Grid container className={classes.gridRoot}>
                <Grid item xs={12} className={classes.border}>
                    <SubHeader>Work Experience</SubHeader>
                </Grid>
                <Grid item xs={12} className={classes.border}>
                    <Stepper orientation="vertical" className={classes.stepper}>
                        {workSteps.map((step, index) => (
                            <Step
                                key={step.company}
                                onMouseEnter={onMouseEnterHandler(step.comapany)}
                                onMouseLeave={onMouseLeaveHandler(step.comapany)}
                            >
                                <StepLabel active>
                                    <div className={classes.label}>
                                        <Typography variant="h6" color="primary">
                                            {step.company}
                                        </Typography>
                                        <Typography
                                            color="secondary"
                                            variant="caption"
                                            // style={{ marginRight: "15%",opacity:`${step.comapany === activeStep?1:0.8}` }}
                                        >
                                            {step.duration}
                                        </Typography>
                                    </div>
                                </StepLabel>
                                <StepContent active className={classes.stepContent}>
                                    {step.data.map((data, i) => (
                                        <Fragment key={data.designation}>
                                            <Typography
                                                variant="body1"
                                                display={"block"}
                                                className={
                                                    step.comapany === activeStep
                                                        ? classes.designationHover
                                                        : classes.designation
                                                }
                                            >
                                                {data.designation}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                display={"block"}
                                                className={classes.desc}
                                            >
                                                {data.desc}
                                            </Typography>
                                            <ul
                                                className={
                                                    step.comapany === activeStep
                                                        ? classes.ulHover
                                                        : classes.ul
                                                }
                                            >
                                                {data.points.map((point) => (
                                                    <li key={point} className={classes.li}>
                                                        <Typography variant="body2">{point}</Typography>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Fragment>
                                    ))}
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>
            <Grid container className={classes.gridRoot}>
                <Grid item xs={12} className={classes.border}>
                    <SubHeader>Education</SubHeader>
                </Grid>
                <Grid item xs={12} className={classes.border}>
                    <Stepper orientation="vertical" className={classes.stepper}>
                        {edSteps.map((step) => (
                            <Step
                                key={step.college}
                                onMouseEnter={onMouseEnterHandler(step.college)}
                                onMouseLeave={onMouseLeaveHandler(step.college)}
                            >
                                <StepLabel active>
                                    <div className={classes.label}>
                                        <Typography variant="h6" color="primary">
                                            {step.college}
                                        </Typography>
                                        <Typography
                                            color="secondary"
                                            variant="caption"
                                            style={{marginRight: "15%"}}
                                        >
                                            {step.duration}
                                        </Typography>
                                    </div>
                                </StepLabel>
                                <StepContent active className={classes.stepContent}>
                                    <Fragment>
                                        <ul
                                            className={
                                                step.college === activeStep
                                                    ? classes.ulHover
                                                    : classes.ul
                                            }
                                        >
                                            {step.points.map((point) => (
                                                <li className={classes.li} key={point}>
                                                    <Typography variant="body2">{point}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </Fragment>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Journey;
