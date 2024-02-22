import Link from 'next/link';
import { playfairSC } from '@/fonts';
import missionStyles from '@/styles/components/Mission.module.scss';
import Image from 'next/image';
import { LinkIds, Links } from '@/enums';
import yaml from '@/templates/home.yaml';
import { Button } from '../common/Button';

export const MissionSection = (props: typeof yaml.missionSection) => {
  const { firstContent, secondContent, thirdContent, blurDataUrls } = props;
  return (
    <section className={missionStyles.container} id={LinkIds.MISSION_ID}>
      <div className={missionStyles.background} />
      <div className={missionStyles['title-wrapper']}>
        <p className={missionStyles.subheading}>
          Taking code to the next level with
        </p>
        <h2 className={playfairSC.className}>MY MISSION AND VALUES</h2>
        <Link href={Links.CONTACT_PATH}>
          <Button type="button" className={missionStyles['get-in-touch-btn']}>
            Get in touch
          </Button>
        </Link>
      </div>

      <div className={missionStyles.grid}>
        <div className={missionStyles.left}>
          <div className={missionStyles['img-wrap-1']}>
            <Image
              fill
              placeholder="blur"
              blurDataURL={blurDataUrls[0]}
              sizes="(min-width: 2000px) 317px, (min-width: 860px) calc(20.89vw - 17px), (min-width: 740px) 334px, (min-width: 400px) 46.88vw, calc(17.5vw + 108px)"
              alt="beautiful web design"
              className={missionStyles.img}
              src={firstContent.imageUrl}
            />
          </div>
          <div
            className={`${missionStyles['flex-content']} ${missionStyles['flex-end']}`}
          >
            <div className={missionStyles['content-1']}>
              {secondContent.firstText}
              <span className={missionStyles.highlight}>
                {' '}
                {secondContent.highlight}{' '}
              </span>
              {secondContent.secondText}
            </div>
          </div>

          <div className={missionStyles['img-wrap-2']}>
            <Image
              fill
              placeholder="blur"
              blurDataURL={blurDataUrls[2]}
              sizes="(min-width: 2000px) 317px, (min-width: 860px) calc(20.89vw - 17px), (min-width: 740px) 334px, (min-width: 400px) 46.88vw, calc(17.5vw + 108px)"
              className={missionStyles.img}
              src={thirdContent.imageUrl}
              alt="camera"
            />
          </div>
        </div>
        <div className={missionStyles.right}>
          <div className={missionStyles['flex-content']}>
            <div className={missionStyles['content-2']}>
              {firstContent.firstText}
              <span className={missionStyles.highlight}>
                {' '}
                {firstContent.highlight}{' '}
              </span>
              {firstContent.secondText}
            </div>
          </div>
          <div className={missionStyles['img-wrap-3']}>
            <Image
              fill
              placeholder="blur"
              blurDataURL={blurDataUrls[1]}
              sizes="(min-width: 2000px) 317px, (min-width: 860px) calc(20.89vw - 17px), (min-width: 740px) 334px, (min-width: 400px) 46.88vw, calc(17.5vw + 108px)"
              alt="coding"
              className={missionStyles.img}
              src={secondContent.imageUrl}
            />
          </div>

          <div className={missionStyles['flex-content']}>
            <div className={missionStyles['content-3']}>
              {thirdContent.firstText}
              <span className={missionStyles.highlight}>
                {' '}
                {thirdContent.highlight}{' '}
              </span>
              {thirdContent.secondText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MissionSection;
