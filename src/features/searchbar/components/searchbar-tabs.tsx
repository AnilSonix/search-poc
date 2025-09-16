import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "motion/react";
import { useSearchBarContext } from "../contexts/searchbar-provider";
import SettingsMenu from "./settings-menu";

export default function SearchBarTabs() {
  const { isVisible, tabs, query, opened } = useSearchBarContext();

  return (
    <AnimatePresence>
      {opened ? (
        <motion.div className="overflow-hidden" exit={{ opacity: 0 }}>
          <Tabs defaultValue="all">
            <TabsList className="text-foreground  h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1 w-full">
              {tabs.map((t) => (
                <TabsTrigger
                  value={t.id}
                  className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  key={t.id}
                  disabled={!isVisible(t.id)}
                >
                  {t.icon && (
                    <t.icon
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                  )}
                  {t.label}
                  {/* @ts-ignore */}
                  {query.data && query.data[t.id] && (
                    <Badge
                      className="bg-primary/15 ms-1.5 min-w-5 px-1 rounded-sm"
                      variant="secondary"
                    >
                      3
                    </Badge>
                  )}
                </TabsTrigger>
              ))}

              <SettingsMenu />
            </TabsList>

            {tabs.map((t) => (
              <TabsContent
                value={t.id}
                key={t.id}
                className="flex flex-col gap-2 my-2 mx-8"
              >
                {<t.content />}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
