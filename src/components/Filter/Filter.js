import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import FilterStyled from './FilterStyled';

const Filter = ({ value, onChange }) => {
  const filterId = v4();
  return (
    <FilterStyled>
      <label className="label" htmlFor={filterId}>
        Find contacts by name
      </label>
      <input type="text" value={value} onChange={onChange} id={filterId} />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { filter } }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
