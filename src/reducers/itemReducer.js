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

    default:
      return {
        ...state
      }
  }

}
