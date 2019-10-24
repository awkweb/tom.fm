export const DEFAULT_PIXEL_SIZE = 18
export const toRem = (pixelSize: number): number =>
    pixelSize / DEFAULT_PIXEL_SIZE
export const toRemString = (pixelSize: number): string =>
    `${toRem(pixelSize)}rem`
