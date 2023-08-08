import { ReferralCreate, ReferralListItem, ReferralPayload } from 'types/referral';

export const ReferralCreateDefault: ReferralCreate = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  addressLine1: "",
  addressLine2: "",
  suburb: "",
  state: "",
  postCode: "",
  country: undefined,
};

export const ReferralListItemDefault: ReferralListItem = {
  ...ReferralCreateDefault,
  "_id": "",
}

export const ReferralPayloadDefault: ReferralPayload = {
  pageNumber: 1,
  pageSize: 10,
  paginatedData: [],
  totalCount: 0,
  totalPages: 0,
}