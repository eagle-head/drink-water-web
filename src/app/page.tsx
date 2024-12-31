import Box from "@mui/material/Box";

import CircularWithValueLabel from "@/components/ui/circular-progress-bar";
import { DrinkButton } from "@/components/ui/drink-button";

export default async function HomePage() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1} flexDirection="column">
      <CircularWithValueLabel />
      <DrinkButton />
    </Box>
  );
}
