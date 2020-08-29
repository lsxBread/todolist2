"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.querySelector('section.addItem > button')
  const itemInput = document.querySelector('section.addItem > input')
  const ulTag = document.querySelector('section.itemList > ul')

  const createListItemWithInputValue = function (itemName) {
    // create li tag <Li>
    const liTag = document.createElement('li')
    // create span tag <span>
    const spanTag = document.createElement('span')
    // create delete button <button>
    const deleteButton = document.createElement('button')
    // put itemName inside span tag <span>xxx</span>
    spanTag.innerText = itemName
    // put delete text inside button
    deleteButton.innerText = "Delete"
    // insert span and button into li
    liTag.appendChild(spanTag)
    liTag.appendChild(deleteButton)
    // return li
    return liTag
  }

  const appendListItemIntoList = function (listItem) {
    ulTag.appendChild(listItem)
  } 

  const handleAddButtonClick = function () {
    // get intput value
    const inputValue = itemInput.value

    // use input value to generate li dom
    const listItem = createListItemWithInputValue(inputValue)

    // add the li item into ul tag
    appendListItemIntoList(listItem)
  }

  addButton.addEventListener('click', handleAddButtonClick)
})