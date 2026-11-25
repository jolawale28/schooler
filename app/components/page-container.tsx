import { ReactNode } from "react";

function PageContainer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-[1440px]:px-[calc((100vw-1400px)/2)]">
            {children}
        </div>
    );
}

export {PageContainer}