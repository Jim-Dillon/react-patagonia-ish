import { FunctionComponent } from "react";

interface FooterButtonProps {
    text: string;
}


const FooterButton: FunctionComponent<FooterButtonProps> = ({ text }) => {
    return (
        <a>
            {text}
        </a>
    );
};

export default FooterButton;