import type { Meta, StoryObj } from '@storybook/angular';
import { AplusAccordionComponent } from './accordion.component';

const meta: Meta<AplusAccordionComponent> = {
    title: 'Components/AplusAccordion',
    component: AplusAccordionComponent,
    tags: ['autodocs'],
    argTypes: {
        heading: {
            control: 'text',
            description: 'Heading',
        },
        icon: {
            control: 'text',
            description: 'Material icon',
        },
        expand: {
            control: 'boolean',
            description: 'Indicate if the accordion should expand or collapse',
        },
        expandChange: {
            action: 'expandChange',
            description: 'Emits the new state when the accordion is toggled',
            table: {
                category: 'Outputs',
            },
        },
    },
};

export default meta;
type Story = StoryObj<AplusAccordionComponent>;


export const Collapsed: Story = {
    args: {
        expand: false,
        icon: 'info',
        heading: 'General Terms & Conditions'
    },
    render: (args) => ({
        props: args,
        template: `
        <aplus-accordion [expand]="expand" [icon]="icon" [heading]="heading">
            <ul class="list-disc pl-6">
            <li>Sale conducted under AuctionsPlus User Agreement and Code of Conduct</li>
            <li>Trading Terms are those of the Selling Agent</li>
            <li>Highest bidders on passed in lots: for 90 minutes after the auction finishes, you can elect to meet the reserve via your dashboard; alternatively you have the first right of negotiation</li>
            <li>Buyer Login is required to bid. All new registered AuctionsPlus buyers are required to complete Buyer Induction Training prior to bidding. AuctionsPlus recommends that all intending bidders have completed their registration and training 24 hours prior to auction</li>
            <li>For all enquiries, please contact AuctionsPlus</li>
            </ul>
        </aplus-accordion>
      `
    }),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/3O44xpM4ac9xxnXRvYmbkL/Jason---Design-System-POC?node-id=390-1677&t=uc09a4JXAdgFmWS7-4'
        }
    }
};

export const Expanded: Story = {
    args: {
        expand: true,
        icon: 'info',
        heading: 'General Terms & Conditions'
    },
    render: (args) => ({
        props: args,
        template: `
        <aplus-accordion [expand]="expand" [icon]="icon" [heading]="heading">
            <ul class="list-disc pl-6">
            <li>Sale conducted under AuctionsPlus User Agreement and Code of Conduct</li>
            <li>Trading Terms are those of the Selling Agent</li>
            <li>Highest bidders on passed in lots: for 90 minutes after the auction finishes, you can elect to meet the reserve via your dashboard; alternatively you have the first right of negotiation</li>
            <li>Buyer Login is required to bid. All new registered AuctionsPlus buyers are required to complete Buyer Induction Training prior to bidding. AuctionsPlus recommends that all intending bidders have completed their registration and training 24 hours prior to auction</li>
            <li>For all enquiries, please contact AuctionsPlus</li>
            </ul>
        </aplus-accordion>
      `
    }),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/3O44xpM4ac9xxnXRvYmbkL/Jason---Design-System-POC?node-id=302-6617&t=uc09a4JXAdgFmWS7-4'
        }
    }
};