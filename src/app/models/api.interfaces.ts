
export interface ICharacterBase {
  id: number | string; 
  name: string;
  image: string;
  description?: string;
}


export interface IRickAndMortyCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: {
    name: string;
  };
}

export interface IRickAndMortyResponse {
  results: IRickAndMortyCharacter[];
}


export interface ISimpsonsCharacter {
  _id: string; 
  Nombre: string; 
  Imagen: string;
  Historia: string;
  Ocupacion: string;
}

export interface ISimpsonsResponse {
  docs: ISimpsonsCharacter[];
}


export interface IDragonBallCharacter {
  id: number;
  name: string;
  image: string;
  race: string;
  ki: string;
  description: string;
}

export interface IDragonBallResponse {
  items: IDragonBallCharacter[];
  meta: any;
}