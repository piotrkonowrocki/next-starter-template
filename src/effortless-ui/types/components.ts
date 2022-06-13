import {CSObject} from '@/effortless-ui/types'

export type EffortlessThemeComponentsTypes = 'Box' | 'Text'

export type ComponentCompositions<T extends string> = {[key in T]: CSObject}
