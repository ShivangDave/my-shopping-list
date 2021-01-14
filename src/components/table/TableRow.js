import { Table, Form, Checkbox, Input, Select } from 'semantic-ui-react';

import { connect } from 'react-redux';

const TableRow = ({ willBuy, item, categories }) => {

  const { title, price, category, quantity } = item

  return (
    <Table.Row className={ willBuy ? '' : 'crossed' }>

      <Table.Cell>
        <Checkbox checked={!willBuy} />
      </Table.Cell>

      <Table.Cell>
        { title }
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Input} type={'number'} placeholder='Quantity'
          disabled={!willBuy} name={'quantity'} value={quantity} />
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Input} type={'number'} placeholder='Price'
          disabled={!willBuy} name={'price'} value={price} />
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Select} options={categories} name={'category'}
          disabled={!willBuy} value={category} />
      </Table.Cell>

    </Table.Row>
  )
}

const mapStateToProps = (state) => ({ categories: state.categories })

export default connect(mapStateToProps)(TableRow);
