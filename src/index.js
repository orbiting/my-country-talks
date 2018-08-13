import { question1 } from './embedCodes'
import React, { Component } from 'react'
import styles from './styles'

const getEmbedCode = (question) => {
  switch (question) {
    case 'question1':
      return { __html: question1 }
    default:
      return { __html: `Invalid question parameter ${question}` }
  }
}

export default class Widget extends Component {
  constructor (props) {
    super(props)
    this.state = {
      consentGiven: false
    }
  }

  render () {
    const consentGiven = this.state.consentGiven
    const question = this.props.question
    return consentGiven
      ? <div dangerouslySetInnerHTML={getEmbedCode(question)} />
      : <div{...styles.embed}>
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Noto+Serif:400,400i,700,700i' rel='stylesheet' />
        <div {...styles.embedInner} {...styles.textColor} {...styles.borderColor}>
          <div {...styles.eventLogo}>
            <div {...styles.eventLogoInner} {...styles.backgroundColor}>
              <svg {...styles.eventLogoSvg} viewBox='0 0 1288 1258'><g fillRule='evenodd'><ellipse cx='576.09' cy='571.358' rx='576.09' ry='571.358' {...styles.eventLogoBackgroundFill} /><path {...styles.eventLogoOutlineFill} d='M678.795 716.162v130.776c0 104.964 86.471 190.261 193.362 190.261h31.858l14.43 153.147-69.692 6.566-8.632-91.62c-130.257-15.617-231.326-125.246-231.326-258.354v-60.776H494.199L691.646 60.807l67.542 18.386-173.387 636.97h92.994z' fillRule='nonzero' /><path {...styles.eventLogoOutlineFill} d='M964.56 511.768c0 34.106-27.886 61.769-62.283 61.769-34.398 0-62.277-27.663-62.277-61.769C840 477.656 867.88 450 902.277 450c34.397 0 62.283 27.656 62.283 61.768M414.56 511.768c0 34.106-27.886 61.769-62.283 61.769-34.398 0-62.277-27.663-62.277-61.769C290 477.656 317.88 450 352.277 450c34.397 0 62.283 27.656 62.283 61.768' /><path {...styles.eventLogoOutlineFill} d='M676.09 1187.716c297.582 0 541.09-241.507 541.09-536.354C1217.18 356.508 973.673 115 676.09 115S135 356.508 135 651.362c0 294.847 243.508 536.354 541.09 536.354zm0 70C339.977 1257.716 65 984.999 65 651.362 65 317.718 339.976 45 676.09 45c336.114 0 611.09 272.718 611.09 606.362 0 333.637-274.977 606.354-611.09 606.354z' fillRule='nonzero' /></g></svg>
            </div>
          </div>
          <form>
            <div {...styles.embedSection}>
              <p {...styles.questionTextLarger}>
              Soll die Schweiz mehr Flüchtlinge aufnehmen?
              </p>
            </div>
            <button {...styles.submitButton} type='submit' onClick={e => {
              e.preventDefault()
              this.setState({ consentGiven: true })
            }}>
            Dialog starten →
            </button>
            <div {...styles.embedTerms} {...styles.subtleText}>
              Der Dialog „Die Schweiz spricht“ wird von ZEIT Online betrieben. Die im Folgenden erhobenen Daten werden gemäss <a {...styles.a} target='_blank' href='https://www.mycountrytalks.org/die-schweiz-spricht'>dieser Datenschutzerklärung</a> verarbeitet.
            </div>
          </form>
        </div>
      </div>
  }
}
