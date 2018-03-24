import { combineReducers } from 'redux';
import ProjectsReducer from './reducer-projects';

const appReducer = combineReducers({
  projects: ProjectsReducer
})

export default appReducer
