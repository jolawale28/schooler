"use client";

import type { ReactNode } from "react";
import { TenantProvider } from "../src";

export default function Providers({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <TenantProvider>
            {children}
        </TenantProvider>
    );
}