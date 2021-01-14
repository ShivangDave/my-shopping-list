import { Grid, Segment, Header, Search } from 'semantic-ui-react';

import TableParent from './table/TableParent';

const BuyList = () => {
  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Need to buy </Header>
        <Search showNoResults={false} placeholder={'Search..'} />
      </Segment>

      <TableParent />

    </Grid.Column>
  )
}

export default BuyList;
