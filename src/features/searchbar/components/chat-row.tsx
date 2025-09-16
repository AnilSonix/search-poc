import CopyToClipboard from "@/components/comp-105";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type Props = {
  className?: string;
  sender: string;
  message: string;
  link: string;
};

export default function ChatRow({ className, sender, message, link }: Props) {
  return (
    <div className={cn("group flex gap-3 p-2 items-center", className)}>
      <div className="relative">
        <Avatar className="w-11 h-11 rounded-xl">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Kelly King"
            className="rounded-xl"
          />
          <AvatarFallback>KK</AvatarFallback>
        </Avatar>
        <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500">
          <span className="sr-only">Online</span>
        </span>
      </div>
      <div className="flex flex-1">
        <div>
          <p className="font-semibold">{sender}</p>
          <p className="text-gray-700 text-sm">{message}</p>
        </div>
      </div>
      <div className={cn("ml-auto invisible group-hover:visible")}>
        <CopyToClipboard text="Some link here" />

        <Button variant={"ghost"} size={"sm"} className="text-gray-500">
          <ExternalLink /> New Tab
        </Button>
      </div>
    </div>
  );
}
