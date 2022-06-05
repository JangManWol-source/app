import React from 'react'
import Card from '../../UI/Card/Card'
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
            <div className={classes.img}>
                <img src={each.img} alt="" />
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
            <div className={classes.img}>
                <img src={each.img} alt="" />
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
            <div className={classes.img}>
                <img src={each.img} alt="" />
            </div>
           </div>
        </Card>
    )}</div>
    </React.Fragment>
  )
}

export default SkillsItem