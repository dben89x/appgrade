export const selectProject=(project)=>{
  console.log(`You clicked project ${project.id}`)
  return {
    type: "PROJECT_SELECTED",
    payload: project
  }
}
