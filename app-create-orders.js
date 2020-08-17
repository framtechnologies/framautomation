const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: 'https://botellatest.temp312.kinsta.cloud', // Your store URL
    consumerKey: 'ck_31cab162a5df09492dd74d76ee89a3861dcf969a', // Your consumer key
    consumerSecret: 'cs_72bda7c218c8426754b83eab41d1e75e20660b12', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
  });

  const statustest = "completed"

  const data = {
    status: statustest,
    billing: {
      first_name: "Eirik API",
      last_name: "Doe",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
      email: "john.doe@example.com",
      phone: "(555) 555-5555"
    },
    shipping: {
      first_name: "John",
      last_name: "Doe",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US"
    },
    line_items: [
      {
        product_id: 10437,
        quantity: 2
      }
    ],
  };
  
  WooCommerce.post("orders", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });