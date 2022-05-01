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
            <SkillChart title={skills.title} skills={skills.data}/>
        </section>
    )
}

export default View
