export module CatApi {

    export interface Category {
        id: number;
        name: string;
    }

    export interface SearchResult {
        breeds: any[];
        categories: Category[];
        id: string;
        url: string;
    }
}

