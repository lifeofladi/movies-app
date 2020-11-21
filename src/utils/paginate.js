import _ from 'lodash';


export const paginate = (itemsArr, currentPage, pageSize) => {
    let startIndex = (currentPage - 1) * pageSize;
    return _(itemsArr).slice(startIndex).take(pageSize).value();
};