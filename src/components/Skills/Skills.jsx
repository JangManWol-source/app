import React from 'react'
import classes from './Skills.module.css'
import SkillsItem from './SkillsItem'
const Skills = (props) => {
    const web = ([{
        id: Math.random().toString(),
        title: 'React.JS',
        value: '75%'
    },
    {
        id: Math.random().toString(),
        title: 'JavaScript',
        value: '75%'
    },
    {
        id: Math.random().toString(),
        title: 'HTML',
        value: '80%'
    },
    {
        id: Math.random().toString(),
        title: 'CSS',
        value: '75%'
    }])

    const graphics = ([
        {
            id: Math.random().toString(),
            title: 'Adobe Photoshop',
            value: '80%'
        },
        {
            id: Math.random().toString(),
            title: 'Adobe Illustrator',
            value: '80%'
        },
        {
            id: Math.random().toString(),
            title: 'Figma',
            value: '80%'
        },
        {
            id: Math.random().toString(),
            title: 'Adobe XD',
            value: '80%'
        },
    ])

    const android = ([
        {
            id: Math.random().toString(),
            title: 'Android Studio',
            value: '85%'
        },
        {
            id: Math.random().toString(),
            title: 'Firebase Database',
            value: '80%'
        },
        {
            id: Math.random().toString(),
            title: 'Kotlin',
            value: '80%'
        },
        {
            id: Math.random().toString(),
            title: 'Java',
            value: '75%'
        },
    ])
    return (
        <div className={classes.skills}>
            <SkillsItem items={web} graphicData={graphics} androidData={android} />
        </div>
    )
}

export default Skills