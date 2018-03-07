import React from 'react';
import DetailsLink from './DetailsLink';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors, shadows, variables } = constants;

const ListHeading = glamorous.h2({
  color: colors.primary
});

const ListContainer = glamorous.div({
  padding: variables.cardPadding,
  color: colors.black,
  backgroundColor: colors.white,
  boxShadow: shadows.box1,
  boxSizing: 'border-box',
  maxHeight: '70%',
  overflow: 'scroll'
});

const DetailsList = ({ listType, listItems }) => {
  return (
    <ListContainer>
      <ListHeading>{listType}:</ListHeading>
      {Object.keys(listItems).map(itemKey => {
        return <DetailsLink key={itemKey} itemType={listType} item={listItems[itemKey]} />;
      })}
    </ListContainer>
  );
};

DetailsList.propTypes = {
  listItems: PropTypes.object,
  listType: PropTypes.string
};

export default DetailsList;
