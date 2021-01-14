import { Grid, Segment, Header, Search, Table, Form, Checkbox, Input, Select } from 'semantic-ui-react';

const BuyList = () => {
  return (
    <Grid.Column>
      <Segment textAlign={'center'}>
        <Header> This is Buylist. </Header>
        <Search showNoResults={false} placeholder={'Search..'} />
      </Segment>
      <Segment textAlign={'center'}>
        <Table columns={5} celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Buy?</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          <Table.Row>

              <Table.Cell>
                <Checkbox checked={false} />
              </Table.Cell>

              <Table.Cell>
                Sample Item
              </Table.Cell>

              <Table.Cell>
                <Form.Field fluid control={Input} type={'number'} placeholder='Quantity'
                  name={'quantity'} value={''} />
              </Table.Cell>

              <Table.Cell>
                <Form.Field fluid control={Input} type={'number'} placeholder='Price'
                  name={'price'} value={''} />
              </Table.Cell>

              <Table.Cell>
                <Form.Field fluid control={Select} options={[]} name={'category'}
                  value={''} />
              </Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    </Grid.Column>
  )
}

export default BuyList;
