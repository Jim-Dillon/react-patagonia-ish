import { FunctionComponent, ReactNode } from "react";

export interface ButtonProps {
    className?: string;
    iconSVG?: ReactNode;
}

const HeadButton: FunctionComponent<ButtonProps> = ({ className, iconSVG }) => {
    return (
        <div className={className}>
            {iconSVG}
        </div>
    );
};

export default HeadButton;