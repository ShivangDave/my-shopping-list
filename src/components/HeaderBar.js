import  { Header, Icon } from 'semantic-ui-react';

const HeaderBar = () => {
  return (
    <div className={'header-parent'}>
      <Header as='h4' icon textAlign='center'>
        <Icon name={'shop'} />
        <Header.Content>{`Let's go Shopping!`}</Header.Content>
      </Header>
    </div>
  )
}

export default HeaderBar;
