import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { fetchCharacters } from '../../providers/characters';
import { characterState, infoState } from '../../state/marketplace';
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
    setCharacters(data.data.characters.results as any)
  }, [data, setInfo, setCharacters])

  return {
    info,
    characters,
  }
}
