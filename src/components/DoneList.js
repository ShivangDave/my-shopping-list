import { Grid, Segment, Header } from 'semantic-ui-react';

import TableParent from './table/TableParent';

import { connect } from 'react-redux';

const DoneList = ({ purchased }) => {
  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Done list </Header>
      </Segment>

      <TableParent willBuy={false} items={purchased} />

    </Grid.Column>
  )
}

const mapStateToProps = (state) => ({ purchased: state.purchased })

export default connect(mapStateToProps)(DoneList);
//
// Passing a boolean to TableParent
// if true, on click item will move to DoneList
// if false, on click item will move to BuyList
// if false, text will show up with line-through decoration
//
