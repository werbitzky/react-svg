import { css } from 'glamor'
import React from 'react'
import { ReactSVG } from 'react-svg'

css.global('body', {
  alignItems: 'center',
  backgroundColor: 'gray',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  margin: 0
})

const styles = css({
  ' svg': {
    height: 200,
    width: 200
  },
  ' rect': {
    fill: 'aqua',
    height: 190,
    stroke: 'darkmagenta',
    width: 190
  }
})

export default () => <ReactSVG src="svg.svg" {...styles} />
