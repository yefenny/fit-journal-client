import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import './BodyCompositionItem.css';

class BodyCompositionItem extends Component {
  render() {
    const { id, date_created, weight, body_fat } = this.props.object;
    let d = new Date(date_created);
    const newDate = d ? format(d, 'MMMM do uuuu') : '';
    const url = `/body-composition/${id}`;
    return (
      <>
        <Link to={url}>
          <h3>{newDate}</h3>
        </Link>

        <div className='body-composition-card'>
          <p>
            <span className='key-name'>Weight:</span> {weight} lb.
          </p>
          <p>
            <span className='key-name'>Body fat:</span> {body_fat} %
          </p>
        </div>
      </>
    );
  }
}

BodyCompositionItem.propTypes = {
  object: PropTypes.object
};

export default withRouter(BodyCompositionItem);
