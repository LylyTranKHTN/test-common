import type { Meta, StoryObj } from '@storybook/react';

import { BarChart } from '../../BarChart';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Component/BarChart',
  component: BarChart,
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof BarChart>;

export const SingleChart: Story = {
  args: {
    data: {
      current: {
        id: 1,
        label: 'Current',
        data: {
          A: {
            id: 1,
            label: 'A',
            value: 50,
            color: 'primary',
          },
          B: {
            id: 12,
            label: 'B',
            value: 23,
            color: 'secondary',
          },
        },
        total: 0,
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MultipleChart: Story = {
  args: {
    data: {
      current: {
        id: 1,
        label: 'Current',
        data: {
          A: {
            id: 1,
            label: 'A',
            value: 50,
            color: 'primary',
          },
          B: {
            id: 12,
            label: 'B',
            value: 23,
            color: 'secondary',
          },
        },
        total: 0,
      },
      target: {
        id: 2,
        label: 'Target',
        data: {
          A: {
            id: 1,
            label: 'A',
            value: 50,
            color: 'primary',
          },
          B: {
            id: 12,
            label: 'B',
            value: 23,
            color: 'secondary',
          },
        },
        total: 0,
      },
    },
  },
};

export const EmptyChart: Story = {
  args: {
    data: {
      current: {
        id: 1,
        label: 'Current',
        data: {},
        total: 0,
      },
    },
  },
};
