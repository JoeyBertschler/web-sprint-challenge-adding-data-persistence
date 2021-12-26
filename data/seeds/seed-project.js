const projects = [
    {project_name: 'Building a tent', project_description: 'Build a tent for the winter', project_completed: false},
    {project_name: 'Building a house', project_description: 'Build a house for the winter'},
    {project_name: 'Building a building'}
  ]
  
  const resources = [
    {resource_name: 'Wood', resource_description: 'Wood for the tent'},
    {resource_name: 'Stones'},
    {resource_name: 'Builds'},
  ]
  
  const tasks = [
    {task_description: "There's a tree in the corner", project_id: 2}
  ]
  
  const project_resources = [
    {project_id: 1, resource_id: 1},
    {project_id: 2, resource_id: 2},
    {project_id: 3, resource_id: 3},
  ]

  exports.seed = function(knex, Promise) { // eslint-disable-line no-unused-vars
    return knex('projects').del()
        .then(function () {
            return knex('resources').del()
        })
        .then(function () {
            return knex('tasks').del()
        })
        .then(function () {
            return knex('project_resources').del()
        })
        .then(function () {
            return knex('projects').insert(projects)
        })
        .then(function () {
            return knex('resources').insert(resources)
        })
        .then(function () {
            return knex('tasks').insert(tasks)
        })
        .then(function () {
            return knex('project_resources').insert(project_resources)
        })
    }
    
  
//   exports.seed = async function(knex) {
//       await knex('projects').insert(projects)
//       await knex('resources').insert(resources)
//       await knex('tasks').insert(tasks)
//       await knex('project_resources').insert(project_resources)
//   }
