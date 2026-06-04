export type CommonType = {
  variant: string,
  className: string,
}

export type VariantType = {
  variantBackground: string,
}

export type ColorType = {
  foreground: string,
  background: string,
}

export type ButtonProps = {
  ariaLabel: string, 
  href: string,
  variant: 
    | 'primaryBrown'
    | 'primaryBlue'
    | 'secondary'
    | 'secondaryBlue'
    | 'ternaryBlue'
  text: string,
  download?: boolean,
  target?: string,
}