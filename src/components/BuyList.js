import { Grid, Segment, Header, Search } from 'semantic-ui-react';
import TableParent from './table/TableParent';
import HeaderBar from './HeaderBar';

import ItemAdapter from '../adapters/ItemAdapter';

import { connect } from 'react-redux';
import { search_item } from '../actions/itemActions';

const BuyList = ({ items, search_item }) => {

  const totalPrice = ItemAdapter.totalPrice(items)
  const itemsByCategory = ItemAdapter.groupItems(items)

  const renderTables = () => {
    return Object.keys(itemsByCategory).map(category => {
      return <TableParent willBuy category={category} items={itemsByCategory[category]} />
    })
  }

  const renderPlaceholder = () => (
    <HeaderBar content={'No items..'} icon={'check circle'} />
  )

  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Need to buy </Header>
        <Search showNoResults={false} placeholder={'Is it on the list already?'} onSearchChange={search_item} />
      </Segment>
      {
        items.length > 0 ? renderTables() : renderPlaceholder()
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
