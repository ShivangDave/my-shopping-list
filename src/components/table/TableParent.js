import { Segment, Table } from 'semantic-ui-react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const TableParent = (props) => {
  return (
    <Segment textAlign={'center'}>
      <Table columns={5} celled>
        <TableHeader />
        <Table.Body>
          {
            props.items.map(item => (
              <TableRow willBuy={props.willBuy} item={item} />
            ))
          }
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default TableParent;
