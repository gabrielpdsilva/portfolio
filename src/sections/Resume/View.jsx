import React from 'react'
import { InfoBox } from 'components'
import useContainer from './Container'

const View = () => {
    const { workData, educationData } = useContainer()
    return (
        <section id='resume'>
            {workData.map((work, index) =>
                <InfoBox
                    key={index}
                    title={work.title}
                    subtitle={work.subtitle}
                    date={work.date}
                    description={work.description}
                />
            )}
            {educationData.map((education, index) =>
                <InfoBox
                    key={index}
                    title={education.title}
                    subtitle={education.subtitle}
                    date={education.date}
                    description={education.description}
                />
            )}
        </section>
    )
}

export default View
