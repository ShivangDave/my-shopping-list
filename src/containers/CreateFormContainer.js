import { Grid } from 'semantic-ui-react';
import CreateForm from '../components/CreateForm';

const CreateFormContainer = () => {
  return (
    <Grid.Column>
      <CreateForm item />
      <CreateForm item={false} />
    </Grid.Column>
  )
}

export default CreateFormContainer;
