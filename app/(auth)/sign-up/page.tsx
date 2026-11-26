'use client'

import { useTenant } from "@/app/src";
import { Button, FieldError, Form, Input, Label, Surface, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {

    const router = useRouter()

    const { schools, registerSchool } = useTenant();
    console.log(schools, " :: schools")

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const school = registerSchool({
            schoolName: String(formData.get("school_name")),
            adminName: String(formData.get("admin_name")),
            email: String(formData.get("school_email")),
        });
        console.log(school, " :: school")

        // router.push(`http://${school.slug}.${window.location.host}/sign-in`)
    };

    return (
        <div className="space-y-10 flex flex-col items-center justify-center h-screen">
            {
                schools.map(sch => sch.slug).join(", ")
            }
            <div>
                <Image width={100} height={1} className="w-50" src="/graduation_cap.jpg" loading="eager" alt="tenant_icon" />
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
                        name="admin_name"
                        type="text"
                    >
                        <Label>Admin name</Label>
                        <Input placeholder="" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="school_email"
                        type="email"
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