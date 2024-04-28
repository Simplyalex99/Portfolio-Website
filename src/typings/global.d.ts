declare module '*.yaml' {
  const yaml: {
    skillSection: {
      image: string;
      blurDataUrl: string;
      content: Array<{
        subheading: string;
        description: string;
        number: string;
        images: Array<{
          height: number;
          width: number;
          imageUrl: string;
          alt?: string;
        }>;
      }>;
    };
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
      images: Array<string>;
      blurDataUrls: Array<string>;
      firstContent: {
        imageUrl: string;
        firstText: string;
        secondText: string;
        highlight: string;
        blurDataUrl: string;
      };
      secondContent: {
        imageUrl: string;
        firstText: string;
        secondText: string;
        highlight: string;
        blurDataUrl: string;
      };
      thirdContent: {
        imageUrl: string;
        firstText: string;
        secondText: string;
        highlight: string;
        blurDataUrl: string;
      };
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
