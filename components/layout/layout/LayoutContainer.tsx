import { ReactNode } from "react";

const LayoutContainer = ({ children, className }: { children: ReactNode, className: string }) => {


    return (
        <div className={className}>
            {children}
        </div>
    )
};
export default LayoutContainer