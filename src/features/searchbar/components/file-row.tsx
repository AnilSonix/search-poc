import CopyToClipboard from "@/components/comp-105";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, FileIcon, Folder } from "lucide-react";

type Props = {
  className?: string;
  filename: string;
  location: string;
  link: string;
};

export default function FileRow({
  className,
  filename,
  location,
  link,
}: Props) {
  return (
    <div className={cn("group flex gap-3 p-2 items-center", className)}>
      <div className="bg-gray-300 rounded-xl w-12 h-12 grid items-center justify-center">
        <FileIcon />
      </div>
      <div className="flex flex-1">
        <div>
          <p className="font-semibold">{filename}</p>
          <div className="flex items-center gap-2">
            <Folder size={16} />
            <p className="text-gray-700 text-sm">{location}</p>
          </div>
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
