import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface FooterData {
  top: {
    column_1: {
      logo: string;
      text: string;
    };
    column_2: {
      title: string;
      links: {
        text: string;
        endpoint: string;
      }[];
    };
    column_3: {
      title: string;
      address: string;
      phone: string;
      mail: string;
      link_facebook: string;
      link_youtube: string;
      link_linkedin: string;
    };
    column_4: {
      title: string;
      description: string;
    };
  };
  bottom: {
    left: {
      text: string;
    };
    right: {
      links: {
        text: string;
        endpoint: string;
      }[];
    };
  };
}

const SLUG = "footer";

export const FooterService = {
  async getData(): Promise<FooterData | null> {
    const data = await getACFDataBySlug<FooterData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      top: {
        ...data.top,
        column_2: {
          ...data.top?.column_2,
          links: Object.values(data.top?.column_2?.links || {}),
        },
      },
      bottom: {
        ...data.bottom,
        right: {
          ...data.bottom?.right,
          links: Object.values(data.bottom?.right?.links || {}),
        },
      },
    };
  },
};
