import {CSObject} from '@/effortless-ui/types'

export type EffortlessThemeComponentsTypes = 'Box' | 'Button' | 'Text'

export type ComponentCompositions<T extends string> = {[key in T]: CSObject}
