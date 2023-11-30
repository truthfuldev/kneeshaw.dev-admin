"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Logo from "../layout/Logo";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email().min(5, {
    message: "Email must be at least 5 characters."
  }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters." })
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border px-4 py-8">
      <Logo />

      <h6 className="mb-8 text-2xl font-bold">Good to see you again.</h6>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input autoFocus placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant="link">
            <Link href="/forgot">Forgot your password?</Link>
          </Button>

          <Button type="submit">Sign In</Button>
        </form>
      </Form>
    </div>
  );
}
