import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis, Search } from 'lucide-react'
import { TableHeader } from "./table/table-header";
import TableCell from "./table/table-cell";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime);
dayjs.locale('pt-br');

interface IAttendeeProps {
    id: string;
    name: string;
    socialName?: string;
    email: string;
    createdAt: string;
    checkedInAt: string | null;
}

export function AttendeeList() {
    const [totalAttendees, setTotalAttendees] = useState(0)
    const [eventTitle, setEventTitle] = useState('')
    const [attendees, setAttendees] = useState<IAttendeeProps[]>([])

    const [search, setSearch] = useState(() => {
        const url = new URL(window.location.toString())

        if (url.searchParams.has('search')) {
            return url.searchParams.get('search') ?? ""
        }

        return ""
    })

    const [page, setPage] = useState(() => {
        const url = new URL(window.location.toString())
        if (url.searchParams.has('page')) {
            return Number(url.searchParams.get('page'))
        }
        return 1
    })

    function handleInputSearch(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value.toLowerCase())
        setCurrentSearch(event.target.value)
        setPage(1)
    }

    useEffect(() => {
        const url = new URL('https://checkin-log-backend.onrender.com/events/bef2c7e9-feb1-49b7-a127-d0791e09bd5b/attendees');

        url.searchParams.set('pageIndex', String(page - 1))

        if (search.length > 1) url.searchParams.set('query', search);

        fetch(url).then(response => response.json()).then((data) => {
            setAttendees(data.attendees)
            setTotalAttendees(data.total)
            setEventTitle(data.eventTitle);
        })

        if (page > totalPages) {
            setCurrentPage(1)
        }

    }, [page, search])

    const totalPages = Math.ceil(totalAttendees / 10)

    const setCurrentSearch = (search: string) => {
        const url = new URL(window.location.toString());
        url.searchParams.set('search', search);
        window.history.pushState({}, "", url);
        setSearch(search)
    }

    const setCurrentPage = (page: number) => {
        if (page <= totalPages) {
            const url = new URL(window.location.toString());
            url.searchParams.set('page', String(page));
            window.history.pushState({}, "", url);
            setPage(page)
        }
    }

    const goToFirstPage = () => setCurrentPage(1);
    const goToPreviousPage = () => {
        if (page > 1) setCurrentPage(page - 1)
    }
    const goToNextPage = () => setCurrentPage(page + 1)
    const goToLastPage = () => setCurrentPage(totalPages)

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold bg-blue-900 px-10 py-2 rounded-lg w-fit m-auto border border-white/15">{eventTitle}</h1>

            <header className="flex gap-7 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>

                <div className="flex items-center w-72 gap-3 border border-white/15 px-3 py-1.5 rounded-lg">
                    <Search className="size-4 text-purple-300" />
                    <input
                        type="text"
                        placeholder="Buscar participantes..."
                        className=" text-purple-300 outline-none bg-transparent flex-1 border-none focus:ring-0"
                        value={search}
                        onChange={handleInputSearch}
                        autoFocus
                    />
                </div>
            </header>

            <Table>
                <thead>
                    <tr className="border-b border-white/15">
                        <TableHeader style={{ width: '10%' }}>
                            <input type="checkbox" className="size-4 bg-black/20 rounded" />
                        </TableHeader>
                        <TableHeader style={{ width: '10%' }}>Código</TableHeader>
                        <TableHeader style={{ width: '30%' }}>Participante</TableHeader>
                        <TableHeader>Data da inscrição</TableHeader>
                        <TableHeader>Data do Check-in</TableHeader>
                        <TableHeader></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {attendees.map((attendee) => {
                        return (
                            <tr className="border border-white/15 hover:bg-zinc-900">
                                <TableCell>
                                    <input type="checkbox" className="size-4 bg-black/20 rounded-sm" />
                                </TableCell>
                                <TableCell>{attendee.id.toUpperCase()}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-purple-400 font-semibold">{attendee.socialName || attendee.name}</span>
                                        <span className="text-xs">{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>{attendee.checkedInAt === null
                                    ? <span className="text-zinc-400">Não fez o check-in</span>
                                    : dayjs().to(attendee.checkedInAt)}</TableCell>
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
                        <TableCell colSpan={3}>Mostrando {attendees.length} de {totalAttendees}</TableCell>

                        <TableCell colSpan={3}>
                            <div className="flex justify-end gap-8 items-center">
                                <span className="text-zinc-200 text-sm">Página {page} de {attendees.length === 0 ? 1 : totalPages}</span>

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
                                        isActive={page < totalPages}
                                        onClick={goToNextPage}
                                        disabled={page === totalPages}
                                    >
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton
                                        isActive={page < totalPages}
                                        onClick={goToLastPage}
                                        disabled={page === totalPages}
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
