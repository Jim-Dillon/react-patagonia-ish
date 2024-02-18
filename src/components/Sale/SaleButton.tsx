import { FunctionComponent } from "react";


interface SaleButtonProps {
    text: string;
    className?: string;
}

const SaleButton: FunctionComponent<SaleButtonProps> = ({ text, className }) => {
    return (
        <a href="#" className={className}>
            {text}
        </a>
    )
}

export default SaleButton;