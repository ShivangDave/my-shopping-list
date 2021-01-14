import { Grid, Segment, Header } from 'semantic-ui-react';

import TableParent from './table/TableParent';
import HeaderBar from './HeaderBar';

import { connect } from 'react-redux';

const DoneList = ({ items }) => {

  const renderTable = () => (
    <TableParent willBuy={false} items={items} />
  )

  const renderPlaceholder = () => (
    <HeaderBar content={'All done!'} icon={'shopping bag'} />
  )

  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> Done list </Header>
      </Segment>

      { items.length > 0 ? renderTable() : renderPlaceholder() }

    </Grid.Column>
  )
}

const mapStateToProps = (state) => ({ items: state.purchased })

export default connect(mapStateToProps)(DoneList);
//
// Passing a boolean to TableParent
// if true, on click item will move to DoneList
// if false, on click item will move to BuyList
// if false, text will show up with line-through decoration
//
