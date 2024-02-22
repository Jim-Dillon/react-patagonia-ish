import { FunctionComponent } from "react";

export interface ButtonProps {
    imageSrc: string;
    className?: string;
}

const HeadButton: FunctionComponent<ButtonProps> = ({ imageSrc, className }) => {
    return (
        <div className={className}>
            <img src={imageSrc} alt="Button image" />
        </div>
    );
};

export default HeadButton;