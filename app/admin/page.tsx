import Link from "next/link";
import { PageContainer } from "../components";
import { ArrowRight, Trash } from "lucide-react";
import { rootDomain, tenants } from "@/src/lib";

export default function SchoolsList() {
    return (
        <PageContainer className="bg-teal-50 pt-30 h-screen">
            <div className="space-y-5">
                <div className="flex justify-between items-center gap-5">
                    <div className="font-semibold text-2xl">List of Registered Schools</div>
                    <div>Schooler</div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {
                        Array.from(tenants).map((item, idx) => (
                            <div key = {`ghchgjkhchfj_${idx}`} className="bg-white flex flex-col justify-between gap-10 p-5 rounded-md border border-gray-100">
                                <div className="flex justify-between gap-2 items-center">
                                    <span className="font-bold">{item[1].name}</span>
                                    <button><Trash size={12} /></button>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between gap-2 items-center">
                                        <span className="font-bold text-2xl">{item[1].icon}</span>
                                        <span className="text-xs text-gray-400">Created: {item[1].createdAt}</span>
                                    </div>
                                    <Link target="_blank" href={`http://${item[0]}.${rootDomain}`} className="text-xs text-indigo-800 flex items-center gap-1">
                                        <span>Open School</span>
                                        <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </PageContainer>
    )
}