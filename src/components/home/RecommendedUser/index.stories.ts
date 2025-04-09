import type { Meta, StoryObj } from "@storybook/react";
import { RecommendedUser } from "@/components/home/RecommendedUser";

const meta = {
    title: "components/Home/RecommendedUser",
    component: RecommendedUser,
} satisfies Meta<typeof RecommendedUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "사용자",
        prev: "마른형",
        label: "근육형",
    },
};
