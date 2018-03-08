import React from 'react';
import DetailsLink from './DetailsLink';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors, variables } = constants;

const ListHeading = glamorous.h2({
  color: colors.primary,
  alignSelf: 'flex-start',
});

const ListContainer = glamorous.div({
  padding: variables.listPadding,
  color: colors.black,
  backgroundColor: colors.white,
  boxSizing: 'border-box',
  height: '100%',
  overflow: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const DetailsList = ({ listType, listItems }) => {
  return (
    <ListContainer>
      <ListHeading>{listType}:</ListHeading>
      {Object.keys(listItems).map(itemKey => {
        return <DetailsLink
          item={listItems[itemKey]}
          itemType={listType}
          key={itemKey}
          itemKey={itemKey}
        />;
      })}
    </ListContainer>
  );
};

DetailsList.propTypes = {
  listItems: PropTypes.object,
  listType: PropTypes.string
};

export default DetailsList;
