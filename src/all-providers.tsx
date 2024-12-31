import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import theme from "./theme";

interface AllProvidersProps {
  children: React.ReactNode;
}

export default function AllProviders({ children }: AllProvidersProps): React.JSX.Element {
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}
