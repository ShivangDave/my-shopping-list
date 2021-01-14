import { useEffect } from 'react';

import HeaderBar from './components/HeaderBar';
import BuyList from './components/BuyList';
import DoneList from './components/DoneList';
import CreateFormContainer from './containers/CreateFormContainer';

import { Grid } from 'semantic-ui-react';
import { pending, purchased, categories } from './data/sample-data';

import { connect } from 'react-redux';
import { set_dummy_data } from './actions/itemActions';

import './assets/App.css';


const App = (props) => {

  useEffect(() => {
    props.set_dummy_data({ pending, purchased, categories })
  })

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

export default connect(null,{ set_dummy_data })(App);
