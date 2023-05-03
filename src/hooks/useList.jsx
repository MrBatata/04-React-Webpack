import { useState } from 'react';

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  // Push new value to list
  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  // Remove value to list
  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  // List is Empty ? boolean
  const isEmpty = () => value.length === 0;

  return {
    value, setValue, push, remove, isEmpty,
  };
};

export default useList;
