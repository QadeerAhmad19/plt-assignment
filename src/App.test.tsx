import * as React from "react";
import ProductDataService from './services/productService';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import reducer from "./store/reducer";
import Product from "./components/Product";
import configureStore from 'redux-mock-store';

describe('Application tests', () => {
    var products: IProduct[] = [];
    const initialState = {
        reducer
    };
    const mockStore = configureStore();
    var store: any;
    it('Products correctly listed', async() => {
        store = mockStore(initialState);
        await ProductDataService.getAll().then(e => {
            products = e.data;
            products.map((m: IProduct, index) => {
                render(<Provider store={store}><Product {...m} key={index} /></Provider>);
            })
        });
        const inputs = document.body.querySelectorAll('.product-item');
        expect(inputs).toHaveLength(products.length);
    });
    it('Product has Name, Image, Colour, Price', async() => {
        store = mockStore(initialState);
        await ProductDataService.getAll().then(e => {
            products = e.data;
            products.map((m: IProduct, index) => {
                const { container } = render(<Provider store={store}><Product {...m} key={index} /></Provider>);
                const price = container.querySelector('.price');
                expect(price).not.toBe(null);
                const colour = container.querySelector('.colour');
                expect(colour).not.toBe(null);
                const name = container.querySelector('.card-title');
                expect(name).not.toBe(null);
                const image = container.querySelector('.card-image');
                expect(image).not.toBe(null);
            })
        });
    });
})