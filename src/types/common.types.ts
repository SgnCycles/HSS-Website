export type CommonType = {
  variant: string,
}

export type IdProp = {
  id: number
}

export type ImageProp = {
  id: number,
  image: string
}

export type TextProp = {
  id: number,
  text: string
}

export type SourceProp = {
  id: number,
  source: string
}

export type TextImageProps = {
  id: number,
  text: string,
  image: string
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