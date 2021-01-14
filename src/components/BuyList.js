import { Grid, Segment, Header, Search } from 'semantic-ui-react';
import TableParent from './table/TableParent';

import ItemAdapter from '../adapters/ItemAdapter';

import { connect } from 'react-redux';
import { search_item } from '../actions/itemActions';

const BuyList = ({ items, search_item }) => {

  const totalPrice = ItemAdapter.totalPrice(items)
  const itemsByCategory = ItemAdapter.groupItems(items)

  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Need to buy </Header>
        <Search showNoResults={false} placeholder={'Search..'} onSearchChange={search_item} />
      </Segment>

      {
        Object.keys(itemsByCategory).map(category => {
          return <TableParent willBuy category={category} items={itemsByCategory[category]} />
        })
      }

      <Segment textAlign={'center'}>
        <Header> Total Price: ${totalPrice} </Header>
      </Segment>
    </Grid.Column>
  )
}

const mapStateToProps = (state) => ({
  items: ItemAdapter.filterItems(state.pending,state.searchTerm)
})

export default connect(mapStateToProps,{ search_item })(BuyList);

//
// Passing a boolean to TableParent
// if true, on click item will move to DoneList
// if false, on click item will move to BuyList
// if false, text will show up with line-through decoration
//
