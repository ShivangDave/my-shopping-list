import { Grid, Segment, Header } from 'semantic-ui-react';

import TableParent from './table/TableParent';

const DoneList = () => {
  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Done list </Header>
      </Segment>

      <TableParent />

    </Grid.Column>
  )
}

export default DoneList;
