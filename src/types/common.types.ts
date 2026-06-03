export type CommonType = {
  variant: string,
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