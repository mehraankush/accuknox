import { Button } from "../ui/button";

type ButtonVariant = 'outline' | 'default' | 'destructive' | 'secondary' | 'ghost' | 'link';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
    children: React.ReactNode;
    icon?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    variant = 'outline',
    className = '',
    children,
    icon: Icon,
    ...props
}) => {
    return (
        <Button
            variant={variant}
            className={`flex gap-1 ${className}`}
            {...props}
        >
            {children}
            {Icon && <Icon size={20} />}
        </Button>
    );
};

export default CustomButton;
