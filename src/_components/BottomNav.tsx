import { NavItem } from './BottomNavItem';
import { AssetsIcon, HomeIcon, ProfileIcon, TradeIcon } from './Icons/icons';

export default function BottomNav() {
  return (
    <div className="btm-nav btm-nav-sm mx-auto max-w-[600px]">
      <NavItem href="/" icon={<HomeIcon />} label="Home" />
      <NavItem href="/assets" icon={<AssetsIcon />} label="Assets" />
      <NavItem href="/trade" icon={<TradeIcon />} label="Trade" />
      <NavItem href="/profile" icon={<ProfileIcon />} label="Profile" />
    </div>
  );
}
