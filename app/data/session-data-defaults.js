/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  doc: {
    body: {
      number: "0846",
      name: "4ward Testing Limited",
      lastUpdated: "1 April 2019",
      authorisedBy: ["BESI", "MHCLG", "MHRA"],
      contact: {
        email: "info@4wardtesting.co.uk",
        phoneNumber: "01798 342240",
        address: "5 Hampers Common Industrial Estate\nPetworth\nWest Sussex\nGU28 9NR"
      }
    },
    accs: {
      name: "Personal protective equipment",
      rows: [ {
        products: [
          "Equipment providing eye protection",
          "Equipment providing face protection",
          "Equipment providing general body protection (clothing)",
          "Equipment providing hand and arm protection",
          "Equipment providing head protection",
          "Equipment providing hearing protection",
          "Equipment providing respiratory protection",
          "Protective equipment against drowning and buoyancy aids",
          "Protective equipment against falls from a height"
        ],
        procedures: ["System for ensuring EC quality of production by means of monitoring"]
      }]
    }
  }
}