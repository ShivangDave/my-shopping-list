import { Grid, Segment, Form, Header, Input, Button } from 'semantic-ui-react';

import { useState } from 'react';

const CreateForm = ({ item }) => {

  // Change header for item or category
  const header = item ? "Add an Item" : "Add a category"

  // Local state for controlled form
  // May move it to redux state when refactoring (?)
  const [title,setTitle] = useState('')

  // Form input onChange handler
  const onChange = (e,{value}) => {
    setTitle(value)
  }

  return (
    <Grid.Column>
      <Segment>
        <Header textAlign={'center'}> {header} </Header>
        <Form>
          <Form.Field
            control={Input}
            placeholder='Enter here'
            name={'title'}
            value={title}
            onChange={onChange}
          />

          <Form.Field onClick={() => {
              alert(title)
              setTitle('') // Clear the form on submit
            }}
            control={Button}
            content={item ? 'Add Item' : 'Add Category'}
            label=''
          />
        </Form>
      </Segment>
    </Grid.Column>
  )
}

export default CreateForm;
