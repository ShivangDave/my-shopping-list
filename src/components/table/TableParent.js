import { Segment, Table } from 'semantic-ui-react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const TableParent = () => {
  return (
    <Segment textAlign={'center'}>
      <Table columns={5} celled>
        <TableHeader />
        <Table.Body>
          <TableRow />
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default TableParent;
