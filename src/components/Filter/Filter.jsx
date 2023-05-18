import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { FilterForm, Input } from './Filter.styled';

export const Filter = ({ initialValues, onChange }) => {
  return (
    <Formik initialValues={initialValues}>
      <Form autoComplete="off">
        <FilterForm htmlFor="filter">
          Find contacts by name
          <Input
            name="filter"
            value={initialValues.filter}
            onChange={onChange}
          />
        </FilterForm>
      </Form>
    </Formik>
  );
};

Filter.propTypes = {
  initialValues: PropTypes.shape({ filter: PropTypes.string.isRequired }),
  onChange: PropTypes.func.isRequired,
};
