import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterLabel, FilterWrapper, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        placeholder="Type name..."
        value={filter}
        onChange={event => {
          dispatch(changeFilter(event.target.value));
        }}
      />
    </FilterWrapper>
  );
};
