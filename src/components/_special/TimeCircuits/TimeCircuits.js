import React, { PropTypes } from 'react';
import styles from './TimeCircuits.css';

const RowLabels = () => (
    <div className={styles.labels}>
        <span className={styles.monthLabel}>MONTH</span>
        
        
        
        
    </div>
);

{/*<RowLabels />*/}

const CircuitDisplay = ({ date, label, customStyles }) => {

    const mergedStyles = Object.assign({}, styles, customStyles);

    return (
        <div className={mergedStyles.row}>
            
            <div className={styles.digits}>
                <div className={styles.month}>
                    <span className={styles.monthLabel}>MONTH</span>
                    <div className={mergedStyles.monthDigit}>    
                        <div className={mergedStyles.monthFadedEights}>888</div>
                        NOV
                    </div>
                </div>
                <div className={styles.day}>
                    <span className={styles.dayLabel}>DAY</span>
                    <div className={mergedStyles.dayDigit}>
                        <div className={mergedStyles.dayFadedEights}>88</div>
                        12
                    </div>
                </div>
                <div className={styles.year}>
                    <span className={styles.yearLabel}>YEAR</span>
                    <div className={mergedStyles.yearDigit}>
                        <div className={mergedStyles.yearFadedEights}>8888</div>
                        1955
                    </div>
                </div>
                <div className={styles.amPm}>
                    <div className={mergedStyles.consoleAmPm}>
                        <div className={mergedStyles.amLabel}>AM</div>
                        <div className={mergedStyles.amLightOn}>&nbsp;</div>
                        <div className={mergedStyles.pmLabel}>PM</div>
                        <div className={mergedStyles.pmLightOff}>&nbsp;</div>
                    </div>
                </div>
                <div className={styles.hour}>
                    <span className={styles.hourLabel}>HOUR</span>
                    <div className={mergedStyles.hourDigit}>
                        <div className={mergedStyles.hourFadedEights}>88</div>
                        22
                    </div>
                </div>
                <div className={styles.colon}>
                    <div className={mergedStyles.consoleColonLights}>
                        &nbsp;
                        <div className={mergedStyles.indicatorLightTop}>&nbsp;</div>
                        <div className={mergedStyles.indicatorLightBottom}>&nbsp;</div>
                    </div>
                </div>
                <div className={styles.min}>
                    <span className={styles.minLabel}>MIN</span>
                    <div className={mergedStyles.minDigit}>
                        <div className={mergedStyles.minFadedEights}>88</div>
                        31
                    </div>
                </div>
            </div>
            <div className={mergedStyles.footerLabel}>{ label }</div>
        </div>
    );
};

const redStyles = {
    monthDigit: styles.destinationMonth,
    dayDigit: styles.destinationDay,
    yearDigit: styles.destinationYear,
    hourDigit: styles.destinationHour,
    minDigit: styles.destinationMin
};

const yellowStyles = {
    monthDigit: styles.presentMonth,
    dayDigit: styles.presentDay,
    yearDigit: styles.presentYear,
    hourDigit: styles.presentHour,
    minDigit: styles.presentMin
};

const greenStyles = {
    monthDigit: styles.pastMonth,
    dayDigit: styles.pastDay,
    yearDigit: styles.pastYear,
    hourDigit: styles.pastHour,
    minDigit: styles.pastMin
};


const TimeCircuits = ({ whereYoureGoing, whereYouAre, whereYouWere }) => (
    <div className={styles.root}>
        { whereYoureGoing && <CircuitDisplay date={whereYoureGoing.date} label={whereYoureGoing.label} customStyles={redStyles} /> }
        { whereYouAre && <CircuitDisplay date={whereYouAre.date} label={whereYouAre.label} customStyles={yellowStyles} /> }
        { whereYouWere && <CircuitDisplay date={whereYouWere.date} label={whereYouWere.label} customStyles={greenStyles} />}
    </div>
);

export default TimeCircuits;