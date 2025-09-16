import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Brand from "./features/searchbar/components/brand";
import Searchbar from "./features/searchbar/components/searchbar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="h-full flex flex-col justify-center items-center m-auto">
          <Searchbar />
          <Brand />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
