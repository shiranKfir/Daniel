import icon1 from '../images/1.png';
import icon2 from '../images/2.png';
import icon3 from '../images/3.png';
import icon4 from '../images/4.png';
import icon5 from '../images/5.png';
import icon6 from '../images/6.png';
import icon7 from '../images/7.png';
import icon11 from '../images/11.png';
import icon12 from '../images/12.png';
import icon13 from '../images/13.png';
import icon14 from '../images/14.png';
import icon15 from '../images/15.png';
import icon16 from '../images/16.png';
import icon17 from '../images/17.png';
import icon18 from '../images/18.png';
import icon19 from '../images/19.png';
import icon20 from '../images/20.png';
import icon21 from '../images/21.png';
import icon22 from '../images/22.png';
import icon23 from '../images/23.png';
import icon24 from '../images/24.png';
import icon25 from '../images/25.png';
import icon26 from '../images/26.png';
import icon29 from '../images/29.png';
import icon30 from '../images/30.png';
import icon31 from '../images/31.png';
import icon32 from '../images/32.png';
import icon33 from '../images/33.png';
import icon34 from '../images/34.png';
import icon35 from '../images/35.png';
import icon36 from '../images/36.png';
import icon37 from '../images/37.png';
import icon38 from '../images/38.png';
import icon39 from '../images/39.png';
import icon40 from '../images/40.png';
import icon41 from '../images/41.png';
import icon42 from '../images/42.png';
import icon43 from '../images/43.png';
import icon44 from '../images/44.png';


export const getIconsMap = (): any => ({
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4,
    5: icon5,
    6: icon6,
    7: icon7,
    11: icon11,
    12: icon12,
    13: icon13,
    14: icon14,
    15: icon15,
    16: icon16,
    17: icon17,
    18: icon18,
    19: icon19,
    20: icon20,
    21: icon21,
    22: icon22,
    23: icon23,
    24: icon24,
    25: icon25,
    26: icon26,
    29: icon29,
    30: icon30,
    31: icon31,
    32: icon32,
    33: icon33,
    34: icon34,
    35: icon35,
    36: icon36,
    37: icon37,
    38: icon38,
    39: icon39,
    40: icon40,
    41: icon41,
    42: icon42,
    43: icon43,
    44: icon44,
});

export const getTextDay = (date: string): string => {
    const dateObj = new Date(date);
    const day = dateObj.getDay();
    const daysArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return daysArr[day];
}