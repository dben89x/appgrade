import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { selectProject } from '../actions/index'

class Projects extends Component {
  // constructor() {}

  createProjectList() {
    return this.props.projects.map((project)=> (
      <li key={project.id} onClick={()=> this.props.selectProject(project)}>
        {project.foo}
      </li>
    ))
  }
  render() {
    return (<ul>
      {this.createProjectList()}
    </ul>)
  }

}

const mapStateToProps =(state)=> {
  return {
    projects: state.projects
  }
}

const matchDispatchToProps =(dispatch)=> {
  return bindActionCreators({selectProject}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Projects)
