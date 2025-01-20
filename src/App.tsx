import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AshesOfWarPage } from "@/pages/AshesOfWar";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AshesOfWarPage />
    </QueryClientProvider>
  );
}

export default App;
