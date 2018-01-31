import React from 'react'
import PropTypes from 'prop-types'

import CardLogo from './Logo.svg'

const Card = ({ id, cardholder, text, colour }) => (
  <div className="card" style={{ backgroundColor: colour }}>
    <div className="card-logo">
      <CardLogo />
    </div>
    <div className="card-text">{ text }</div>
    <div className="card-info">
      <div className="card-info__element card-info__element--cardholder">
        <div className="card-info__element-title">Cardholder</div>
        <div>{ cardholder }</div>
      </div>
      <div className="card-info__element">
        <div className="card-info__element-title">Expiry</div>
        <div>02/18</div>
      </div>
      <div className="card-info__element">
        <div className="card-info__element-title">Issue</div>
        <div>{ id }</div>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cardholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
}

export default Card
