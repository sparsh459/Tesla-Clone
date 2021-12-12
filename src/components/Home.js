import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                backgroundimage = "model-s.jpg"
                leftButton = "Custom Order"
                rightButton = "Existing Inventory"
            />
            <Section 
                title = "Model Y"
                description = "Order Online for Touchless Delivery"
                backgroundimage = "model-y.jpg"
                leftButton = "Custom Order"
                rightButton = "Existing Inventory"
            />
            <Section 
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                backgroundimage = "model-3.jpg"
                leftButton = "Custom Order"
                rightButton = "Existing Inventory"
            />
            <Section 
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                backgroundimage = "model-x.jpg"
                leftButton = "Custom Order"
                rightButton = "Existing Inventory"
            />
            <Section
                title = "Solar Panel"
                description = "Lowest Cost Solar Panels in America"
                backgroundimage = "solar-panel.jpg"
                leftButton = "Order Now"
                rightButton = "Learn More"
            />
            <Section 
                title = "Solar Roof"
                description = "Produces Clean Energy from your Roof"
                backgroundimage = "solar-roof.jpg"
                leftButton = "Order Now"
                rightButton = "Learn More"
            />
            <Section 
                title = "Accessories"
                description = ""
                backgroundimage = "accessories.jpg"
                leftButton = "Shop Now"
                rightButton = ""
            />
        </Container>
    )
}

export default Home


// styled allow us to style div inside js rather than doing it in css file
const  Container = styled.div`
    height: 100vh;
`