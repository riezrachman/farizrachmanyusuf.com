type ApiResponse = {
  error: boolean;
  message: string;
  data?: any;
};

type Experience = {
  company: string;
  position: string;
  startAt: Date;
  endAt?: Date;
  jobDescription: string[];
};

type Work = {
  name: string;
  description?: string | null;
  associate: string;
  image?: string | null;
  url?: string | null;
};

// eslint-disable-next-line import/no-anonymous-default-export
export type { ApiResponse, Experience, Work };
