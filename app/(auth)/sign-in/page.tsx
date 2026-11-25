'use client'

import { Button, Description, FieldError, Form, Input, Label, Surface, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };

    return (
        <div className="space-y-10 flex flex-col items-center justify-center h-screen">
            <div>
                <Image width={100} height={1} className="w-50" src = "/graduation_cap.jpg" loading="eager" alt = "tenant_icon" />
            </div>
            <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="default">
                <h3 className="text-base font-semibold text-foreground">Please login</h3>
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <div className="text-sm text-center">
                    No Account? <Link href="/sign-up" className="font-semibold">Create account</Link>
                </div>
            </Surface>
        </div>
    )
}