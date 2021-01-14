class ItemAdapter {

  static addNewItem = (list,attr) => {
    const newItem = new Item(attr)
    const items = [...list, newItem]
    return items
  }

  static removeItem = (list, item) => {
    const index = list.findIndex(i => i.title === item.title && i.price === item.price)
    const items = list.filter((_,i_index) => index !== i_index)
    return items
  }

  static updateItem = (list,item) => {
    const index = list.findIndex(i => i.title === item.title)
    const items = [...list]
    items[index] = item
    return items
  }

  static totalPrice = (list) => {
    return list.reduce((acc,val) => {
      const price = val.price ? parseInt(val.price) : 0
      return acc + (price * val.quantity)
    },0)
  }

  static groupItems = (items) => {
    // Groups items by category
    // credit goes to MDN and Stackoverflow
    return items.reduce((categoryObj, currentItem) => {
       categoryObj[currentItem.category] = [...categoryObj[currentItem.category] || [], currentItem];
       return categoryObj;
    }, {});
  }

}

class Item {
  constructor({ title, price=0, quantity=0, category="" }){
    this.title = title
    this.price = price
    this.quantity = quantity
    this.category = category
  }
}

export default ItemAdapter;
