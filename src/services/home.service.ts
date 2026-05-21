import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface HomeData {
  hero: {
    background_image: string;
    title: {
      top_text: string;
      middle_text: string;
      bottom_text: string;
    };
    description: string;
    buttons: {
      text: string;
      endpoint: string;
    }[];
    stats: {
      icon: string;
      text_1: string;
      text_2: string;
    }[];
  };
  mission: {
    title: string;
    logo: string;
    left: {
      icon: string;
      title: string;
      description: string;
      content: string[];
    };
    right: {
      icon: string;
      title: string;
      description: string;
      content: string[];
    };
  };
  about_iwmc: {
    background_image: string;
    title: string;
    description: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  programs: {
    title: string;
    description: string;
    training_programs: {
      image: string;
      title: string;
      description: string;
      age: string;
      color: string;
      link: string;
    }[];
  };
  news: {
    title: string;
    description: string;
  };
  bottom_cta: {
    text_1: string;
    text_2: string;
  };
}

const SLUG = "home";

export const HomeService = {
  async getData(): Promise<HomeData | null> {
    const data = await getACFDataBySlug<HomeData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        buttons: Object.values(data.hero?.buttons || {}),
        stats: Object.values(data.hero?.stats || {}),
      },
      mission: {
        ...data.mission,
        left: {
          ...data.mission?.left,
          content: Object.values(data.mission?.left?.content || {}),
        },
        right: {
          ...data.mission?.right,
          content: Object.values(data.mission?.right?.content || {}),
        },
      },
      about_iwmc: {
        ...data.about_iwmc,
        stats: Object.values(data.about_iwmc?.stats || {}),
      },
      programs: {
        ...data.programs,
        training_programs: Object.values(
          data.programs?.training_programs || {},
        ),
      },
    };
  },
};
