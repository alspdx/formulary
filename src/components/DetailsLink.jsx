import React from 'react';
import PropTypes from 'prop-types';
import FormButton from './FormButton';
import { connect } from 'react-redux';
import { setSelectedClientId } from './../actions/simple';
import { Link } from 'react-router-dom';

const DetailsLink = ({ itemType, item, itemKey, dispatch }) => {
  const handleButtonClick = () => {
    dispatch(setSelectedClientId(itemKey));
  };

  return (
    <div>
      {itemType === 'Clients' &&
        <Link to='/clientdetails'>
          <FormButton
            buttonText={`${item.firstName} ${item.lastName}`}
            onButtonClick={handleButtonClick}
          />
        </Link>
      }
      {itemType === 'Services' &&
        <Link to='/'>
          <FormButton
            buttonText={item.type}
          />
        </Link>
      }
    </div>
  );
};

DetailsLink.propTypes = {
  itemType: PropTypes.string,
  item: PropTypes.object,
  itemKey: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect()(DetailsLink);
