import React from 'react';

export interface ProductCategoryRowProps {
    category: string;
}
export default class ProductCategoryRow extends React.Component<ProductCategoryRowProps> {
    constructor(props: ProductCategoryRowProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <>
            <tr className="category">
                <td colSpan={2}>
                    {this.props.category}
                </td>
            </tr>
        </>
    }
}