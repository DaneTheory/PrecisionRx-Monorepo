import React from 'react'
import { action } from '@storybook/addon-actions'

import Buttons from '../lib/Buttons'

export default {
 title: 'Buttons',
 component: Buttons
}

export const Text = () => (
 <Buttons onClick={action('clicked')}>Hello Button</Buttons>
)

export const Emoji = () => (
 <Buttons onClick={action('clicked')}>
   <span role="img" aria-label="so cool">
     😀 😎 👍 💯
   </span>
 </Buttons>
)
