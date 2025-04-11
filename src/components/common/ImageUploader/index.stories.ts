import type { Meta, StoryObj } from "@storybook/react";
import { ImageUploader } from "@/components/common/ImageUploader";

const meta = {
    title: "components/common/ImageUploader",
    component: ImageUploader,
} satisfies Meta<typeof ImageUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
