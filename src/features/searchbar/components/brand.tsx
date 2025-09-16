import { Button } from "@/components/ui/button";
import { Github, LinkedinIcon } from "lucide-react";

export default function Brand() {
  return (
    <>
      <div className="flex gap-3 mt-3">
        <a href="https://github.com/AnilSonix/search-poc" target="_blank">
          <Button variant={"outline"}>
            <Github />
            View source
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/anilsonix/" target="_blank">
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
