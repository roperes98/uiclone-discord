import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon, } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="geral" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="among" />
      <ChannelButton channelName="valorant" />
    </Container>
  );
};

export default ChannelList;
