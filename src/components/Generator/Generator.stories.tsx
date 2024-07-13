import type { Meta, StoryObj } from '@storybook/react';
import { Generator } from './Generator';

const meta = {
  title: 'Components/Generator',
  component: Generator,
  //tags: ['autodocs'],
  //args: { onClick: fn() },
} satisfies Meta<typeof Generator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Generator: Story = {};   // aby nie wyswieltać tego pod nazwą Primery można dodać z podkreśleniem nazwę komponentu
