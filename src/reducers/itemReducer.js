import ItemAdapter from '../adapters/ItemAdapter';

const initialState = {
  pending: [],
  purchased: [],
  categories: []
}

export default (state=initialState,action) => {

  switch (action.type) {

    case 'SET_DATA':
      return {
        ...state,
        ...action.data
      }

    case 'ADD_ITEM':
      debugger;
      if(action.item.trim() !== ""){
        const items = ItemAdapter.addNewItem(state.pending,{ title: action.item })
        return {
          ...state,
          pending: items
        }
      }
      return state

    case 'ADD_CATEGORY':
      if(action.item.trim() !== ""){
        const categoryObj = {
          key: action.item.toLowerCase(),
          value: action.item,
          text: action.item
        }
        const categories = [...state.categories,categoryObj]

        return {
          ...state,
          categories
        }
      }
      return state

    default:
      return {
        ...state
      }
  }

}
