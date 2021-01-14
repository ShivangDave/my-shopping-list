import { Table, Form, Checkbox, Input, Select } from 'semantic-ui-react';

const TableRow = () => {
  return (
    <Table.Row>

      <Table.Cell>
        <Checkbox checked={false} />
      </Table.Cell>

      <Table.Cell>
        Sample Item
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Input} type={'number'} placeholder='Quantity'
          name={'quantity'} value={''} />
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Input} type={'number'} placeholder='Price'
          name={'price'} value={''} />
      </Table.Cell>

      <Table.Cell>
        <Form.Field fluid control={Select} options={[]} name={'category'}
          value={''} />
      </Table.Cell>

    </Table.Row>
  )
}

export default TableRow;
