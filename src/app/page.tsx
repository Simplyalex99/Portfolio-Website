import { getBase64 } from '@/serverUtils';
import yaml from '@/templates/home.yaml';
import {
  HeroSection,
  ProjectSection,
  WithSmoothScroll,
  MissionSection,
  TestimonialSection,
  SkillSection,
  ContactCTASection,
} from '@/components';

const fetchImages = async () => {
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
    (data.projectSection.blurMobileDataUrls = (await getBase64Helper(
      data.projectSection.mobileImages
    )) as unknown as string[]);
  data.projectSection.blurCardDataUrls = (await getBase64Helper(
    data.projectSection.cardImages
  )) as unknown as string[];
  data.missionSection.blurDataUrls = (await getBase64Helper(
    data.missionSection.images
  )) as unknown as string[];

  return data;
};
const Page = async () => {
  const data = await fetchImages();

  return (
    <>
      <WithSmoothScroll>
        <div className="wrapper">
          <HeroSection {...data.mainSection} />
        </div>
        <ProjectSection {...data.projectSection} />
        <MissionSection {...data.missionSection} />
        <TestimonialSection />
        <SkillSection />
        <ContactCTASection />
      </WithSmoothScroll>
    </>
  );
};
export default Page;
