export type personaType = {
    nome : string,
    cognome : string,
    eta : number,
    sesso : string,
    residenza : string,
    numeroDiTelefono? : string,
    imgProfilo : string,
}

export type livelloLingua = {
    lingua : string,
    livelloLingua : string,
}

export type personaHobby = {
    hobby : string,
}

export type esperienzaPersona = {
    annoInizio : number,
    annoFine : number,
    tipoDiImpiego : string,
    datoreDiLavoro : string,
}