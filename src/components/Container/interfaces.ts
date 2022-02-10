export interface CharacterData {
  data: {
    characters: CharacterInfo
  }
}

export interface CharacterInfo {
  info: Info
  results: Array<Character>
}

export interface CharacterFetchResponse {
  info: Info
  characters: Array<Character>
}

interface Info {
  count: number
  pages: number
}

export interface Character {
  id: number
  image: string
  name: string
  favorite: boolean
}
