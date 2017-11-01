import React from 'react';

const Option = (props) => (
  <li>
    { props.optionText }
    <button onClick={ (e) => props.handleDeleteOption(props.optionText) }>remove</button>
  </li>
);

export default Option;