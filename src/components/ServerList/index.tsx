import ServerButton from '../ServerButton';

import { 
  Container,
  Separator
} from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={2} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={8} />
      <ServerButton hasNotifications />
      <ServerButton mentions={10} />
      <ServerButton hasNotifications />
    </Container>
  );
};

export default ServerList;
