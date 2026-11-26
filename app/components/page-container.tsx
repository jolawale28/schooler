import { ReactNode } from "react";

function PageContainer({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={`w-full min-[1440px]:px-[calc((100vw-1400px)/2)] ${className}`}>
            {children}
        </div>
    );
}

export {PageContainer}