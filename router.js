let currentPage = 'login';
let listeners = [];

export const changePage = (newPage) => {
    currentPage = newPage;
    for (const listener of listeners) {
        listener(currentPage);
    }
};

export const registerChangeListener = (listener) =>{
    listeners.push(listener);
}