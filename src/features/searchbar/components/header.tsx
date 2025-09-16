import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon, Search } from "lucide-react";
import { useSearchBarContext } from "../contexts/searchbar-provider";

export default function Header() {
  const { query, text, setText, opened, setOpened } = useSearchBarContext();
  return (
    <div className="flex items-center p-2 px-3">
      {query.isFetching ? <Loader2Icon className="animate-spin" /> : <Search />}

      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-transparent shadow-none border-0 focus-visible:ring-0 flex-1"
        placeholder="Type to search"
        onFocus={() => setOpened(true)}
      />
      {opened ? (
        <Button
          variant={"link"}
          onClick={() => {
            setOpened(false);
            setText("");
          }}
        >
          Clear
        </Button>
      ) : (
        <div className="flex items-center">
          <Badge variant={"secondary"} className="ml-auto">
            S
          </Badge>
          <p className="text-sm text-gray-500"> Quick access</p>
        </div>
      )}
    </div>
  );
}
