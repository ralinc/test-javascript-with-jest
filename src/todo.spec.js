import {addTodo, findById, toggleTodo, updateTodo} from './todo'

test('adds todo', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).toEqual(expected)
})

test('does not mutate the todo list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)
})

test('finds a todo', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const expected = {id: 2, name: 'two', isComplete: false}

  const result = findById(2, startTodos)

  expect(result).toEqual(expected)
})

test('completes a todo', () => {
  // TODO: write a test
})

test('toggleTodo does not mutate the todo', () => {
  // TODO: write a test
})

test('updates a todo', () => {
  // TODO: write a test
})

test('updateTodo does not mutate the todo list', () => {
  // TODO: write a test
})

test('deletes a todo', () => {
  // TODO: write a test
})

test('deleteTodo does not mutate the todo list', () => {
  // TODO: write a test
})
