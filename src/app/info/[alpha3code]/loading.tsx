import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-8">
      <div className="flex w-full items-center justify-between">
        <Skeleton className="h-9 w-16" />

        <Skeleton className="h-9 w-16" />
      </div>

      <div className="flex w-full flex-col gap-10 py-12 md:flex-row">
        <Skeleton className="aspect-[1.43] h-[293px] w-full sm:w-[440px]" />

        <div className="flex-1">
          <Skeleton className="mb-5 mt-7 h-6 w-24 md:mt-0" />

          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="flex w-full flex-col gap-y-2">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
            </div>

            <div className="flex w-full flex-col gap-y-2">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>

          <div className="mt-8">
            <Skeleton className="h-5 w-28" />

            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2">
              <Skeleton className="h-7 w-12" />
              <Skeleton className="h-7 w-12" />
              <Skeleton className="h-7 w-12" />
              <Skeleton className="h-7 w-12" />
            </div>
          </div>
        </div>
      </div>

      <Skeleton className="mt-12 h-96 w-full" />
    </div>
  )
}

export default Loading
