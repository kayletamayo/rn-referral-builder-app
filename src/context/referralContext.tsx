import { ReferralPayloadDefault } from '@app/defaults/referral';
import { ReferralPayload } from '@app/types/referral';
import React, { Dispatch, ReactNode, SetStateAction, createContext, useState, useContext, useReducer } from "react";

export interface PropsType {
  children: ReactNode;
}

export interface Context {
  referrals: ReferralPayload;
}

const ReferralContext = createContext({
  referrals: ReferralPayloadDefault,
  onReferralsChange: (data: ReferralPayload) => {},
});

const initialState = {
  referrals: ReferralPayloadDefault
}

const ReferralReducer = (state: any, action: any) => {
  const { type, payload } = action;
  let newState = { ...state };

  switch (type) {
    case "getReferral":
      return {
        ...newState,
        referrals: payload,
      };
    default:
      return initialState;
  }
}

export const ReferralProvider = ({ children }: PropsType) => {
  const [state, dispatch] = useReducer(ReferralReducer, initialState);

  const onReferralsChange = (data: ReferralPayload) => {
    dispatch({ type: "getReferral", payload: data })
  }

  return (
    <ReferralContext.Provider
      value={{ referrals: state.referrals, onReferralsChange }}
    >
      {children}
    </ReferralContext.Provider>
  );
}

export const useReferralState = () => {
  return useContext(ReferralContext);
}