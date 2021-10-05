import React from "react"
import {TextFormField} from "../../utils/TextFormField"
import { Box, Button, Paper, Typography, Grid } from "@material-ui/core";
import ContactSubComponent from "./ContactSubComponent"
import WhyInstantCard from "../../utils/WhyInstantCard";

const formObj = [
    {
        label: "First Name",
        form: {
            hiddenLabel: true,
            placeholder: "John",
            type: "text",
            name: "first_name",
            variant: "filled",
            multiline: false,
            data: [],
        }
    },
    {
        label: "Last Name",
        form: {
            hiddenLabel: true,
            placeholder: "Doe",
            type: "text",
            name: "last_name",
            variant: "filled",
            multiline: false,
            data: [],
        }
    },
    {
        label: "Work Email",
        form: {
            hiddenLabel: true,
            placeholder: "john.doe@example.com",
            type: "text",
            name: "email",
            variant: "filled",
            multiline: false,
            data: [],
        }
    },

    {
        label: "Work Phone",
        form: {
            hiddenLabel: true,
            placeholder: "+5(555)555-5555",
            type: "text",
            name: "phone_number",
            variant: "filled",
            multiline: false,
            data: [],
        }
    },
        {
            label: "Company Website",
            form: {
                hiddenLabel: true,
                placeholder: "instantcard.net",
                type: "text",
                name: "website",
                variant: "filled",
                multiline: false,
                data: [],
            }
        },
        {
            label: "Company Size",
            form: {

                label: "Select a range of employees",
                name: "employee_range",
                variant: "filled",
                select: true,
                multiline: false,
                data: [
                    {
                        value: "1-99",
                        label: "1-99",
                    },
                    {
                        value: "100-999",
                        label: "100-999",
                    },
                    {
                        value: "1000-4999",
                        label: "1000-4999",
                    },
                    {
                        value: "5000+",
                        label: "5000+",
                    },
                ],
            }
        },
        {        
        label: "Country",
        form: {
            label: "Choose Country",
            name: "country",
            variant: "filled",
            multiline: false,
            select: true,
            data: [
                // {
                //     value: "Choose Country",
                //     label: "Choose Country",
                //     disabled: true,
                //     selected: true,
                // },
                {
                    value: "United States",
                    label: "United States",
                },
                {
                    value: "Canada",
                    label: "Canada",
                },
                {
                    value: "Other",
                    label: "Other",
                },
            ],
        }
    },
    {
        label: "Card Amount",
        subLabel: "How many cards does your organization use?",
        form: {
                label: "Select amount",
                name: "employee_range",
                variant: "filled",
                multiline: false,
                select: true,
                data: [
                    // {
                    //     value: "Select amount",
                    //     label: "Select amount",
                    //     disabled: true,
                    //     selected: true,
                    // },
                    {
                        value: "None, just getting started",
                        label: "None, just getting started"
                    },
                    {
                        value: "1-99",
                        label: "1-99",
                    },
                    {
                        value: "100-999",
                        label: "100-999",
                    },
                    {
                        value: "1000-4999",
                        label: "1000-4999",
                    },
                    {
                        value: "5000+",
                        label: "5000+",
                    },
                ],
        }
    },
    {
        label: "Anything else?",
        subLabel: "Tell us more about your project, needs, and timeline.",
        form: {
            hiddenLabel: true,
            name: "employee_range",
            variant: "filled",
            multiline: true,
            rows: "3",
            data: [],
        }
    },
]
function ContactForm() {
    return(
        <>
        <Box style={{width: "70%", margin: "auto"}}>
            <Box style={{textAlign: "center", padding: "30px 0"}}>
                <Typography variant="h4" >
                    Contact Sales
                </Typography>
                <Typography variant="p">
                    Fill out the form below and our sales team will be in touch!
                </Typography>
            </Box>
            <Grid container>
                <Grid container item xs={12} sm={7} style={{display: "flex", justifyContent: "space-between", background: "#E9E9E9", borderRadius: "5px",   boxShadow: "2px 1px 7px #c9c9c9",padding: "2%"}}>
                    {formObj.map(data => {
                        return (
                            <Grid container item xs={12} style={{display: "flex", alignItems: "center", padding: "8px 0",}}>
                                <Grid item xs={12} sm={3} >
                                <p>
                                    {data.label}
                                </p>
                                <p style={{fontSize: "12px"}}>
                                    {data.subLabel}
                                </p>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextFormField
                                        hiddenLabel={data.form.hiddenLabel}
                                        label={data.form.label}
                                        type={data.form.type}
                                        name={data.form.name}
                                        select={data.form.select}
                                        data={data.form.data}
                                        sm={data.sm}
                                        inputLabel={data.form.inputLabel}
                                        multiline={data.form.multiline}
                                        variant={data.form.variant}
                                        rows={data.form.rows}
                                        InputLabelProps={{shrink: true}}
                                        style={{}}
                                        />
                                </Grid>
                            </Grid>
                        )})
                    }
                    <Grid item xs={12} style={{display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: "2%"}}>
                        <Button style={{background: "#474747", padding: "12px 30px", color: "white", fontWeight: "600", fontSize: "12px"}}>
                            Contact Sales
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} style={{margin: "auto", marginTop: "150px"}}>
                    <WhyInstantCard />
                </Grid>
            </Grid>
        </Box>
        {/* // render contactSubComponent which is Render */}
        <p style={{paddingTop:"3%"}}></p>
        <ContactSubComponent />
        <p style={{paddingBottom:"2%"}}></p>
        </>
    )
}

export default ContactForm