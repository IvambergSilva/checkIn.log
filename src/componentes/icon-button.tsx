import { ComponentProps } from "react";

interface IIconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean;
    isActive?: boolean;
}

export function IconButton({ transparent, isActive, ...props }: IIconButtonProps) {
    const baseClasses: string = "border border-white/15 p-1.5 flex items-center justify-center rounded-md text-purple-400"
    return (
        <button
            className={transparent
                ? `${baseClasses}`
                : isActive
                    ? `${baseClasses} bg-white/20`
                    : `${baseClasses} bg-white/10 cursor-not-allowed`
            }
            {...props}
        />
    )
}
