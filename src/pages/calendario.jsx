import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"; 
import "../style/calendario.css";  

import { format, parse, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";

// Localização em Português
const locales = {
    "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // semana começa na segunda
    getDay,
    locales,
});

// Evento de exemplo
const events = [
    {
        title: "Reunião importante",
        start: new Date(2025, 1, 20, 10, 0),
        end: new Date(2025, 1, 20, 12, 0),
    },
];

export default function Calendario() {
    return (
        <div className="calendario-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                culture="pt-BR"
                views={["month", "week", "day"]}
                messages={{
                    next: "Próximo",
                    previous: "Anterior",
                    today: "Hoje",
                    month: "Mês",
                    week: "Semana",
                    day: "Dia",
                }}
            />
        </div>
    );
}
