const logger = (store) => (next) => (action) => {
    // logger recibe el store
    // next es la funcion que llamaremos cuando el middleware termine su trabajo, esta función manda el action al reducer
    console.log(action)
    next(action)
}

// const featuring = (store) => (next) => (actionInfo) => {
//     const featured = [{name: 'carlos'}, ...actionInfo.action.payload]

//     const updatedActionInfo = {
//             ...actionInfo,
//             action: {
//                 ...actionInfo.action,
//                 payload: featured
//             }
//         }

//         next(updatedActionInfo)
//     }

export { logger }