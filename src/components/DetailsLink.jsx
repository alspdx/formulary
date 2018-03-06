import React from 'react';
import PropTypes from 'prop-types';



const DetailsLink = ({ detailType, item }) => {
  return (
    <div>
      {detailType === 'Clients' ? (
        <h1>{item.firstName} {item.lastName}</h1>
      ) : (
        <h1>No</h1>
      )
      }
    </div>
  )
};

DetailsLink.propTypes = {
  detailType: PropTypes.string,
  item: PropTypes.object
}

export default DetailsLink;
