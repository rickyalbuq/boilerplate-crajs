import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from '.';

export default {
  title: 'Text',
  component: Text
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = () => <Text />;
