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

// eslint-disable-next-line import/no-anonymous-default-export
export type { ApiResponse, Experience };
