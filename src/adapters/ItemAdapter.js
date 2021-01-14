class ItemAdapter {

  static addNewItem = (list,attr) => {
    const newItem = new Item(attr)
    const items = [...list, newItem]
    return items
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
