declare module '*.yaml' {
  const yaml: {
    projectSection: {
      mobileImages: Array<string>;
      blurMobileDataUrls: Array<string>;
      cardImages: Array<string>;
      blurCardDataUrls: Array<string>;
      heading: string;
      content: Array<{
        title: string;
        imageUrl: string;
        linkUrl: string;
        backgroundColor: string;
        variant: 'left' | 'right';
      }>;
    };
    mainSection: {
      subheading: string;
      heading: string;
      headingAccent: string;
      description: string;
      image: string;
      blurDataUrl: string;
    };
    missionSection: {
      heading: string;
      images: Array<string>;
      blurDataUrls: Array<string>;
      content1: {
        description: string;
        imageUrl: string;
        alt: string;
      };
      content2: {
        description: string;
        imageUrl: string;
        alt: string;
      };
      content3: {
        description: string;
        imageUrl: string;
        alt: string;
      };
    };
    testimonialSection: {
      content: Array<{
        description: string;
        linkUrl: string;
        company: string;
        author: string;
        role: string;
      }>;
    };
    skillSection: {
      imageUrl: string;
      blurDataUrl: string;
      subheading: string;
      description: string;
      alt: string;
    };
    contactSection: {
      title: string;
      subtitle: string;
      image: string;
      blurDataUrl: string;
      maskTitle: string;
      maskSubtitle: string;
      modalSuccess: { title: string; description: string };
      modalError: { title: string; description: string };
    };
  };
  export default yaml;
}
