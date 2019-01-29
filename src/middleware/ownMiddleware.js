const ownMiddleware = store => next => action => {

    if ( action.type === -1 ){ //'FILTER_ELEMENTS'

        var currStore = store.getState()
        console.log( currStore.dog )
        console.log( action.payload )

        var filterData = [];

        (currStore.notFilteredDog).forEach( item => {
            if ( item.title.indexOf( action.payload ) !== -1 ) {
                filterData[filterData.length] = item
            }
        });

        console.log( filterData )
        action.filtered = filterData
    }

    let result = next(action)
    return result
}

export default ownMiddleware