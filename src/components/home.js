import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Section1 from "./Section1"
import Section2 from "./Section2"

function home() {
  return (
    <><Container>
      <Section
        title="model-x"
        description="Order Online for Touchless Delievery"
        backgroundImg="modelk.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory" />
    </Container><Container>
        <Section1
          title="model-y"
          description="Order Online for Touchless Delievery"
          backgroundImg="modely.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory" />
      </Container><Container>
        <Section2
          title="model-s"
          description="Order Online for Touchless Delievery"
          backgroundImg="modelx.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory" />
      </Container></>
  )
}

export default home
const Container =styled.div`
height=500vh;`
