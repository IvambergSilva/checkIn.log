import { ComponentProps } from "react"

interface ITableCellProps extends ComponentProps<'td'> { }

export default function TableCell(props: ITableCellProps) {
    return (
        <td className="py-3 px-4 text-zinc-400 text-sm" {...props} />
    )
}
