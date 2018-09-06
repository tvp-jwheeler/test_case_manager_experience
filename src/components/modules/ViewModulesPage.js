import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moduleActions from '../../actions/moduleActions';
import ModuleList from './ModuleList';
import {browserHistory} from 'react-router';

class ViewModulesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {modules} = this.props;

    //Using bind in render() impacts performance!
    return (
      <div>
        <h3 className="pageTitle">Modules</h3>
        <ModuleList modules={modules} />
      </div>
    );
  }
}

ViewModulesPage.propTypes = {
  modules: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    modules: state.modules
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moduleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewModulesPage);
