import {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6
} from './embedCodes'
import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import styles, { fontFaces } from './styles'

const getForProp = question => {
  switch (question) {
    case 1:
      return question1
    case 2:
      return question2
    case 3:
      return question3
    case 4:
      return question4
    case 5:
      return question5
    case 6:
      return question6
    default:
      return null
  }
}

const getQuestion = question => {
  return (
    (getForProp(question) &&
      getForProp(question).question) ||
    `Invalid question property ${question}`
  )
}

export default class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      consentGiven: false,
      isButtonHighlighted: false
    }

    this.off = () =>
      this.setState({
        isButtonHighlighted: false
      })

    this.debouncedOff = debounce(this.off, 800)

    this.on = () => {
      this.setState({ isButtonHighlighted: true })
    }

    this.embed = null

    this.onWindowMessage = evt => {
      if (!this.embed) {
        return
      }
      const embed = this.embed
      const currentScrollTop = 0
      const newScrollTop = 0
      const additionalSafeSpace = 50
      if (
        evt.origin ===
        'https://app.mycountrytalks.org'
      ) {
        if ('wasResized' in embed.dataset) {
          currentScrollTop =
            document.documentElement.scrollTop ||
            document.body.scrollTop
          newScrollTop =
            currentScrollTop +
            embed.getBoundingClientRect().top -
            additionalSafeSpace
          window.scrollTo(0, newScrollTop)
        }
        embed.style.height = evt.data + 'px'
        embed.setAttribute(
          'data-was-resized',
          'true'
        )
      }
    }
  }

  componentWillUnmount() {
    this.debouncedOff.cancel()
    window.removeEventListener(
      'message',
      this.onWindowMessage
    )
  }

  componentDidUpdate() {
    if (this.embed) {
      window.addEventListener(
        'message',
        this.onWindowMessage,
        false
      )
    }
  }

  render() {
    const consentGiven = this.state.consentGiven
    const question = this.props.question
    return consentGiven ? (
      <iframe
        {...styles.iframe}
        ref={node => {
          this.embed = node
        }}
        src={
          getForProp(question) ||
          getForProp(question).url
        }
      />
    ) : (
      <div {...styles.embed}>
        <style
          dangerouslySetInnerHTML={{
            __html: fontFaces
          }}
        />
        <div
          {...styles.embedInner}
          {...styles.textColor}
          {...styles.borderColor}
        >
          <div {...styles.eventLogo}>
            <div
              {...styles.eventLogoInner}
              {...styles.backgroundColor}
            >
              <svg
                {...styles.eventLogoSvg}
                viewBox="0 0 1288 1258"
              >
                <g fillRule="evenodd">
                  <ellipse
                    cx="576.09"
                    cy="571.358"
                    rx="576.09"
                    ry="571.358"
                    {...styles.eventLogoBackgroundFill}
                  />
                  <path
                    {...styles.eventLogoOutlineFill}
                    d="M678.795 716.162v130.776c0 104.964 86.471 190.261 193.362 190.261h31.858l14.43 153.147-69.692 6.566-8.632-91.62c-130.257-15.617-231.326-125.246-231.326-258.354v-60.776H494.199L691.646 60.807l67.542 18.386-173.387 636.97h92.994z"
                    fillRule="nonzero"
                  />
                  <path
                    {...styles.eventLogoOutlineFill}
                    d="M964.56 511.768c0 34.106-27.886 61.769-62.283 61.769-34.398 0-62.277-27.663-62.277-61.769C840 477.656 867.88 450 902.277 450c34.397 0 62.283 27.656 62.283 61.768M414.56 511.768c0 34.106-27.886 61.769-62.283 61.769-34.398 0-62.277-27.663-62.277-61.769C290 477.656 317.88 450 352.277 450c34.397 0 62.283 27.656 62.283 61.768"
                  />
                  <path
                    {...styles.eventLogoOutlineFill}
                    d="M676.09 1187.716c297.582 0 541.09-241.507 541.09-536.354C1217.18 356.508 973.673 115 676.09 115S135 356.508 135 651.362c0 294.847 243.508 536.354 541.09 536.354zm0 70C339.977 1257.716 65 984.999 65 651.362 65 317.718 339.976 45 676.09 45c336.114 0 611.09 272.718 611.09 606.362 0 333.637-274.977 606.354-611.09 606.354z"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            </div>
          </div>
          <form>
            <div {...styles.embedSection}>
              <div>
                <p {...styles.questionTextLarger}>
                  {getQuestion(question)}
                </p>
                <div {...styles.questionRadios}>
                  <label
                    onClick={() => {
                      this.on()
                      this.debouncedOff()
                    }}
                    onMouseEnter={this.on}
                    onMouseLeave={this.off}
                  >
                    Ja
                  </label>
                  <label
                    onClick={() => {
                      this.on()
                      this.debouncedOff()
                    }}
                    onMouseEnter={this.on}
                    onMouseLeave={this.off}
                  >
                    Nein
                  </label>
                </div>
              </div>
            </div>
            <p>
              <button
                {...styles.submitButton}
                className={
                  this.state.isButtonHighlighted
                    ? 'highlight'
                    : ''
                }
                type="submit"
                onClick={e => {
                  e.preventDefault()
                  this.setState({
                    consentGiven: true
                  })
                }}
              >
                Jetzt antworten
              </button>
            </p>
            <div
              {...styles.embedTerms}
              {...styles.subtleText}
            >
              <a
                {...styles.a}
                href="/dieschweizspricht"
              >
                «Die Schweiz spricht»
              </a>{' '}
              wird von ZEIT Online betrieben.{' '}
              <a
                {...styles.a}
                target="_blank"
                href="https://www.mycountrytalks.org/die-schweiz-spricht"
              >
                Datenschutzerklärung
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    )
  }
}
