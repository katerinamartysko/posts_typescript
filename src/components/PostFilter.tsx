import React, { FC } from 'react';
import MySelect from './ui/select/MySelect';
import { Filter, KeyofPost } from '../api/types';

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const PostFilter: FC<Props> = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        className="myInp"
        value={filter.query || ''}
        onChange={(event) => setFilter({ ...filter, query: event.target.value as KeyofPost })}
        placeholder="Поиск..."
      />

      <MySelect
        value={filter.sort || ''}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort as KeyofPost })}
        defaultValue="Сортировка по:"
        options={[
          { id: '0.', value: 'title', name: 'По названию ' },
          { id: '1.', value: 'body', name: 'По описанию ' }
        ]}
      />
    </div>
  );
};

export default PostFilter;
