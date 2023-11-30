import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import SignInForm from "@/components/signin/SignInForm";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`
};

export default function SignIn() {
  return (
    <main className="flex h-[100vh] w-full items-center justify-center">
      <section className="w-full sm:w-[400px]">
        <SignInForm />
      </section>
    </main>
  );
}
