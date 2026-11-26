'use client'

import { Button, Description, FieldError, Form, Input, Label, Surface, TextField } from "@heroui/react";

export default function Home() {

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
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-center">
          {/* <Image width={100} height={1} className="w-50" src="/graduation_cap.jpg" loading="eager" alt="tenant_icon" /> */}
          <h2 className="font-semibold text-2xl">Schooler</h2>
          <div className="text-gray-400 text-sm">Create your school account</div>
        </div>
        <Surface className="min-w-[320px] flex items-center p-10 rounded-xl shadow-sm border border-gray-100" variant="default">
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
              <Label>School Domain</Label>
              <div className="flex items-center w-full border border-gray-100 rounded-lg overflow-hidden">
                <Input placeholder="school-domain.com" className={`p-3.5 grow shrink shadow-none rounded-none hover:bg-transparent outline-none border-0 ring-0`} />
                <div className="basis-auto shrink-0 grow-0 bg-gray-100 h-12.5 flex items-center justify-center px-3">vercel.pub</div>
              </div>
              <FieldError />
            </TextField>

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
              <Label>Logo</Label>
              <div className="flex items-center w-full border border-gray-100 rounded-lg overflow-hidden">
                <div className="grow shrink px-3 text-sm">No emoji selected</div>
                <div className="basis-auto shrink-0 grow-0 h-12.5 flex items-center justify-center px-3">
                  <Button size="sm" variant="secondary"><span>😊</span>Select emoji</Button>
                </div>
              </div>
              <Description>Select an emoji to represent your school domain</Description>
              <FieldError />
            </TextField>

            <Button className={`w-full`} onPress={() => console.log("Button pressed")}>
              Create Account
            </Button>
          </Form>
        </Surface>
      </div>
    </div>
  );
}
