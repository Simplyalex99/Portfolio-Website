import { ContactSection } from '@/components';
import { getBase64 } from '@/serverUtils';
import yaml from '@/templates/home.yaml';

const Page = async () => {
  const srcPrefix = './public';
  const data = yaml.contactSection;
  const blurDataURL = await getBase64(
    `${srcPrefix}${yaml.contactSection.image}`
  );
  data.blurDataUrl = blurDataURL;

  return <ContactSection {...data} />;
};
export default Page;
