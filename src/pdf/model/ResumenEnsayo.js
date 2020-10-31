import Documento from "./Documento";
import Laboratorio from "./Laboratorio";
import Usuario from "./Usuario";

export class ResumenEnsayo {
    laboratorio: Laboratorio;
    usuario: Usuario;
    fechaInicio: string;
    fechaFin: string;
    titulo: string;
    descripcion: string;
    pacientes: number;
    requisitos: string[];
    id: number;
    colors: {
        primary: string;
        secondary: string;
    }
}

export class ResumenEnsayoData {
    documento: Documento;
    contenido: ResumenEnsayo;
}
