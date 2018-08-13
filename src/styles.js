import { css } from 'glamor'

export default {
  a: css({
    color: '#000',
    '&:hover': {textDecoration: 'none'},
    '&:active': {textDecoration: 'none'}
  }),
  embed: css({
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
    marginLeft: 'auto',
    marginBottom: '1em',
    marginRight: 'auto',
    maxWidth: '600px',
    fontWeight: 700
  }),
  submitButton: css({
    fontSize: '18px',
    lineHeight: '27px',
    padding: '.7em 2.5em',
    color: '#fff',
    background: '#565661',
    transition: 'all .1s ease-in-out',
    border: 'none',
    borderRadius: '3px',
    fontWeight: 700,
    cursor: 'pointer',
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
      background: '#77777c'
    }
  }),
  textColor: css({
    color: '#000000 !important'
  }),
  borderColor: css({
    borderColor: 'rgba(0, 0, 0, 0.15) !important'
  }),
  subtleText: css({
    color: 'rgba(0, 0, 0, 0.5) !important',
    fontFamily: 'Noto Sans, sans-serif'
  }),
  accentColor: css({
    color: '#ffffff !important'
  }),
  labelColor: css({
    backgroundColor: '#dde1e4 !important',
    color: '#292929 !important'
  }),
  buttonBackgroundColor: css({
    color: '#ffffff !important'
  }),
  buttonColor: css({
    backgroundColor: '#000000 !important',
    color: '#ffffff !important',
    '&:hover': {
      backgroundColor: 'black !important'
    }
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

/*
.override-text-color {

  .override-border-color, hr {
    border-color: rgba(0, 0, 0, 0.15) !important; }

  .override-subtle-text, .override-subtle-text a {
    color: rgba(0, 0, 0, 0.5) !important; }

  .override-accent-color {
    border-bottom: #ffffff !important; }

  .override-label-color {
    background-color: #dde1e4 !important;
    color: #292929 !important; }

  .override-button-background-color {
    background-color: #ffffff !important; }

  .override-button-color {
    background-color: #000000 !important;
    color: #ffffff !important; }
    .override-button-color:hover {
      background-color: black !important; }

  .question__radios input[type="radio"]:checked + label,
  .question__radios input[type="radio"]:focus + label {
    background-color: black !important; }

  .override-button-text-color {
    color: #ffffff !important; }

  .override-border-bottom, .override-border-bottom:focus {
    border-bottom-color: #000000; }

  .override-field-text-color {
    color: #ffffff; }

  .override-field-border {
    border-bottom-color: #ffffff; }

  .override-background-color, .override-body-color {
    background-color: #ffffff !important; }

  input,
  button,
  textarea,
  select,
  .override-type,
  .override-type * {
    font-family: Noto Serif, serif; }

  .override-type-reverse,
  .override-type-reverse *,
  .text-box p:first-of-type,
  .text-box p:first-of-type * {
    font-family: Noto Sans, sans-serif; }

  .override-svg-fill {
    fill: #000000 !important; }

  .override-logo-background-fill {
    fill: #dde1e4 !important; }

  .override-logo-outline-stroke {
    stroke: #292929 !important; }

  .override-logo-outline-fill {
    fill: #292929 !important; }

  a {
    color: #000000; } */
