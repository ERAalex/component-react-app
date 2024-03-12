import React, { Component } from 'react';


  export class ShopItemClass extends Component {

    render() {
        return (
        <article>
            Class component
            <h2>{this.props.item.brand}</h2>
            <h1>{this.props.item.title}</h1>
            <h3>{this.props.item.description}</h3>
            <div class="description">
                {this.props.item.descriptionFull}
            </div>
            <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
            <div class="divider"></div>
            <div class="purchase-info">
                <div class="price">{this.props.item.currency}{this.props.item.price}</div>
                <button>Добавить в корзину</button>
            </div>
        </article>
        );
    }
  }