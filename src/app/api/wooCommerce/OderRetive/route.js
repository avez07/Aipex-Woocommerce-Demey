import {NextResponse} from 'next/server';
import axios from 'axios';
import wooCommerce from '@woocommerce/woocommerce-rest-api'

export const POST = async (req,res)=>{
    const payload = await req.json()

    const WooCommerce =  new wooCommerce({
  url: payload.url, // Your store URL
  consumerKey: payload.consumerKey, // Your consumer key
  consumerSecret: payload.consumer_secret, // Your consumer secret
  version: 'wc/v3' // WooCommerce WP REST API version
});

    try {
       const response = await WooCommerce.get('orders')
       return NextResponse.json(response.data)
    } catch (error) {
        return NextResponse.json(error)
    }

}