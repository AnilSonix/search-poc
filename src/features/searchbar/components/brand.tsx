import { Button } from "@/components/ui/button";
import { Github, LinkedinIcon } from "lucide-react";

export default function Brand() {
  return (
    <>
      <div className="flex gap-3 mt-3">
        <a href="" target="_blank">
          <Button variant={"outline"}>
            <Github />
            View source
          </Button>
        </a>
        <a href="" target="_blank">
          <Button variant={"outline"}>
            <LinkedinIcon />
            Linkedin
          </Button>
        </a>
      </div>
      <p className="mt-4 text-gray-500">
        Built with shadcn + vite + framer motion
      </p>
    </>
  );
}
