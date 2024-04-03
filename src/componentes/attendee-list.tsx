import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis, Search } from 'lucide-react'
import { TableHeader } from "./table/table-header";
import TableCell from "./table/table-cell";
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendees";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime);
dayjs.locale('pt-br')

export function AttendeeList() {
    const [search, setSearch] = useState('')

    function handleInputSearch(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    const [page, setPage] = useState(1)

    const totalPages = attendees.length / 10
    const lastPage = Math.ceil(totalPages)

    function goToFirstPage() {
        setPage(1)
    }

    function goToPreviousPage() {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToLastPage() {
        setPage(lastPage)
    }

    return (
        <div className="flex flex-col gap-4">
            <section className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>

                <div className="flex items-center w-72 gap-3 border border-white/15 px-3 py-1.5 rounded-lg">
                    <Search className="size-4 text-purple-300" />
                    <input
                        type="text"
                        placeholder="Buscar participantes..."
                        className=" text-purple-300 outline-none bg-transparent flex-1 border-none"
                        value={search}
                        onChange={handleInputSearch}
                    />
                </div>
            </section>

            <Table>
                <thead className="gap-5">
                    <tr className="border-b border-white/15">
                        <TableHeader>
                            <input type="checkbox" className="size-4 bg-black/20 rounded" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data da inscrição</TableHeader>
                        <TableHeader>Data do Check-in</TableHeader>
                        <TableHeader></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {attendees.slice((page - 1) * 10, (page * 10)).map((attendee) => {
                        return (
                            <tr className="border border-white/15">
                                <TableCell>
                                    <input type="checkbox" className="size-4 bg-black/20 rounded-sm" />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-purple-400 font-semibold">{attendee.name}</span>
                                        <span className="text-xs">{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>{dayjs().to(attendee.checkInAt)}</TableCell>
                                <td>
                                    <IconButton transparent>
                                        <Ellipsis className="size-4 text-purple-400" />
                                    </IconButton>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Mostrando 10 de {attendees.length}</TableCell>

                        <TableCell colSpan={3}>
                            <div className="flex justify-end gap-8 items-center">
                                <span className="text-zinc-200 text-sm">Página {page} de {lastPage}</span>

                                <div className="flex gap-1.5">
                                    <IconButton
                                        isActive={page > 1}
                                        onClick={goToFirstPage}
                                        disabled={page === 1}
                                    >
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        isActive={page > 1}
                                        onClick={goToPreviousPage}
                                        disabled={page === 1}
                                    >
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        isActive={page < lastPage}
                                        onClick={goToNextPage}
                                        disabled={page === lastPage}
                                    >
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        isActive={page < lastPage}
                                        onClick={goToLastPage}
                                        disabled={page === lastPage}
                                    >
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div >
    )
}
