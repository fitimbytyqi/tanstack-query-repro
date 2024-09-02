"use client";

import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";

export default function LoginForm() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess(data) {
      console.log("Local Success: ", data);
    },
    onError(error) {
      console.log("Local Error: ", error);
    },
  });

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const email = emailRef.current,
            password = passwordRef.current;

          mutate({ email, password });
        }}
      >
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => {
                emailRef.current = e.currentTarget.value;
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              onChange={(e) => {
                passwordRef.current = e.currentTarget.value;
              }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
