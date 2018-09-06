import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ModuleActionList from './ModuleActionList';

const ModuleListRow = ({module}) => {
  return (
    <tr>
      <td>TODO</td>
      <td>{module.displayName}</td>
      <td>{module.description}</td>
      <td>TODO</td>
      <td>{module.pages.join(",")}</td>
      <td>TODO</td>
      <td><ModuleActionList /></td>
    </tr>
  );
};

ModuleListRow.propTypes = {
  module: PropTypes.object.isRequired
};

export default ModuleListRow;
