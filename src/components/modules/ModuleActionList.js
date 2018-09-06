import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ModuleActionList = () => {
  return (
    <div>
      <a href="#">Edit Module</a> /&nbsp;
      <a href="#">Delete Module</a> /&nbsp;
      <a href="#">View Pages</a> /&nbsp;
      <a href="#">View Test Reports</a> /&nbsp;
      <a href="#">Download Test Plan</a>
    </div>
  );
};

ModuleActionList.propTypes = {};

export default ModuleActionList;
