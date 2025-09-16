import { useQuery } from "@tanstack/react-query";
import { search } from "../utils/search";

type Props = {
  query: string;
  enabled?: boolean;
};

export default function useSearch(props: Props) {
  return useQuery({
    queryKey: ["search", props],
    queryFn: () => search(props),
    enabled: Boolean(props.enabled),
  });
}
