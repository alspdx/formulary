import React from 'react';
import DetailsLink from './DetailsLink';
import PropTypes from 'prop-types';

const DetailsList = ({ listType, listItems }) => {
return (
    <div>
      <h1>{listType}:</h1>
      {Object.keys(listItems).map(itemKey => {
        console.log(itemKey, listItems[itemKey]);
        return <DetailsLink detailType={listType} item={listItems[itemKey]} />;
      })}
    </div>
  )
};

DetailsList.propTypes = {
  listItems: PropTypes.object,
  listType: PropTypes.string
};

export default DetailsList;
