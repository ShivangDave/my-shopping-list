import { Segment, Table } from 'semantic-ui-react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const TableParent = ({ willBuy, items }) => {
  return (
    <Segment textAlign={'center'}>
      <Table columns={5} celled>
        <TableHeader />
        <Table.Body>
          {
            items.sort((a,b) => (a.title > b.title) ? 1 : -1).map(item => (
              <TableRow willBuy={willBuy} item={item} />
            ))
          }
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default TableParent;
