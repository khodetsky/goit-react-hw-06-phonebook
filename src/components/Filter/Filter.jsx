import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from "react-redux";
import { setFilterValue } from '../../redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <FilterLabel htmlFor='filter'>
                Find contacts by name
            </FilterLabel>
            <FilterInput id="filter" type="text" onChange={(e) => dispatch(setFilterValue(e.target.value.toLowerCase()))} />
        </div>
    )
}