import { Grid, Segment, Header, Search } from 'semantic-ui-react';
import TableParent from './table/TableParent';

import { connect } from 'react-redux';

const BuyList = ({ pending }) => {
  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Need to buy </Header>
        <Search showNoResults={false} placeholder={'Search..'} />
      </Segment>

      <TableParent willBuy items={pending} />

    </Grid.Column>
  )
}

const mapStateToProps = (state) => ({ pending: state.pending })

export default connect(mapStateToProps)(BuyList);

//
// Passing a boolean to TableParent
// if true, on click item will move to DoneList
// if false, on click item will move to BuyList
// if false, text will show up with line-through decoration
//
