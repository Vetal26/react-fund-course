/* eslint-disable react/prop-types */
import React from 'react';
import MyInput from './UI/input/MyInput.jsx';
import MySelect from './UI/select/MySelect.jsx';

const PostFilter = ({ filter, setFilter }) => (
  <div>
    <MyInput
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      placeholder="Search..."
    />
    <MySelect
      value={filter.sort}
      onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      defaultValue="Sort"
      options={[
        { value: 'title', name: 'Title' },
        { value: 'body', name: 'Description' },
      ]}
    />
  </div>
);

export default PostFilter;
