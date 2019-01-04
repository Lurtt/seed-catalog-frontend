import Link from 'next/link'

import { HOME, DONORS, PLANTS } from '../routes'

const Nav = () => (
  <nav>
    <Link href={HOME}>
      <a>Home</a>
    </Link>
    {' | '}
    <Link href={PLANTS}>
      <a>Plants</a>
    </Link>
    {' | '}
    <Link href={DONORS}>
      <a>Donors</a>
    </Link>
  </nav>
)

export default Nav
