const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: 'https://botellatest.temp312.kinsta.cloud', // Your store URL
    consumerKey: 'ck_31cab162a5df09492dd74d76ee89a3861dcf969a', // Your consumer key
    consumerSecret: 'cs_72bda7c218c8426754b83eab41d1e75e20660b12', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
  });

  WooCommerce.get("orders", {
    status: 'completed', // 20 products per page
  })
    .then((response) => {
      // Successful request
      //console.log("Response Status:", response.status);
      // console.log("Response Headers:", response.headers);
      //console.log("Total of pages:", response.headers['x-wp-totalpages']);
      //console.log("Total of items:", response.headers['x-wp-total']);
        console.log(response)

        for (i = 0; i < response.data.length; i++) {
          console.log(response.data[i].id);
        }
    //   res.send({
    //     "Response Status": response.status,
    //     "Response Headers": response.headers,
    //     "Response Data": response.data,
    //     "Total of pages": response.headers['x-wp-totalpages'],
    //     "Total of items": response.headers['x-wp-total']
    //   })
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
      res.status(error.response.status).send({
        "Headers": error.response.headers,
        "Data": error.response.data
      })
    })
    .finally(() => {
      // Always executed.
    });

    //Hei på deg Eirik!

//   WooCommerce.get("products/40")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });

// WooCommerce.post("products", {
//   name: "Premium Quality", // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
//   type: "simple",
//   regular_price: "21.99",
// })
//   .then((response) => {
//     // Successful request
//     console.log("Response Status:", response.status);
//     console.log("Response Headers:", response.headers);
//     console.log("Response Data:", response.data);
//   })
//   .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log("Response Status:", error.response.status);
//     console.log("Response Headers:", error.response.headers);
//     console.log("Response Data:", error.response.data);
//   })
//   .finally(() => {
//     // Always executed.
//   });

