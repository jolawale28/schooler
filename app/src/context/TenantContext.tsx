"use client";

import { School } from "@/app/types";
import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

type RegisterSchoolInput = {
    schoolName: string;
    adminName: string;
    email: string;
};

type TenantContextType = {
    schools: School[];
    registerSchool: (data: RegisterSchoolInput) => School;
    getSchoolBySlug: (slug: string) => School | undefined;
};

const TenantContext = createContext<TenantContextType | undefined>(
    undefined
);

export function TenantProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [schools, setSchools] = useState<School[]>([]);

    const registerSchool = (
        data: RegisterSchoolInput
    ): School => {
        const slug = data.schoolName
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        const school: School = {
            id: crypto.randomUUID(),
            name: data.schoolName,
            slug,
            admin: {
                id: crypto.randomUUID(),
                name: data.adminName,
                email: data.email,
            },
        };

        setSchools((current) => [...current, school]);

        return school;
    };

    const getSchoolBySlug = (slug: string) => {
        return schools.find((school) => school.slug === slug);
    };

    return (
        <TenantContext.Provider
            value={{
                schools,
                registerSchool,
                getSchoolBySlug,
            }}
        >
            {children}
        </TenantContext.Provider>
    );
}

export function useTenant() {
    const context = useContext(TenantContext);

    if (!context) {
        throw new Error(
            "useTenant must be used within a TenantProvider"
        );
    }

    return context;
}