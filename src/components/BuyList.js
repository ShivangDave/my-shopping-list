import { Grid, Segment, Header, Search } from 'semantic-ui-react';

import TableParent from './table/TableParent';

const BuyList = () => {
  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Need to buy </Header>
        <Search showNoResults={false} placeholder={'Search..'} />
      </Segment>

      <TableParent willBuy />

    </Grid.Column>
  )
}

export default BuyList;

//
// Passing a boolean to TableParent
// if true, on click item will move to DoneList
// if false, on click item will move to BuyList
// if false, text will show up with line-through decoration
//
