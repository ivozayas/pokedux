function EmptySearch() {
    const search = window.location.pathname.substring(8)
    
    return (
        <h1 className="result-search">
            there are no results for: <span>{ search }</span>
        </h1>
    )
}

export { EmptySearch }