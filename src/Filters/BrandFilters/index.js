import React  from 'react';
import CheckBox from './BrandFilter/index'
export default ({brands})=> {
    return brands.map(brand => <CheckBox brand = {brand} key = {brand}/>)
}

