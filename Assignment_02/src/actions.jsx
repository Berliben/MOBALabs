export function dropTile(column) {
    return {
        type: "DROP",
        payload: column,
    }
}

export function reset() {
    return {
        type: "RESET",
    }
}