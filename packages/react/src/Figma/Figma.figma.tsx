import {useContext} from 'react'
import * as UI from './Figma'
import figma from '@figma/code-connect'

const {
  Flex,
  IconStar,
  MobileNavigation,
  NavigationButton,
  NavigationPill,
  Navigation,
  PricingCard,
  PricingContext,
  Section,
  TextHeading,
  TextList,
  TextListItem,
  TextPrice,
  useMediaQuery,
} = UI

/**
 * Navigation Components
 */

// Navigation Pill
figma.connect(NavigationPill, '<CODE_CONNECT_ROOT>35603-1511', {
  props: {
    children: figma.string('Label'),
    isSelected: figma.enum('State', {
      Active: true,
      Default: undefined,
      Hover: undefined,
    }),
  },
  example: ({children, ...props}) => <NavigationPill {...props}>{children}</NavigationPill>,
})

// Navigation Pill List
figma.connect(Navigation, '<CODE_CONNECT_ROOT>35603-1518', {
  props: {
    direction: figma.enum('Direction', {
      Row: 'row',
      Column: 'column',
    }),
  },
  example: ({...props}) => {
    const selectedKey = 'item-1'
    const items = [
      {key: 'item-1', label: 'Item 1'},
      {key: 'item-2', label: 'Item 2'},
      {key: 'item-3', label: 'Item 3'},
    ]

    return (
      <Navigation {...props}>
        {items.map(item => (
          <NavigationPill key={item.key} isSelected={item.key === selectedKey}>
            {item.label}
          </NavigationPill>
        ))}
      </Navigation>
    )
  },
})

// Navigation Button List
figma.connect(Navigation, '<CODE_CONNECT_ROOT>35603-1494', {
  props: {
    direction: figma.enum('Direction', {
      Row: 'row',
      Column: 'column',
    }),
  },
  example: ({...props}) => {
    const selectedKey = 'item-1'
    const items = [
      // { key: "item-1", label: "Item 1", icon: <IconStar /> },
      {key: 'item-2', label: 'Item 2', icon: undefined},
      {key: 'item-3', label: 'Item 3', icon: undefined},
    ]

    return (
      <Navigation {...props}>
        {items.map(item => (
          <NavigationButton key={item.key} isSelected={item.key === selectedKey} icon={item.icon}>
            {item.label}
          </NavigationButton>
        ))}
      </Navigation>
    )
  },
})

// Navigation Button
figma.connect(NavigationButton, '<CODE_CONNECT_ROOT>35603-1457', {
  props: {
    children: figma.string('Label'),
    icon: figma.boolean('Has Icon', {
      true: figma.instance('Icon'),
      false: undefined,
    }),
    isSelected: figma.enum('State', {
      Active: true,
      Default: undefined,
      Hover: undefined,
    }),
  },
  example: ({children, ...props}) => <NavigationButton {...props}>{children}</NavigationButton>,
})

// Mobile Navigation
figma.connect(MobileNavigation, '<CODE_CONNECT_ROOT>35603-1508')

/**
 *
 */

// Payment Schedule
figma.connect(Navigation, '<CODE_CONNECT_ROOT>35603-1549', {
  props: {
    listProps: figma.nestedProps('Navigation Pill List', {
      children: figma.children('Navigation Pill'),
      direction: figma.enum('Direction', {
        Row: 'row',
        Column: 'column',
      }),
    }),
  },
  example: ({listProps}) => <Navigation direction={listProps.direction}>{listProps.children}</Navigation>,
})

// Card Grid Pricing
figma.connect(Section, '<CODE_CONNECT_ROOT>35603-1536', {
  props: {
    schedule: figma.children('Payment Schedule'),
  },
  example: ({schedule}) => {
    const {monthlyOptions} = useContext(PricingContext)
    const {isMobile} = useMediaQuery()
    const padding = isMobile ? 'small' : 'large'
    const gap = isMobile ? 'small' : 'medium'
    const gapCards = isMobile ? 'small' : 'large'

    return (
      <Section padding={padding}>
        <Flex container direction="column" gap={gap}>
          {schedule}
          <Flex container direction="row" gap={gapCards}>
            {monthlyOptions.map(pricing => (
              <PricingCard key={pricing.heading} {...pricing} />
            ))}
          </Flex>
        </Flex>
      </Section>
    )
  },
})

// Pricing Card
figma.connect(PricingCard, '<CODE_CONNECT_ROOT>35603-1574', {
  props: {
    textHeading: figma.nestedProps('Text Heading', {
      text: figma.string('Text'),
    }),
    action: figma.nestedProps<{
      label: string
      variant: 'primary' | 'neutral' | 'subtle'
    }>('Button', {
      label: figma.string('Label'),
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Neutral: 'neutral',
        Subtle: 'subtle',
      }),
    }),
    style: figma.enum('Style', {
      Brand: 'brand',
    }),
    textPrice: figma.nestedProps('Text Price', {
      price: figma.string('Price'),
    }),
  },
  example: ({textHeading, textPrice, action, ...props}) => (
    <PricingCard
      {...props}
      heading={textHeading.text}
      action={action.label}
      actionVariant={action.variant}
      onAction={() => {}}
      price={textPrice.price}
      list={['Item 1', 'Item 2']}
    />
  ),
})

// Text List
figma.connect(TextList, '<CODE_CONNECT_ROOT>35603-1551', {
  props: {
    title: figma.boolean('Has Title', {
      true: figma.string('Title'),
      false: undefined,
    }),
    children: figma.children('Text List Item'),
    density: figma.enum('Density', {Default: 'default', Tight: 'tight'}),
  },
  example: ({children, ...props}) => <TextList {...props}>{children}</TextList>,
})

// Text List Item
figma.connect(TextListItem, '<CODE_CONNECT_ROOT>35603-1570', {
  props: {children: figma.string('Label')},
  example: ({children}) => <TextListItem>{children}</TextListItem>,
})

// Text Price
figma.connect(TextPrice, '<CODE_CONNECT_ROOT>35603-1601', {
  props: {
    currency: figma.string('Currency'),
    label: figma.boolean('Has Label', {
      true: figma.string('Label'),
      false: undefined,
    }),
    price: figma.string('Price'),
    size: figma.enum('Size', {Small: 'small', Large: 'large'}),
  },
  example: props => <TextPrice {...props} />,
})

// Text Heading
figma.connect(TextHeading, '<CODE_CONNECT_ROOT>35603-1572', {
  props: {children: figma.string('Text')},
  example: ({children}) => <TextHeading>{children}</TextHeading>,
})

// Icon Star
figma.connect(IconStar, '<CODE_CONNECT_ROOT>35603-1534')
