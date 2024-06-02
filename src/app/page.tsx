import { getBase64 } from '@/serverUtils';
import yaml from '@/templates/home.yaml';
import {
  HeroSection,
  WithSmoothScroll,
  MissionSection,
  TestimonialSection,
  SkillSection,
  ContactCTASection,
  ProjectSection,
} from '@/components';

const fetchImages = async () => {
  const data = { ...yaml };
  const srcPrefix = './public';
  const getBase64Helper = async (images: Array<string>) => {
    let base64Promises = images.map((src) => getBase64(`${srcPrefix}${src}`));
    let base64Results = await Promise.all(base64Promises);
    return base64Results;
  };

  data.missionSection.blurDataUrls = (await getBase64Helper(
    data.missionSection.images
  )) as unknown as string[];
  data.projectSection.blurDataUrls = (await getBase64Helper(
    data.projectSection.images
  )) as unknown as string[];
  return data;
};
const Page = async () => {
  const data = await fetchImages();

  return (
    <>
      <WithSmoothScroll>
        <div className="wrapper">
          <HeroSection />
        </div>
        <ProjectSection />
        <MissionSection {...data.missionSection} />
        <TestimonialSection />
        <SkillSection />
        <ContactCTASection />
      </WithSmoothScroll>
    </>
  );
};
export default Page;
