export interface LoginRq {
  email: string;
  password: string;
}

export interface LoginRs {
  accessToken: string;
}
