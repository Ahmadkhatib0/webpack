import _ from 'lodash'

function updateHeader() {
  const el = document.getElementById('header')
  const listEl = document.getElementById('shopping-list')
  const shoppingItems = ['Apple', 'orange', 'banana']

  _.forEach(shoppingItems, function (item) {
    const element = document.createElement('li')
    element.innerHTML = item
    listEl.appendChild(element)
  })
  el.innerHTML = 'this is updated version'
}
