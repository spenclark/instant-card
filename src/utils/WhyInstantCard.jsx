import React from "react"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const listContent = [
    {   
        icon: CheckCircleOutlineIcon,
        item: "Custom Card Designs"
    },
    {
        icon: CheckCircleOutlineIcon,
        item: "Same day shipping"
    },
    {
        icon: CheckCircleOutlineIcon,
        item: "Flexible Pricing and ordering"
    },
]
export default function WhyInstantCard() {
    return (
        <div>
            <p style={{fontWeight: "600", marginBottom: "10px"}}>With InstantCard you get</p>
            {listContent.map(e => {
                return (
                <div style={{margin: "10px 0", display: 'flex', alignItems: "center"}}>
                    <div style={{ marginRight: "6px"}}>
                    {<e.icon />}
                    </div>
                    <div>
                    {e.item}
                    </div>
                </div>
            )})

            }

        </div>
    )
}