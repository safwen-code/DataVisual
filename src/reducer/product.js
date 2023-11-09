import { GET_DATA } from '../action/types'

const inistialState = {
  products: null,
  loading: true,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = inistialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        products: payload,
        loading: false,
      }
    default:
      return state
  }
}
