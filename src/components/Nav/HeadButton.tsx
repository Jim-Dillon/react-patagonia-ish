import { FunctionComponent, ReactNode } from "react";

export interface ButtonProps {
    // imageSrc: string;
    className?: string;
    iconSVG?: ReactNode;
}

const HeadButton: FunctionComponent<ButtonProps> = ({ className, iconSVG }) => {
    return (
        <div className={className}>
            {/* <img src={imageSrc} alt="Button image" /> */}
            {iconSVG}
        </div>
    );
};

export default HeadButton;