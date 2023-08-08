export interface ReferralCreate {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  addressLine1: string;
  addressLine2?: string;
  suburb?: string;
  state?: string;
  postCode?: string;
  country?: string;
}

export interface ReferralListItem extends ReferralCreate {
  "_id": string
}

export interface ReferralPayload {
  pageNumber: number;
  pageSize: number;
  paginatedData: ReferralListItem[],
  totalCount: number;
  totalPages: number;
}