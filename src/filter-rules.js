export const ruleSortByTown = (a, b) => {
    if(a.address.city < b.address.city) { return -1; }
    if(a.address.city > b.address.city) { return 1; }
    return 0;
};
  
export const ruleSortByCompany = (a, b) => {
    if(a.company.name < b.company.name) { return -1; }
    if(a.company.name > b.company.name) { return 1; }
    return 0;
};
  