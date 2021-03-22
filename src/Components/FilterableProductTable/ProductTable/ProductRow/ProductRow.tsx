import React from 'react';


export interface ProductRowProps {
    name: string;
    price: string;
    stocked: boolean;
}

export default class ProductRow extends React.Component<ProductRowProps> {
    constructor(props: ProductRowProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <>
            <tr>
                <td className={this.props.stocked ? '' : 'out-of-stock'}>
                    {this.props.name}
                </td>
                <td>
                    {this.props.price}
                </td>
            </tr>
        </>
    }
}