declare module '*.yaml' {
  const yaml: {
    skillSection: {
      image: string;
      blurDataUrl: string;
      content: Array<{
        subheading: string;
        description: string;
        number: string;
        icons: Array<string>;
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
    workSection: {
      images: Array<string>;
      blurDataUrls: Array<string>;
      content: Array<{
        testimonial?: string;
        jobType?: string;
        author?: string;
        title: string;
        accent: string;
        text: string;
        description: string;
        imageUrl: string;
        blurDataUrl: string;
        linkUrl: string;
      }>;
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
    };
  };
  export default yaml;
}
