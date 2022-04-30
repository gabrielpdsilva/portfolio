import React from 'react'
import { Wrapper, Title, Subtitle, Link } from './StyleSheet'
import useContainer from './Container'

const View = () => {

    const { currentOrganization } = useContainer()
    const { link: organizationLink, name: organizationName } = currentOrganization

    return (
        <Wrapper id='home'>
            <Title>
                Hello there! I'm Gabriel.<br/>
            </Title>
            <Subtitle>
                I'm currently working as a Front-End Developer at <Link href={organizationLink} target="_blank">{organizationName}</Link>.<br/>
                Let me show you my skills and works!
            </Subtitle>
        </Wrapper>
    )
}

export default View
