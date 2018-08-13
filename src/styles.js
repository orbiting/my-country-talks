import { css } from 'glamor'

export default {
  a: css({
    color: '#000',
    '&:hover': { textDecoration: 'none' },
    '&:active': { textDecoration: 'none' }
  }),
  embed: css({
    boxSizing: 'border-box',
    position: 'relative',
    margin: '1.5em auto 1.5em auto',
    textAlign: 'center',
    backgroundColor: '#fff',
    maxWidth: '460px',
    paddingTop: '20px',
    paddingBottom: '10px',
    '@media screen and (min-width:40.625em)': {
      maxWidth: '700px',
      paddingTop: '30px'
    },
    fontFamily: 'Noto Serif, serif'
  }),
  embedInner: css({
    position: 'relative',
    padding: '35px 16px',
    border: '1px solid',
    '@media screen and (min-width:40.625em)': {
      padding: '45px 25px'
    }
  }),
  embedSection: css({
    position: 'relative',
    opacity: 1
  }),
  embedTerms: css({
    fontSize: '14px',
    lineHeight: '21px',
    maxWidth: '460px',
    textAlign: 'left',
    margin: '50px auto 1em'
  }),
  questionTextLarger: css({
    fontSize: '18px',
    lineHeight: '27px',
    display: 'block',
    width: '100%',
    marginBottom: '1em',
    marginTop: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '600px',
    fontWeight: 700
  }),
  questionRadios: css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    paddingLeft: '45px',
    paddingRight: '45px',
    paddingBottom: '5px',
    overflow: 'hidden',
    '& label': {
      borderRadius: '3px',
      backgroundColor: '#000000 !important',
      color: '#ffffff !important',
      position: 'relative',
      userSelect: 'none',
      zIndex: 2,
      fontSize: '18px',
      lineHeight: '27px',
      width: 'calc(50% - 8px)',
      padding: '.7em .9em',
      cursor: 'default',
      transition: 'all .1s ease-in-out',
      opacity: 0.25,
      transform: 'scale(1)'
    }
  }),
  submitButton: css({
    fontSize: '18px',
    lineHeight: '27px',
    padding: '.7em 2.5em',
    color: '#fff',
    background: '#3CAD00',
    transition: 'all .1s ease-in-out',
    border: 'none',
    borderRadius: '3px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'Noto Serif, serif',
    transform: 'scale(1)',
    textDecoration: 'none',
    '&:focus': {
      outline: 'none'
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'default'
    },
    '&:hover': {
      color: '#fff',
      background: '#4B6359'
    }
  }),
  textColor: css({
    color: '#000000 !important'
  }),
  borderColor: css({
    borderColor: 'rgba(0, 0, 0, 0.15) !important'
  }),
  subtleText: css({
    color: 'rgba(0, 0, 0, 0.5) !important'
  }),
  eventLogo: css({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    textAlign: 'center',
    marginTop: '-19px'
  }),
  eventLogoOutlineFill: css({
    stroke: '#292929 !important'
  }),
  eventLogoBackgroundFill: css({
    fill: '#dde1e4 !important'
  }),
  eventLogoSvg: css({
    display: 'block'
  }),
  eventLogoInner: css({
    display: 'inline-block',
    backgroundColor: '#fff',
    paddingLeft: '.25em',
    paddingRight: '.25em',
    width: '45px',
    height: '41.44px'
  })
}
