import { Skeleton } from "@/components/ui/skeleton";

export default function ItemSkeleton() {
  return (
    <div className="flex gap-2">
      <Skeleton className="h-[50px] w-[50px] rounded-xl" />
      <div className="flex flex-col flex-1 gap-2">
        <Skeleton className="h-[20px] w-[200px] rounded-xl" />
        <Skeleton className="h-[10px] w-[200px] rounded-xl" />
      </div>
    </div>
  );
}
