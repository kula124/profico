import React from 'react'

import { ReactComponent as homeIcon } from 'assets/icons/Home.svg'
import { ReactComponent as healthIcon } from 'assets/icons/Health.svg'
import { ReactComponent as generalIcon } from 'assets/icons/News.svg'
import { ReactComponent as scienceIco } from 'assets/icons/Science.svg'
import { ReactComponent as sportsIcon } from 'assets/icons/Sports.svg'
import { ReactComponent as technologyIcon } from 'assets/icons/TV-Guide.svg'
import { ReactComponent as businessIcon } from 'assets/icons/Business.svg'
import { ReactComponent as  FavoritesIcon } from 'assets/icons/Bookmark.svg'


export type CategoryName = 'home' | 'favorites' | 'health' | 'technology' | 'general' 
| 'business' | 'science' | 'sports' | 'entertainment'

export interface ICategory {
  name: CategoryName,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

// Keeping categories outside of module/component definition
// allows CMS system to define new category dynamically (no code added) 
export const categories:ICategory[] = [
  {
    icon: homeIcon,
    name: 'home',
  },
  { 
    icon: FavoritesIcon,
    name: 'favorites' 
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