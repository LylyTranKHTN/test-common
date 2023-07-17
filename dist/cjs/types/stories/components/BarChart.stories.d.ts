import type { StoryObj } from '@storybook/react';
import { BarChart } from '../../BarChart';
declare const meta: {
    title: string;
    component: typeof BarChart;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof BarChart>;
export declare const SingleChart: Story;
export declare const MultipleChart: Story;
export declare const EmptyChart: Story;
