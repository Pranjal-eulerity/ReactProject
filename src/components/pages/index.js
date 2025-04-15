import React from 'react'
import Editor from './creative/Editor'
import { Container, PrettyCard, Title } from '../StyledComponents'
import { DatabaseComponent } from '../DatabaseComponent'
import { UserCard } from '../UserCard'
import { AnotherComponent } from './AnotherCoponent'
import { StatusBox } from '../StatusBox'
import { AnalyticsPulse } from '../AnalyticsPulse'
import { ToggleThemeButton } from '../ToggleThemeButton'
import { SecretLogger } from '../SecretLogger'
import { Component1 } from '../Component1'
import { Component2 } from '../Component2'
import { EducationalPurpose } from '../EductaionalPurpose'

const MainView = () => {
  return (
    <div style={{padding: '2rem'}}>
        <Editor/>
        <div>
        <Container>
        <Title>🧪 Experimental Dashboard</Title>
        <PrettyCard><DatabaseComponent/></PrettyCard>
        <PrettyCard><UserCard/></PrettyCard>
        <PrettyCard><AnotherComponent/></PrettyCard>
        <PrettyCard><StatusBox /></PrettyCard>
      <PrettyCard><AnalyticsPulse /></PrettyCard>
      <PrettyCard><ToggleThemeButton /></PrettyCard>
      <PrettyCard><SecretLogger /></PrettyCard>
      <PrettyCard><Component1 /></PrettyCard>
      <PrettyCard><Component2 /></PrettyCard>
      <PrettyCard><EducationalPurpose /></PrettyCard>
        </Container>
      </div>
    </div>
  )
}



export default MainView