import type { Meta, StoryObj } from '@storybook/angular';
import { AplusButtonComponent } from './aplus-button.component';

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
        Click me
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/TI2QRswI37Xh8W8h5CrypW/2025-Design-System?node-id=5-3906&t=BwumfkGZ3mL2Q26T-4'
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
        Success
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/TI2QRswI37Xh8W8h5CrypW/2025-Design-System?node-id=7-3896&t=BwumfkGZ3mL2Q26T-4'
    }
  }
};

export const WithLeadingIcon: Story = {
  args: {
    variant: 'primary',
    leadingIcon: 'add'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Add Item
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/TI2QRswI37Xh8W8h5CrypW/2025-Design-System?node-id=5-3906&t=BwumfkGZ3mL2Q26T-4'
    }
  }
};

export const WithTrailingIcon: Story = {
  args: {
    variant: 'primary',
    trailingIcon: 'arrow_forward'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Next
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/TI2QRswI37Xh8W8h5CrypW/2025-Design-System?node-id=5-3906&t=BwumfkGZ3mL2Q26T-4'
    }
  }
};

export const WithBothIcons: Story = {
  args: {
    variant: 'positive',
    leadingIcon: 'check_circle',
    trailingIcon: 'done'
  },
  render: (args) => ({
    props: args,
    template: `
      <aplus-button [variant]="variant" [leadingIcon]="leadingIcon" [trailingIcon]="trailingIcon">
        Complete
      </aplus-button>
    `
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/TI2QRswI37Xh8W8h5CrypW/2025-Design-System?node-id=7-3896&t=BwumfkGZ3mL2Q26T-4'
    }
  }
}; 