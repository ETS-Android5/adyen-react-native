export const globalConfiguration = {
    environment: "test",
    clientKey: "{YOUR_CLIENT_KEY}",
    countryCode: "NL",
    amount: { currency: "EUR", value: 1000 },
    reference: 'React Native',
    returnUrl: 'myapp://',
    shopperReference: 'Checkout Shopper',
    merchantAccount: '{YOUR_MERCHANT_ACCOUNT}',
    shopperLocale: 'en-US',
    additionalData: { 'allow3DS2': true }
  };

export const environment = {
    apiKey: "{YOUR_DEMO_SERVER_API_KEY}",
    url: "https://checkout-test.adyen.com/v67/"
  };