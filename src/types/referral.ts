export interface ReferralCreate {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  address1: string;
  address2?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
  country: string;
}