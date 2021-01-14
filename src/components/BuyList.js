import { Grid, Segment, Header, Search } from 'semantic-ui-react';
import TableParent from './table/TableParent';

import ItemAdapter from '../adapters/ItemAdapter';

import { connect } from 'react-redux';

const BuyList = ({ items }) => {

  const totalPrice = ItemAdapter.totalPrice(items)

  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Need to buy </Header>
        <Search showNoResults={false} placeholder={'Search..'} />
      </Segment>

      <TableParent willBuy items={items} />

      <Segment textAlign={'center'}>
        <Header> Total Price: ${totalPrice} </Header>
      </Segment>
    </Grid.Column>
  )
}

const mapStateToProps = (state) => ({ items: state.pending })

export default connect(mapStateToProps)(BuyList);

//
// Passing a boolean to TableParent
// if true, on click item will move to DoneList
// if false, on click item will move to BuyList
// if false, text will show up with line-through decoration
//
