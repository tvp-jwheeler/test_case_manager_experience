import React, {PropTypes} from 'react';
import ModuleListRow from './ModuleListRow';

const ModuleList = ({modules}) => {
  return (
      <table className="table">
        <thead>
        <tr>
          <th>Status</th>
          <th>Name</th>
          <th>Description</th>
          <th>Tests</th>
          <th>Pages</th>
          <th>Last Tested</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {modules.map(module =>
          <ModuleListRow key={module['_id']} module={module}/>
        )}
        </tbody>
      </table>
  );
};

ModuleList.propTypes = {
  modules: PropTypes.array.isRequired
};

export default ModuleList;
