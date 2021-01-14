import { Table } from 'semantic-ui-react';

const TableHeader = () => {
  return (
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell>Buy?</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

export default TableHeader;
