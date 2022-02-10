import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { fetchCharacters } from '../../providers/characters';
import { characterState, infoState } from '../../state/recoil';
import { CharacterData } from './interfaces';

export const useFetchCharacters = () => {
  const [data, setData] = useState<CharacterData>()
  const [info, setInfo] = useRecoilState(infoState)
  const [characters, setCharacters] = useRecoilState(characterState)

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchCharacters()
      const data: CharacterData = await result.json()

      setData(data)
    }
    fetch()
  }, [])
  
  useEffect(() => {
    if (!data) return

    setInfo(data.data.characters.info)
    // TODO: Resolve typing issue
    const characters = data.data.characters.results.map((char, i) => ({ ...char, id: i }))

    setCharacters(characters as any)
  }, [data, setInfo, setCharacters])

  return {
    info,
    characters,
  }
}
