import { NavLink } from './BottomNavLink';
import { HomeIcon, ProfileIcon, TradeIcon } from './Icons';

export default function BottomNav() {
  return (
    <div className="btm-nav btm-nav-sm mx-auto max-w-[600px]">
      <NavLink href="/" icon={<HomeIcon />}>
        홈
      </NavLink>
      <NavLink href="/trade" icon={<TradeIcon />}>
        거래소
      </NavLink>
      <NavLink href="/profile" icon={<ProfileIcon />}>
        프로필
      </NavLink>
    </div>
  );
}
