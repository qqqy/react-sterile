import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="ProjectItem">
        My ProjectItems
        {this.props.test}
      </li>
    );
  }
}

export default ProjectItem;
