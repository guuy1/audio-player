import drums from '../audioclips/DRUMS.mp3'
import bvoc from '../audioclips/B VOC.mp3'
import hehevoc from '../audioclips/HE HE VOC.mp3'
import tamb from '../audioclips/_tambourine_shake_higher.mp3'
import highvoc from '../audioclips/HIGH VOC.mp3'
import jibrish from '../audioclips/JIBRISH.mp3'
import lead1 from '../audioclips/LEAD 1.mp3'
import uuho from '../audioclips/UUHO VOC.mp3'

const audios = () => {
    return [
        {
            audio: drums,
            lable: 'Drums',
            isOnMute: false,
            color: 'cadetblue'
        },
        {
            audio: bvoc,
            lable: 'B VOC',
            isOnMute: false,
            color: 'crimson'
        },
        {
            audio: hehevoc,
            lable: 'He He VOC',
            isOnMute: false,
            color: 'chartreuse'
        },
        {
            audio: tamb,
            lable: 'Tamb',
            isOnMute: false,
            color: 'darkgoldenrod'
        },
        {
            audio: highvoc,
            lable: 'High VOC',
            isOnMute: false,
            color: 'darkorchid'
        },
        {
            audio: jibrish,
            lable: 'Jibrish',
            isOnMute: false,
            color: 'greenyellow'
        },
        {
            audio: lead1,
            lable: 'Lead 1',
            isOnMute: false,
            color: 'indianred'
        },
        {
            audio: uuho,
            lable: 'Uuho',
            isOnMute: false,
            color: 'lightsteelblue'
        }
    ]
}

export default audios;