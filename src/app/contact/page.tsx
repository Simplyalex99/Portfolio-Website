import { ContactSection, SEO } from '@/components';
import { getBase64 } from '@/serverUtils';
import yaml from '@/templates/home.yaml';

export const Contact = async () => {
  const srcPrefix = './public';

  const blurDataURL = await getBase64(
    `${srcPrefix}${yaml.contactSection.image}`
  );
  const data = yaml.contactSection;
  data.blurDataUrl = blurDataURL;

  return (
    <>
      <SEO title="contact page" />

      <ContactSection {...data} />
    </>
  );
};
export default Contact;
