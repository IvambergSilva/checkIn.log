import checkInIcon from "../assets/checkIn-log_icon.svg"

export function Header() {
    return (
        <>
            <div className="flex items-center h-12">
                <img src={checkInIcon} alt="Logo da aplicação CheckIn.log" />
                <nav className="flex gap-5 ms-5">
                    <a href="" className="font-medium text-sm text-zinc-300">Eventos</a>
                    <a href="" className="font-medium text-sm">Participantes</a>
                </nav>
            </div>
        </>
    )
}