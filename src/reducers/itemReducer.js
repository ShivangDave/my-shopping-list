import ItemAdapter from '../adapters/ItemAdapter';

const initialState = {
  pending: [],
  purchased: [],
  categories: [],
  searchTerm: ''
}

const itemReducer = (state=initialState,action) => {

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

    case 'BUY_ITEM':
      let pending = ItemAdapter.removeItem(state.pending,action.item)
      let purchased = ItemAdapter.addNewItem(state.purchased,action.item)

      return {
        ...state,
        pending,
        purchased
      }

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

    case 'RELIST_ITEM':
      const updatedPendingItems = ItemAdapter.addNewItem(state.pending,action.item)
      const updatedPurchasedItems = ItemAdapter.removeItem(state.purchased,action.item)

      return {
        ...state,
        pending: updatedPendingItems,
        purchased: updatedPurchasedItems
      }

    case 'UPDATE_ITEM':
      const pendingList = ItemAdapter.updateItem(state.pending,action.item)

      return {
        ...state,
        pending: pendingList
      }

    case 'SEARCH_ITEM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }

    default:
      return {
        ...state
      }
  }

}

export default itemReducer;
