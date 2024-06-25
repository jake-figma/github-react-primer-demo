import {type ComponentPropsWithoutRef, type ReactNode, createContext} from 'react'

export function Navigation(
  _props: ComponentPropsWithoutRef<'nav'> & {
    direction?: 'column' | 'row'
  },
) {
  return <nav />
}
export function MobileNavigation(_props: {}) {
  return <nav />
}

export function NavigationPill(
  _props: ComponentPropsWithoutRef<'a'> & {
    isSelected?: boolean
  },
) {
  return <a />
}

export function NavigationButton(
  _props: ComponentPropsWithoutRef<'a'> & {
    isSelected?: boolean
    icon?: ReactNode
    size?: 'small' | 'medium'
    direction?: 'column' | 'row'
  },
) {
  return <a />
}

export function IconStar() {
  return <svg />
}

export function TextHeading(_props: {children: ReactNode}) {
  return <h1 />
}

export type PricingProps = {
  heading: string
  price: string
  pricePer?: string
  list: string[]
  action: string
  actionVariant?: 'primary' | 'neutral' | 'subtle'
  style?: 'default' | 'brand'
  onAction: () => void
}

export const PricingContext = createContext<{
  monthlyOptions: PricingProps[]
  annualOptions: PricingProps[]
}>({
  monthlyOptions: [
    {
      heading: 'Beginner',
      price: '5',
      pricePer: '/ mo',
      list: [],
      action: 'Select Beginner',
      actionVariant: 'primary',
      style: 'default',
      onAction: () => {},
    },
    {
      heading: 'Advanced',
      price: '10',
      pricePer: '/ mo',
      list: [],
      action: 'Select Advanced',
      actionVariant: 'primary',
      style: 'default',
      onAction: () => {},
    },
    {
      heading: 'Business',
      price: '25',
      pricePer: '/ mo',
      list: [],
      action: 'Select Business',
      actionVariant: 'neutral',
      style: 'brand',
      onAction: () => {},
    },
  ],
  annualOptions: [],
})

export function PricingCard(_props: PricingProps) {
  return <div />
}
export function Section(_props: {children: ReactNode; padding: 'large' | 'medium' | 'small'}) {
  return <div />
}
export function TextList(_props: {title?: string; children: ReactNode; density: 'tight' | 'default'}) {
  return <div />
}
export function TextListItem(_props: {children: ReactNode}) {
  return <div />
}

export function TextPrice(_props: {currency: string; label?: string; price: string; size?: 'small' | 'large'}) {
  return <h1 />
}

export function Flex(_props: {
  children: ReactNode
  container?: boolean
  direction: 'column' | 'row'
  gap: 'large' | 'medium' | 'small'
}) {
  return <div />
}

export function useMediaQuery() {
  return {isMobile: true, isDesktop: false}
}
