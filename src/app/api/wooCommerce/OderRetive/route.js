import {NextResponse} from 'next/server';
import wooCommerce from '@woocommerce/woocommerce-rest-api'

export const POST = async (req,res)=>{
    const payload = await req.json()
const date = payload.data;


    const WooCommerce =  new wooCommerce({
  url: payload.url, // Your store URL
  consumerKey: payload.consumerKey, // Your consumer key
  consumerSecret: payload.consumer_secret, // Your consumer secret
  version: 'wc/v3' // WooCommerce WP REST API version
});

    try {
       const response = await WooCommerce.get('orders', date)
       return NextResponse.json({message:'pass',data:response.data})
    } catch (error) {
        return NextResponse.json({message:'failed',data: error})
    }

}