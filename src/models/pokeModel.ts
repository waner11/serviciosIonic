export class PokeModel {
    forms:                    Form[];
    abilities:                Ability[];
    stats:                    Stat[];
    name:                     string;
    weight:                   number;
    moves:                    Move[];
    sprites:                  Sprites;
    held_items:               HeldItem[];
    location_area_encounters: string;
    height:                   number;
    is_default:               boolean;
    species:                  Form;
    id:                       number;
    order:                    number;
    game_indices:             GameIndex[];
    base_experience:          number;
    types:                    Type[];

    constructor(){}
}

export interface Ability {
    slot:      number;
    is_hidden: boolean;
    ability:   Form;
}

export interface Form {
    url:  string;
    name: string;
}

export interface GameIndex {
    version:    Form;
    game_index: number;
}

export interface HeldItem {
    item:            Form;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    version: Form;
    rarity:  number;
}

export interface Move {
    version_group_details: VersionGroupDetail[];
    move:                  Form;
}

export interface VersionGroupDetail {
    move_learn_method: Form;
    level_learned_at:  number;
    version_group:     Form;
}

export interface Sprites {
    back_female:        string;
    back_shiny_female:  string;
    back_default:       string;
    front_female:       string;
    front_shiny_female: string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
}

export interface Stat {
    stat:      Form;
    effort:    number;
    base_stat: number;
}

export interface Type {
    slot: number;
    type: Form;
}