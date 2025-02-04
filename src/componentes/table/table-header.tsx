import { ComponentProps } from "react";

interface ITableHeaderProps extends ComponentProps<'th'> { }

export function TableHeader(props: ITableHeaderProps) {
    return (
        <th className="py-3 px-4 text-purple-400 text-sm font-semibold text-left" {...props} />
    )
}
