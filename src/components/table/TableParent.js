import { Segment, Table } from 'semantic-ui-react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const TableParent = ({ willBuy }) => {
  return (
    <Segment textAlign={'center'}>
      <Table columns={5} celled>
        <TableHeader />
        <Table.Body>
          <TableRow willBuy={willBuy} />
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default TableParent;
