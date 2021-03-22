import React, { FormEvent } from 'react';

export interface SearchBarProps {
    onSearch: (event: FormEvent<HTMLInputElement>) => void;
    onCheck: (event: FormEvent<HTMLInputElement>) => void;
}

export default class SearchBar extends React.Component<SearchBarProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <input id="ProductTableSearch" type="search" placeholder="Search..." onInput={this.props.onSearch} />
            <div>
                <input id="inStockCheck" type="checkbox" onChange={this.props.onCheck}/>
                <label htmlFor="inStockCheck" >Only show products in stock</label>
            </div>
        </div>
    }
}