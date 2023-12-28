import { useCallback, useEffect } from "react";

import {
  REQ_ACTIVE_ACCOUNT_STAT_DATA,
  IStatsTabs,
  S_ACCOUNT_STAT_READY,
  S_ACCOUNT_STAT_TAB_CHANGED,
} from "@/managers/AccounHomeManager";

interface IUseTabUpdater {
  onTabUpdate: (tab: keyof IStatsTabs) => void;
}

export const useTabUpdater = ({ onTabUpdate }: IUseTabUpdater) => {
  const updateCurrencies = useCallback(async (): Promise<void> => {
    try {
      const newCurrencies = await REQ_ACTIVE_ACCOUNT_STAT_DATA.request();

      if (!newCurrencies?.currencyStats) return;

      onTabUpdate(newCurrencies.type as keyof IStatsTabs);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  }, [onTabUpdate]);

  useEffect(() => {
    S_ACCOUNT_STAT_READY.subscribe(updateCurrencies, "AccountsBalanceStat");
    S_ACCOUNT_STAT_TAB_CHANGED.subscribe(
      updateCurrencies,
      "AccountsBalanceStat"
    );

    return () => {
      S_ACCOUNT_STAT_READY.unsubscribe("AccountsBalanceStat");
      S_ACCOUNT_STAT_TAB_CHANGED.unsubscribe("AccountsBalanceStat");
    };
  }, [updateCurrencies]);
};
