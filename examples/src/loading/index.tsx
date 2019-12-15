import PropTypes from 'prop-types'
import React from 'react'
import Spinner from 'react-spinkit'
import { ReactSVG } from 'react-svg'

const Loading = ({ size }) => (
  <Spinner name="cube-grid" style={{ height: size, width: size }} />
)

Loading.propTypes = {
  size: PropTypes.number.isRequired
}

export default () => (
  <React.Fragment>
    <ReactSVG loading={() => <Loading size={40} />} src="svg.svg" />
    <ReactSVG
      fallback={() => <img alt="doge" src="doge.png" />}
      loading={() => <Loading size={60} />}
      src="notfound.svg"
    />
  </React.Fragment>
)
