export type CommonType = {
  variant: string,
}

export type IdProp = {
  id: number
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

export type CloseButtonProps = {
  ariaLabel: string,
  text: string,
  onClick: () => void
}

export type ReadMoreButtonProps = {
  ariaLabel: string,
  variant: 
    | 'primaryBlue'
    | 'secondaryBlue'
  text: string,
  onClick: () => void
}