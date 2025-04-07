import type { Meta, StoryObj } from '@storybook/angular';
import { AplusButtonComponent } from './button.component';

const meta: Meta<AplusButtonComponent> = {
  title: 'Components/AplusButton',
  component: AplusButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'positive'],
      description: 'The visual style variant of the button'
    },
    leadingIcon: {
      control: 'text',
      description: 'Material icon name to display before the button text'
    },
    trailingIcon: {
      control: 'text',
      description: 'Material icon name to display after the button text'
    }
  }
};

export default meta;
type Story = StoryObj<AplusButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Enabled
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3O44xpM4ac9xxnXRvYmbkL/2025-Design-System-POC---Jason?node-id=4-4348&t=UZ25soJGpcmq348k-4'
    }
  }
};


export const PrimaryWithLeadingIcon: Story = {
  args: {
    variant: 'primary',
    leadingIcon: 'add'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Enabled
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3O44xpM4ac9xxnXRvYmbkL/2025-Design-System-POC---Jason?node-id=5-3910&t=UZ25soJGpcmq348k-4'
    }
  }
};

export const PrimaryWithTrailingIcon: Story = {
  args: {
    variant: 'primary',
    trailingIcon: 'keyboard_arrow_down'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Enabled
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3O44xpM4ac9xxnXRvYmbkL/2025-Design-System-POC---Jason?node-id=5-3911&t=UZ25soJGpcmq348k-4'
    }
  }
};

export const Positive: Story = {
  args: {
    variant: 'positive'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Enabled
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3O44xpM4ac9xxnXRvYmbkL/2025-Design-System-POC---Jason?node-id=7-3897&t=UZ25soJGpcmq348k-4'
    }
  }
};


export const PositiveWithLeadingIcon: Story = {
  args: {
    variant: 'positive',
    leadingIcon: 'add'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Enabled
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3O44xpM4ac9xxnXRvYmbkL/2025-Design-System-POC---Jason?node-id=7-3903&t=UZ25soJGpcmq348k-4'
    }
  }
};

export const PositiveWithTrailingIcon: Story = {
  args: {
    variant: 'positive',
    trailingIcon: 'keyboard_arrow_down'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Enabled
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3O44xpM4ac9xxnXRvYmbkL/2025-Design-System-POC---Jason?node-id=7-3911&t=UZ25soJGpcmq348k-4'
    }
  }
};