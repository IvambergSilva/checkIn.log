import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis, Search } from "lucide-react";

export function AttendeeList() {
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
                    />
                </div>
            </section>

            <div className="border border-white/15 rounded-lg">
                <table className="w-full">
                    <thead className="gap-5">
                        <tr className="border-b border-white/15">
                            <th className="py-3 px-2.5 text-left">
                                <input type="checkbox" className="size-4 bg-black/20 rounded"/>
                            </th>
                            <th style={{ width: 48 }} className="py-3 px-2.5 text-purple-400 text-sm font-semibold text-left">Código</th>
                            <th className="py-3 px-2.5 text-purple-400 text-sm font-semibold text-left">Participante</th>
                            <th className="py-3 px-2.5 text-purple-400 text-sm font-semibold text-left">Data da inscrição</th>
                            <th className="py-3 px-2.5 text-purple-400 text-sm font-semibold text-left">Data do Check-in</th>
                            <th style={{ width: 64 }} className="py-3 px-2.5 text-purple-400 text-sm font-semibold text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 10 }).map(() => {
                            return (
                                <tr className="border border-white/15 rounded-lg">
                                    <td className="py-3 px-2.5 text-left">
                                        <input type="checkbox" className="size-4 bg-black/20 rounded-sm"/>
                                    </td>
                                    <td className="py-3">1875</td>
                                    <td className="py-3 px-2.5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-purple-400 text-sm font-semibold">Ivamberg Ivanildo da Silva</span>
                                            <span className="text-zinc-200 text-xs">ivambergisilva@gmail.com</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-2.5 text-zinc-200 text-xs">15 dias atrás</td>
                                    <td className="py-3 px-2.5 text-zinc-200 text-xs">4 horas atrás</td>
                                    <td>
                                        <button className="border border-white/10 p-1.5 flex items-center justify-center rounded-md">
                                            <Ellipsis className="size-4 text-purple-400" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className="py-3 px-2.5 text-left text-zinc-200 text-sm">Mostrando 10 de 123</td>

                            <td colSpan={3} className="py-3 px-2.5 text-zinc-200 text-xs gap-1.5">
                                <div className="flex justify-end gap-8 items-center">
                                    <span className="text-zinc-200 text-sm">Página 1 de 13</span>

                                    <div className="flex gap-1.5">
                                        <button className="rounded-md flex items-center justify-center border border-white/10 p-1.5 bg-white/10">
                                            <ChevronsLeft className="size-4 text-purple-400" />
                                        </button>
                                        <button className="rounded-md flex items-center justify-center border border-white/10 p-1.5 bg-white/10">
                                            <ChevronLeft className="size-4 text-purple-400" />
                                        </button>
                                        <button className="rounded-md flex items-center justify-center border border-white/10 p-1.5 bg-white/20">
                                            <ChevronsRight className="size-4 text-purple-400" />
                                        </button>
                                        <button className="rounded-md flex items-center justify-center border border-white/10 w-7 bg-white/20">
                                            <ChevronRight className="size-4 text-purple-400" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div >
    )
}
