import React from 'react'

import { ReactComponent as homeIcon } from 'assets/icons/Home.svg'
import { ReactComponent as healthIcon } from 'assets/icons/Health.svg'
import { ReactComponent as generalIcon } from 'assets/icons/News.svg'
import { ReactComponent as scienceIco } from 'assets/icons/Science.svg'
import { ReactComponent as sportsIcon } from 'assets/icons/Sports.svg'
import { ReactComponent as technologyIcon } from 'assets/icons/TV-Guide.svg'
import { ReactComponent as businessIcon } from 'assets/icons/Business.svg'



export type CategoryName = 'home' | 'health' | 'technology' | 'general' 
| 'business' | 'science' | 'sports' | 'entertainment'

export interface ICategory {
  name: CategoryName,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const categories:ICategory[] = [
  {
    icon: homeIcon,
    name: 'home',
  },
  {
    icon: generalIcon,
    name: 'general',
  },
  {
    icon: businessIcon,
    name: 'business'
  },
  {
    icon: healthIcon,
    name: 'health',
  },
  {
    icon: scienceIco,
    name: 'science',
  },
  {
    icon: sportsIcon,
    name: 'sports',
  },
  {
    icon: technologyIcon,
    name: 'technology',
  },
] 