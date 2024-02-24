import { ContactSection } from '@/components';
import { getBase64 } from '@/serverUtils';
import yaml from '@/templates/home.yaml';

const Page = async () => {
  const srcPrefix = './public';

  const blurDataURL = await getBase64(
    `${srcPrefix}${yaml.contactSection.image}`
  );
  const data = yaml.contactSection;
  data.blurDataUrl = blurDataURL;

  return <ContactSection {...data} />;
};
export default Page;
