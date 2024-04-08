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
        texts: Array<string>;
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
      maskTitle: string;
      maskSubtitle: string;
      modalSuccess: { title: string; description: string };
      modalError: { title: string; description: string };
    };
  };
  export default yaml;
}
