const DefaultState = {
    loading: false,
    data: [],
    errorMsg: '',
    count:0
}
const pokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case 'POKEMON_LIST_LOADING':
            return {
                ...state,
                loading: true,
                errorMsg:''
            }
        case 'POKEMON_LIST_FAIL':
            return {
                ...state,
                loading: false,
                errorMsg: 'Não foi possivel capturar o pokemon'
            }
        case 'POKEMON_LIST_SUCCESS':
            return {
                ...state,
                loading: true,
                data: action.payload.results,
                errorMsg: '',
                count:action.payload.count
            }
        default:
            return state
    }
}

export default pokemonListReducer