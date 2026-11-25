'use client'

import { Button, Checkbox, Description, FieldError, Form, Input, Label, Surface, TextField } from "@heroui/react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Surface className="min-w-[320px] flex items-center p-10 rounded-md" variant="default">
        <Link href = "/sign-in" className="flex-1 font-semibold">Sign In</Link>
        <Link href = "/sign-up" className="flex-1 font-semibold">Create Account</Link>
      </Surface>
    </div>
  );
}
