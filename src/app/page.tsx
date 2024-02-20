import { getBase64 } from '@/serverUtils';
import yaml from '@/templates/home.yaml';
import {
  HeroSection,
  SEO,
  WorkSection,
  MissionSection,
  SkillSection,
} from '@/components';
export const Home = async () => {
  const data = { ...yaml };
  const srcPrefix = './public';
  const getBase64Helper = async (images: Array<string>) => {
    let base64Promises = images.map((src) => getBase64(`${srcPrefix}${src}`));
    let base64Results = await Promise.all(base64Promises);
    return base64Results;
  };
  (data.mainSection.blurDataUrl = await getBase64(
    `${srcPrefix}${data.mainSection.image}`
  )),
    (data.workSection.blurDataUrls = (await getBase64Helper(
      data.workSection.images
    )) as unknown as string[]);
  data.missionSection.blurDataUrls = (await getBase64Helper(
    data.missionSection.images
  )) as unknown as string[];
  data.skillSection.blurDataUrl = await getBase64(
    `${srcPrefix}${data.skillSection.image}`
  );

  return (
    <>
      <div className="wrapper">
        <SEO title="about Alex" description="beautiful portfolio  design" />
        <HeroSection {...data.mainSection} />
        <WorkSection {...data.workSection} />
      </div>
      <MissionSection {...data.missionSection} />
      <div className="wrapper">
        <SkillSection {...data.skillSection} />
      </div>
    </>
  );
};
export default Home;
