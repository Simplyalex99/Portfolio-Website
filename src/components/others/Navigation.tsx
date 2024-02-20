import Link from 'next/link';
import { LinkIds } from '@/enums';
import navStyles from '@/styles/components/Navigation.module.scss';

const Links: Array<{ text: string; url: string }> = [
  { text: 'Contributions & Projects', url: LinkIds.WORK_ID },
  { text: 'Why hire me?', url: LinkIds.MISSION_ID },
  { text: 'My Skills', url: LinkIds.SKILLS_ID },
];
export const Navigation = () => {
  return (
    <div className={navStyles['nav-link-wrapper']}>
      {Links.map((items) => {
        const { text, url } = items;
        return (
          <Link key={url} href={`#${url}`} className={navStyles['nav-link']}>
            {text}
          </Link>
        );
      })}
    </div>
  );
};
export default Navigation;
