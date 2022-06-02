import { useEffect, useState } from 'react';

export const Filter = ({ changeFilter }) => {
  const [filterValue, setFilterValue] = useState('');

  const onChangeFilter = evt => {
    setFilterValue(evt.currentTarget.value);
  };

  useEffect(() => {
    changeFilter(filterValue);
  }, [changeFilter, filterValue]);

  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" value={filterValue} onChange={onChangeFilter} />
      </label>
    </form>
  );
};
