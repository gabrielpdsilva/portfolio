import React from 'react'
import { Section, SkillChart } from 'molecules'
import useContainer from './Container'

const View = () => {
    const { resumeData, skills } = useContainer()
    return (
        <section id='resume'>
            {resumeData.map((data, index) =>
                <Section key={index} title={data.title} data={data.data}/>
            )}
            {skills.map((skill, index) =>
                <SkillChart key={index} skill={skill}/>
            )}
        </section>
    )
}

export default View
