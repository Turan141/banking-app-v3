import { useState } from "preact/hooks";
import { Box } from "@mui/material";
import { useTabUpdater } from "@/hooks/useTabUpdater";
import { BaseScreen } from "@/screens/bases/BaseScreen";
import { IStatsTabs, REQ_ACCOUNT_GET_HOME, StatsToRender } from "@/managers/AccounHomeManager";
import { AccountHead } from "@/components/AccountHead";
import { Loading } from "@/components/Reusable/Loading";
import { MainContainer } from "@/components/Containers/MainContainer";
import { BottomMenu } from "@/components/BottomMenu";
import { StatsContainer } from "@/components/Containers/AccountScreenContainers/StatsContainer";
import { DukascoinContainer } from "@/components/Containers/AccountScreenContainers/DukascoinContainer";
import { TransactionsContainer } from "@/components/Containers/AccountScreenContainers/TransactionsContainer";
import AccountHomeStats from "@/components/AccountHomeStats";

export const AccountHomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<keyof IStatsTabs>(StatsToRender.ACCOUNT);
  const [accountHomeData] = REQ_ACCOUNT_GET_HOME.useRequest(() => setIsLoading(false)); // fetch from db
  console.log(accountHomeData);

  useTabUpdater({ onTabUpdate: setCurrentTab });

  if (isLoading) return <Loading />;

  return (
    <BaseScreen head={<AccountHead />} bottom={<BottomMenu />} sx={{ pt: 8 }}>
      <Box sx={{ pt: 1, pb: 1, display: "flex", flexDirection: "column" }}>
        <AccountHomeStats />
      </Box>

      <MainContainer>
        <StatsContainer />
      </MainContainer>

      <MainContainer
        shouldShow={currentTab === StatsToRender.ACCOUNT}
        title="Dukascoin"
      >
        <DukascoinContainer />
      </MainContainer>

      <MainContainer
        shouldShow={currentTab === StatsToRender.ACCOUNT}
        title="Latest Transactions"
      >
        <TransactionsContainer />
      </MainContainer>
    </BaseScreen>
  );
};
