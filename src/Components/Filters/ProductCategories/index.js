import React, {Component} from 'react';
import ProductCategory from './ProductCategory/index'
export default ({categories})=> {
    return categories.map(category => <ProductCategory category = {category} key = {category}/>)
}
