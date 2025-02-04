import { ComponentProps } from "react";


interface ITableProps extends ComponentProps<'table'> { }

export function Table(props: ITableProps) {
    return (
        <div className="border border-white/15 rounded-lg">
            <table className="w-full" {...props} />
        </div>
    )
}
