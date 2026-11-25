'use client'

import { Button, Description, FieldError, Form, Input, Label, Surface, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {

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
            <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6 border border-gray-100" variant="default">
                <h3 className="text-base font-semibold text-foreground">Register School account</h3>
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="school_name"
                        type="text"
                    >
                        <Label>School name</Label>
                        <Input placeholder="" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="school_id"
                        type="text"
                    >
                        <Label>Unique ID</Label>
                        <Input placeholder="" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="school_id"
                        type="text"
                    >
                        <Label>School Email</Label>
                        <Input placeholder="" />
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className="w-full py-5" size="lg">
                            Create Account
                        </Button>
                    </div>
                </Form>
                <div className="text-sm text-center">
                    Have an Account? <Link href="/sign-in" className="font-semibold">Sign In</Link>
                </div>
            </Surface>
        </div>
    )
}