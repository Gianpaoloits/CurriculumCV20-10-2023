import { esperienzaPersona, livelloLingua, personaHobby, personaType } from "./ProfiloProps";

export const person : personaType = {
    nome : 'pippo',
    cognome : 'baudo',
    eta : 25,
    sesso : 'pinguino',
    residenza : 'casa de pingupapel',
    imgProfilo : 'https://www.saveriogatto.com/photoArchive/8662_African_Penguin.jpg'
}

export const linguaInglese : livelloLingua = {
    lingua : 'Inglese',
    livelloLingua : 'B2',
}

export const linguaItaliana : livelloLingua = {
    lingua : 'Italiana',
    livelloLingua : 'Madrelingua',
}

export const linguaPinguino : livelloLingua = {
    lingua : 'Pinguinese',
    livelloLingua : 'C2',
}

export const lingueTotali: livelloLingua[] = 
[linguaInglese, linguaItaliana, linguaPinguino];

export const esperienza1 : esperienzaPersona = {
    annoInizio : 2022,
    annoFine : 2023,
    tipoDiImpiego : 'Salvatore di Pinguini',
    datoreDiLavoro : 'Capo pinguino'
}
export const esperienza2 : esperienzaPersona = {
    annoInizio : 2021,
    annoFine : 2022,
    tipoDiImpiego : 'Redentore della patria',
    datoreDiLavoro : 'Chiesa San Vigilio',
}

export const esperienza3 : esperienzaPersona = {
    annoInizio : 2020,
    annoFine : 2021,
    tipoDiImpiego : 'Cacciatore di Pinguini',
    datoreDiLavoro : 'Fratello del Re Pinguino',
}

export const esperiezeTotali : esperienzaPersona[] =
[esperienza1,esperienza2,esperienza3];

export const hobby1 : personaHobby = {
    hobby : 'Scivolare di pancia sul ghiaccio',
}

export const hobby2 : personaHobby = {
    hobby : 'Scivolare di schiena sul ghiaccio',
}

export const hobbyTotali : personaHobby[] = 
[hobby1,hobby2];