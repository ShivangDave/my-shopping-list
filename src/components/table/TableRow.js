import { Table, Form, Checkbox, Input, Select } from 'semantic-ui-react';

const TableRow = ({ willBuy }) => {

  return (
    <Table.Row className={ willBuy ? '' : 'crossed' }>

      <Table.Cell>
        <Checkbox checked={!willBuy} />
      </Table.Cell>

      <Table.Cell>
        Sample Item
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Input} type={'number'} placeholder='Quantity'
          disabled={!willBuy} name={'quantity'} value={''} />
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Input} type={'number'} placeholder='Price'
          disabled={!willBuy} name={'price'} value={''} />
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Select} options={[]} name={'category'}
          disabled={!willBuy} value={''} />
      </Table.Cell>

    </Table.Row>
  )
}

export default TableRow;
