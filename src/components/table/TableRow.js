import { Table, Form, Checkbox, Input, Select } from 'semantic-ui-react';

import { connect } from 'react-redux';

import { buy_item, relist_item, update_item } from '../../actions/itemActions';

const TableRow = ({ willBuy, item, categories, buy_item, relist_item, update_item }) => {

  const { title, price, category, quantity } = item
  // if true: buy item
  // if false: relist item
  const callBack = willBuy ? buy_item : relist_item

  const handleItemUpdate = (e,{name,value}) => {
    update_item({
      ...item,
      [name]: value
    })
  }

  return (
    <Table.Row className={ willBuy ? '' : 'crossed' }>

      <Table.Cell>
        <Checkbox checked={!willBuy} onClick={() => callBack(item)} />
      </Table.Cell>

      <Table.Cell>
        { title }
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Input} type={'number'} placeholder='Quantity'
          disabled={!willBuy} name={'quantity'} value={quantity}
          onChange={handleItemUpdate}
        />
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Input} type={'number'} placeholder='Price'
          disabled={!willBuy} name={'price'} value={price}
          onChange={handleItemUpdate}
        />
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Select} options={categories} name={'category'}
          disabled={!willBuy} value={category}
          onChange={handleItemUpdate}
        />
      </Table.Cell>

    </Table.Row>
  )
}

const mapStateToProps = (state) => ({ categories: state.categories })

export default connect(mapStateToProps,{ buy_item, relist_item, update_item })(TableRow);
