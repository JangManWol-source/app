import React from 'react'
import Card from '../../UI/Card/Card'
import CircleBar from './CircleBar'
import classes from './SkillsItem.module.css'

const SkillsItem = (props) => {
  return (
    <React.Fragment>
        <div className={classes.header}>Web Development</div>
        <div className={classes.item_holder}>{props.items.map((each) => 
        <Card className={classes.card} key={each.id}>
           <div className={classes.items}>
           <div>
            {each.title}
            </div>
            <div>
                <CircleBar value={each.value} />
            </div>
           </div>
        </Card>
    )}</div>

<div className={classes.header}>Graphics Design</div>
        <div className={classes.item_holder}>{props.graphicData.map((each) => 
        <Card className={classes.card} key={each.id}>
           <div className={classes.items}>
           <div>
            {each.title}
            </div>
            <div>
                <CircleBar value={each.value}/>
            </div>
           </div>
        </Card>
    )}</div>
    <div className={classes.header}>Android App Development</div>
        <div className={classes.item_holder}>{props.androidData.map((each) => 
        <Card className={classes.card} key={each.id}>
           <div className={classes.items}>
           <div>
            {each.title}
            </div>
            <div className={classes.circle_bar}>
            <CircleBar value={each.value}>
            </CircleBar>
            </div>
           </div>
        </Card>
    )}</div>
    </React.Fragment>
  )
}

export default SkillsItem