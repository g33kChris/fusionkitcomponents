/*import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styleable from 'react-styleable';
import moment from 'moment';

let CircuitDisplay = ({date, css, label}) => {

  let parsedDate = moment(date);

  return (
    <div className={css.row}>
      



      
          
          
          
          
          
          
          
        </div>
        
      </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

CircuitDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(CircuitDisplay)

export default CircuitDisplay;*/

import React, { PropTypes } from 'react';
import styles from './TimeCircuits.css';

// import timeCircuitsGreen from './TimeCircuitsGreen.css';
// import timeCircuitsRed from './TimeCircuitsRed.css';
// import timeCircuitsYellow from './TimeCircuitsYellow.css';
// import CircuitDisplay from '../CircuitDisplay/CircuitDisplay';

{/*<p>{date.toString()} {label}</p>*/}

const RowLabels = () => (
    <div>
        <span className={styles.monthLabel}>MONTH</span>
        <span className={styles.dayLabel}>DAY</span>
        <span className={styles.yearLabel}>YEAR</span>
        <span className={styles.hourLabel}>HOUR</span>
        <span className={styles.minLabel}>MIN</span>
    </div>
);

const CircuitDisplay = ({ date, label }) => (
    <div className={styles.row}>
        <RowLabels />
        <div>
            <div className={styles.destinationMonth}>    
                <div className={styles.monthFadedEights}>888</div>
                NOV
            </div>
            <div className={styles.destinationDay}>
                <div className={styles.dayFadedEights}>88</div>
                12
            </div>
            <div className={styles.destinationYear}>
                <div className={styles.yearFadedEights}>8888</div>
                1955
            </div>
            <div className={styles.consoleAmPm}>
                &nbsp;
                <div className={styles.amLabel}>AM</div>
                <div className={styles.amLightOn}>&nbsp;</div>
                <div className={styles.pmLabel}>PM</div>
                <div className={styles.pmLightOff}>&nbsp;</div>
            </div>
            <div className={styles.destinationHour}>
                <div className={styles.hourFadedEights}>88</div>
                22
            </div>
            <div className={styles.consoleColonLights}>
                &nbsp;
                <div className={styles.indicatorLightTop}>&nbsp;</div>
                <div className={styles.indicatorLightBottom}>&nbsp;</div>
            </div>
            <div className={styles.destinationMin}>
                <div className={styles.minFadedEights}>88</div>
                31
            </div>
        </div>
        <div className={styles.footerLabel}>{ label }</div>
    </div>
);

const TimeCircuits = ({ whereYoureGoing, whereYouAre, whereYouWere }) => (
    <div className={styles.root}>
        { whereYoureGoing && <CircuitDisplay date={whereYoureGoing.date} label={whereYoureGoing.label} /> }
        { whereYouAre && <CircuitDisplay date={whereYouAre.date} label={whereYouAre.label} /> }
        { whereYouWere && <CircuitDisplay date={whereYouWere.date} label={whereYouWere.label} />}
    </div>
);

// const mapStateToProps = (state) => {
//   return {
//     state: state,
//     whereYoureGoing: state.stc.present.timeCircuits.destinationTime,
//     whereYouAre: state.stc.present.newsPaper.date,
//     whereYouWere: state.stc.past && state.stc.past.length > 0 ? state.stc.past[state.stc.past.length - 1].newsPaper.date : new Date()
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {}
// }

// TimeCircuits = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TimeCircuits)

export default TimeCircuits;