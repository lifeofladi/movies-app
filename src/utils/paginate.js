import _ from 'lodash';


export const paginate = (itemsArr, currentPage, pageSize) => {
    //Get where to start paginating, based on amount of items per page (pageSize)
    let startIndex = (currentPage - 1) * pageSize;
    
    return _(itemsArr).slice(startIndex).take(pageSize).value();
};