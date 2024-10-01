import { NavLink } from './BottomNavItem';
import { AssetsIcon, HomeIcon, ProfileIcon, TradeIcon } from './Icons';

export default function BottomNav() {
  return (
    <div className="btm-nav btm-nav-sm mx-auto max-w-[600px]">
      <NavLink href="/" icon={<HomeIcon />}>
        Home
      </NavLink>
      <NavLink href="/assets" icon={<AssetsIcon />}>
        Assets
      </NavLink>
      <NavLink href="/trade" icon={<TradeIcon />}>
        Trade
      </NavLink>
      <NavLink href="/profile" icon={<ProfileIcon />}>
        Profile
      </NavLink>
    </div>
  );
}
