import React from 'react';
import { FilterableProductTableProps, Product } from '../FilterableProductTable';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';

export default class ProductTable extends React.Component<FilterableProductTableProps, any> {

    rows: Array<ProductCategoryRow | ProductRow | {}> = [];

    constructor(props: FilterableProductTableProps) {
        super(props);
        this.state = {};
    }

    updateProducts() {
        this.rows = [];
        let currentCategory = '';
        this.props.products.filter((product: Product) => {
            if (this.props.filter?.search) {
                return product.name.toUpperCase().indexOf(this.props.filter?.search.toUpperCase()) > -1;
            } else
                return true;
        }).forEach((product: Product) => {
            if (currentCategory !== product.category) {
                this.rows.push(
                    <ProductCategoryRow key={product.category} category={product.category}></ProductCategoryRow>
                );
                if ((this.props.filter?.inStockCheck && product.stocked) || !this.props.filter?.inStockCheck) {
                    this.rows.push(<ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked}></ProductRow>);
                }

            } else {
                if ((this.props.filter?.inStockCheck && product.stocked) || !this.props.filter?.inStockCheck) {
                    this.rows.push(<ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked}></ProductRow>);
                }
            }
            currentCategory = product.category;
        });
    }

    render() {
        this.updateProducts();
        return <div>
            <table className="product-table">
                <thead className="product-table__header">
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {this.rows}
                </tbody>
                <tbody>
                </tbody>
            </table>
        </div>
    }
}