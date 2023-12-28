import { Box, Typography } from "@mui/material";
import { RectangleButton } from "@/components/Buttons/ButtonVariations/RectangleButton";
import { DepositFromCardButtons } from "@/components/Buttons/ButtonLayouts/DepositFromCard";

export const DepositFromCard = () => {
  return (
    <Box>
      <Box>
        <Typography
          variant="h4"
          sx={{ fontSize: "18px", color: "white", fontWeight: "bold" }}
        >
          Deposit from Card
        </Typography>
      </Box>
      <Box display="flex" gap={1.5}>
        {DepositFromCardButtons.map((button) => (
          <Box
            display="flex"
            alignItems="start"
            justifyContent="center"
            onClick={button?.onClick}
            key={button.title}
            sx={{
              display: "flex",
              width: "150px",
              borderRadius: "4px",
              color: "white",
              height: "100%",
            }}
            mt={2}
            mb={1}
          >
            <RectangleButton
              width={36}
              height={36}
              icon={button.icon}
              title={button.title}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
