import { Button } from "@/components/ui/button"
import Image from "next/image"

type SubmitButtonProps = {
  isPending: boolean
  className?: string
  children: React.ReactNode
}

export const SubmitButton = ({
  children,
  className,
  isPending,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isPending}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isPending ? (
        <div className="flex items-center gap-4">
          <Image
            className="animate-spin"
            src={"/assets/icons/loader.svg"}
            alt={"loader"}
            width={24}
            height={24}
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  )
}
