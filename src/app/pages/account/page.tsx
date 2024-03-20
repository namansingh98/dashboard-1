import { Separator } from "@/components/ui/separator"
import { Profile } from "@/app/pages/account/profile"

export default function Account() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <Profile />
    </div>
  )
}
