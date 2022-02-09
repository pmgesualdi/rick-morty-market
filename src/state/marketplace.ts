import { atom } from 'recoil'

// Source: https://recoiljs.org/docs/introduction/getting-started/

const infoState = atom({
  key: 'infoState',
  default: {
    count: 0,
    pages: 0, 
  },
})

const characterState = atom({
  key: 'characterState',
  default: [],
})

export {
  infoState,
  characterState
}
