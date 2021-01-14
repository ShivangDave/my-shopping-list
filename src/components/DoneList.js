import { Grid, Segment, Header } from 'semantic-ui-react';

import TableParent from './table/TableParent';

const DoneList = () => {
  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Done list </Header>
      </Segment>

      <TableParent willBuy={false} />

    </Grid.Column>
  )
}
export default DoneList;

//
// Passing a boolean to TableParent
// if true, on click item will move to DoneList
// if false, on click item will move to BuyList
// if false, text will show up with line-through decoration
//
