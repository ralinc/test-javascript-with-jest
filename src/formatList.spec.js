import formatList from './formatList'

test('formats a list', () => {
  const formattedList = formatList(
    'List foo:',
    [
      {name: 'bar'},
      {name: 'baz'},
    ],
    'name'
  )

  // console.log(formattedList);

  expect(formattedList).toMatchSnapshot()
})
