import Link from 'next/link';
import { LinkIds, HeroLinksTestIds } from '@/enums';
import navStyles from '@/styles/components/Navigation.module.scss';

const Links: Array<{ text: string; url: string; testId?: string }> = [
  {
    text: 'Contributions & Projects',
    url: LinkIds.WORK_ID,
    testId: HeroLinksTestIds.PROJECTS,
  },
  {
    text: 'Why hire me?',
    url: LinkIds.MISSION_ID,
    testId: HeroLinksTestIds.MISSION,
  },
  {
    text: 'My Skills',
    url: LinkIds.SKILLS_ID,
    testId: HeroLinksTestIds.SKILLS,
  },
];
export const Navigation = () => {
  return (
    <div className={navStyles['nav-link-wrapper']}>
      {Links.map((items) => {
        const { text, url, testId } = items;
        return (
          <Link
            key={url}
            href={`#${url}`}
            className={navStyles['nav-link']}
            data-testid={testId}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
};
export default Navigation;
