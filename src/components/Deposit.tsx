import { Box } from "@mui/material"
import { CircleButton } from "./Buttons/ButtonVariations/CircleButton"
import { DepositFromCard } from "./DepositFromCard/DepositFromCard"
import { depositScreenButtons } from "@/components/Buttons/ButtonLayouts/DepositScreenButtons"

export const Deposit = () => {
  return (
    <Box
    sx={{
      backgroundColor: "depositScreenBG.main",
      pl: 2,
      pr: 2,
      height: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: 1,
        width: "100%",
        pt: 2,
        pb: 2,
      }}
    >
      {depositScreenButtons.map((button) => (
        <Box
          display="flex"
          alignItems="start"
          justifyContent="center"
          key={button.title}
          sx={{ display: "flex", width: "calc(23% - 1px)", color: "white" }}
          mt={2}
          mb={1}
        >
          <CircleButton
            icon={button.icon || <Box sx={{ width: 24, height: 24 }} />}
            title={button.title}
            styles={{ fontSize: "14px" }}
          />
        </Box>
      ))}
    </Box>
    <DepositFromCard />
  </Box>
  )
}
