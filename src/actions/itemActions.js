export const set_dummy_data = (data) => {
  return { type: 'SET_DATA', data }
}

export const add_item = (item) => {
  return { type: 'ADD_ITEM', item }
}

export const add_category = (item) => {
  return { type: 'ADD_CATEGORY', item }
}

export const buy_item = (item) => {
  return { type: 'BUY_ITEM', item }
}

export const relist_item = (item) => {
  return { type: 'RELIST_ITEM', item }
}

export const update_item = (item) => {
  return { type: 'UPDATE_ITEM', item }
}
