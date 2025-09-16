import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Settings } from "lucide-react";
import { useSearchBarContext } from "../contexts/searchbar-provider";

type Props = {};

export default function SettingsMenu({}: Props) {
  const { isVisible, toggleTab, tabs } = useSearchBarContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"ghost"}>
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-45">
        {tabs
          .filter((t) => t.configurable)
          .map((t) => (
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                toggleTab(t.id);
              }}
              key={t.id}
            >
              {t.icon && <t.icon />}
              <p>{t.label}</p>
              <Switch className="ml-auto" checked={isVisible(t.id)} />
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
