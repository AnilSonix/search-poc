import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import type { PropsWithChildren } from "react";
import {
  SearchBarProvider,
  useSearchBarContext,
} from "../contexts/searchbar-provider";
import Header from "./header";
import SearchBarTabs from "./searchbar-tabs";
type Props = {};

export default function Searchbar({}: Props) {
  return (
    <SearchBarProvider>
      <Resizer>
        <Header />
        <SearchBarTabs />
      </Resizer>
    </SearchBarProvider>
  );
}

const MotionCard = motion.create(Card);
function Resizer({ children }: PropsWithChildren) {
  const { opened } = useSearchBarContext();

  return (
    <MotionCard
      animate={{
        height: opened ? "24rem" : "3.5rem",
        width: "40rem",
      }}
      className="py-0"
    >
      {children}
    </MotionCard>
  );
}
