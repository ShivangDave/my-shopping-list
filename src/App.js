import HeaderBar from './components/HeaderBar';
import BuyList from './components/BuyList';
import DoneList from './components/DoneList';

import CreateFormContainer from './containers/CreateFormContainer';

import { Grid } from 'semantic-ui-react';

import './assets/App.css';

const App = () => {
  return (
    <>
      <HeaderBar />
      <Grid className={'grid-parent'} stackable columns={3} >
        <BuyList />
        <CreateFormContainer />
        <DoneList />
      </Grid>
    </>
  );
}

export default App;
