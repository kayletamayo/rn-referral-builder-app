import { ReferralCreate } from '@app/types/referral';
import { useState } from "react";
import { useFetch } from "@hooks/useFetch"
import { APP_ENDPOINTS } from '@constants/api';
import { useReferralState } from '@context/referralContext';

export const useReferral = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { fetchAPI } = useFetch();
  const { onReferralsChange } = useReferralState();

  const getReferrals = async (page: number = 1, pageSize: number = 10, search?: string) => {
    setLoading(true);
    const baseUri = `${APP_ENDPOINTS.REFERRALS}?pageNumber=${page}&pageSize=${pageSize}&orderBy=desc`;
    const uri = search ? `${baseUri}&search=${search}` : baseUri;
    const { response } = await fetchAPI({
      url: uri,
      method: "GET",
    });

    onReferralsChange(response);
    setLoading(false);
  };

  const createReferral = async(payload: ReferralCreate) => {
    setLoading(true);

    const { response, error } = await fetchAPI({
      url: `${APP_ENDPOINTS.REFERRALS}`,
      body: payload,
      method: 'POST',
    });

    await getReferrals();
    setLoading(false);

    return { response, error };
  }

  return {
    loading,
    getReferrals,
    createReferral,
  }
}