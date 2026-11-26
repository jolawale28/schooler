import { Suspense } from "react";
import { PageContainer } from "../../components";
import { getTenant } from "@/src/lib/tenants";
import { rootDomain } from "@/src/lib";

async function TenantDetails({ params }: { params: Promise<{ tenant_id: string }> }) {
    const { tenant_id } = await params;
    const tenant = getTenant(tenant_id)

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-7xl">{tenant?.icon}</div>
            <div className="font-semibold text-2xl">Welcome to {tenant_id}.{rootDomain}</div>
            <div className="text-xs text-gray-400">Official web portal for {tenant?.name}</div>
        </div>
    )
}

export default async function TenantProfilePage({
    params,
}: {
    params: Promise<{ tenant_id: string }>;
}) {
    return (
        <PageContainer className="bg-teal-50 pt-30 h-screen flex items-center justify-center">
            <Suspense>
                <TenantDetails params={params} />
            </Suspense>
        </PageContainer>
    )
}