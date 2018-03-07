import React from 'react';
import PropTypes from 'prop-types';
import FormButton from './FormButton';

const DetailsLink = ({ itemType, item }) => {
  return (
    <div>
      {itemType === 'Clients' ? (
        <FormButton
          buttonText={`${item.firstName} ${item.lastName}`}
          buttonPath='/clientdetails'
        />
      ) : (
        <h1>No</h1>
      )
      }
    </div>
  );
};

DetailsLink.propTypes = {
  itemType: PropTypes.string,
  item: PropTypes.object
};

export default DetailsLink;
