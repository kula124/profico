import { mobileWidth } from "constants/consts"
import { useMediaQuery } from "react-responsive"

export const useMobile = ():boolean => useMediaQuery({
  query: `(max-width: ${mobileWidth})`
})