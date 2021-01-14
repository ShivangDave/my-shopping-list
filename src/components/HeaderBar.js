import  { Header, Icon } from 'semantic-ui-react';

const HeaderBar = ({ content, icon }) => {
  return (
    <div className={'header-parent'}>
      <Header as='h4' icon textAlign='center'>
        <Icon name={icon} />
        <Header.Content>{content}</Header.Content>
      </Header>
    </div>
  )
}

export default HeaderBar;
