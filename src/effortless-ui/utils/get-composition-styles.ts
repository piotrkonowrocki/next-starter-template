import {ComponentCompositions, CSObject} from '@/effortless-ui/types'
import {castToArray} from '@/effortless-ui/utils'

export const getCompositionStyles = <T extends string>(composition: T | T[], compositions: ComponentCompositions<T>): CSObject => {
  const styles: CSObject[] = []
  const compositionArray = castToArray<T>(composition)

  styles.push(compositionArray.map((item) => compositions[item]))

  return styles.flat()
}
