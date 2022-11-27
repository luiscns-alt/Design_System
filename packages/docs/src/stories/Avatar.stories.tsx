import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@luis-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/82232848?v=4',
    alt: 'Luis Carlos',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
