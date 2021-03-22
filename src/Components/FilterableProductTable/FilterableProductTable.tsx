import React, { FormEvent } from "react";
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";

export interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

export interface FilterableProductTableProps {
    products: Product[];
    filter?: {
        inStockCheck: boolean;
        search: string;
    }
}

export interface FilterableProductTableState {
    inStockCheck: boolean;
    search: string;
}

export default class FilterableProductTable extends React.Component<FilterableProductTableProps, FilterableProductTableState> {
    constructor(props: FilterableProductTableProps) {
        super(props);
        this.state = {
            inStockCheck: false,
            search: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInStockCheck = this.handleInStockCheck.bind(this);
    }

    handleSearch($event: FormEvent<HTMLInputElement>) {
        this.setState((state) => ({
            inStockCheck: state.inStockCheck,
            search: ($event.target as HTMLInputElement).value
        }));
    }

    handleInStockCheck($event: FormEvent<HTMLInputElement>) {
        this.setState((state) => ({
            inStockCheck: ($event.target as HTMLInputElement).checked,
            search: state.search
        }));
    }

    render() {
        return <div>
            FilterableProductTable
            <SearchBar onSearch={this.handleSearch} onCheck={this.handleInStockCheck}></SearchBar>
            <ProductTable products={this.props.products} filter={this.state}></ProductTable>
        </div>
    }
}