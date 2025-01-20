import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-10 pt-20 md:p-10 md:pt-24">
      <div className="w-full max-w-sm md:max-w-4xl pb-20">
        <SignupForm />
      </div>
    </div>
  )
}
