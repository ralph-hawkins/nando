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


{
  id: "0",
  body: {
    number: "",
    name: "",
    lastUpdated: ",
    authorisedBy: [],
    contact: {
      email: "",
      website: "www.4wardtesting.co.uk",
      phoneNumber: "",
      address: "\n\n\n"
    }
  },
  accs: [
    {
      name: "",
      rows: [
        {
          products: [],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [""]
        }
      ]
    },
    {
      name: "",
      rows: [ 
        {
          products: [],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: []
        }
      ]
    }
  ]
}

*/

module.exports = {
  id: "0",
  docs: [{
      id: "0",
      body: {
        number: "2538",
        name: "4ward Testing Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@4wardtesting.co.uk",
          website: "http://www.aberdeenshire.gov.uk/business/trading-standards",
          phoneNumber: "01798 342240",
          address: "5 Hampers Common Industrial Estate\nPetworth\nWest Sussex\nGU28 9NR\nPetworth"
        }
      },
      accs: [{
          name: "Personal protective equipment",
          rows: [{
            products: [
              "Equipmentpment providing eye protection",
              "Equipment providing face protection",
              "Equipment providing general body protection (clothing)",
              "Equipment providing hand and arm protection",
              "Equipment providing head protection",
              "Equipment providing hearing protection",
              "Equipment providing respiratory protection",
              "Protective equipment against drowning and buoyancy aids",
              "Protective equipment against falls from a height"
            ],
            annexes: [
            "Annex V",
            "Annex VIII",
            "Annex X",
            "Annex XI",
            "Annex XII",
            "Annex IVB"
            ],
            limitations: [],
            procedures: ["System for ensuring EC quality of production by means of monitoring"]
          }]
        },
        {
          name: "Medical devices",
          rows: [{
            products: [
              "General non-active, non-implantable medical devices",
              "Non-active devices for anaesthesia, emergency and intensive care",
              "Non-active devices for injection, infusion, transfusion and dialysis",
              "Non-active orthopaedic and rehabilitation devices",
              "Non-active medical devices with measuring function",
              "Non-active ophthalmologic devices",
              "Non-active instruments",
              "Contraceptive medical devices",
              "Non-active medical devices for disinfecting, cleaning, rinsing",
              "Non-active devices for in vitro fertilisation (IVF) and assisted reproductive technologies (ART)",
              "Non-active medical devices for ingestion",
              "Non-active cardiovascular implants",
              "Non-active orthopaedic implants",
              "Non-active functional implants",
              "Non-active soft tissue implants (excluding breast implants)",
              "Bandages and wound dressings",
              "Suture material and clamps",
              "Other medical devices for wound care",
              "Non-active dental equipment and instruments",
              "Dental materials",
              "Dental implants",
              "Devices for extra-corporal circulation, infusion and haemopheresis",
              "Respiratory devices, devices including hyperbaric chambers for oxygen therapy, inhalation anaesthesia",
              "Devices for stimulation or inhibition",
              "Active surgical devices",
              "Active ophthalmologic devices",
              "Active dental devices",
              "Active devices for disinfection and sterilisation",
              "Active rehabilitation devices and active prostheses",
              "Active devices for patient positioning and transport",
              "Active devices for in vitro fertilisation (IVF) and assisted reproductive therapy (ART)",
              "Software",
              "Medical gas supply systems and parts thereof",
              "Imaging devices utilising ionizing radiation",
              "Imaging devices utilising non-ionizing radiation",
              "Monitoring devices of non-vital physiological parameters",
              "Monitoring devices of vital physiological parameters",
              "Devices utilising ionizing radiation",
              "Devices utilising non-ionizing radiation",
              "Devices for hyperthermia / hypothermia",
              "Devices for (extracorporal) shock-wave therapy (lithotripsy)",
            ],
            annexes: [
            "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
            ],
            limitations: [],
            procedures: ["Declaration of conformity (full quality assurance system) and Declaration of conformity (production quality assurance)"]
          }]
        }
      ]
    },
    {
      id: "1",
      body: {
        number: "582",
        name: "ABERDEENSHIRE COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "steven.macaulay@aberdeenshire.gov.uk",
          website: "www.eagle.or",
          phoneNumber: "0 1467 628149",
          address: "Gordon House\nBlackhall Road\nInverurie\nAB51 3WA"
        }
      },
      accs: [{
        name: "Personal protective equipment",
        rows: [{
            products: [
              "Pressure receptacles including gas cartridges, their valves and other accessories when appropriate"
            ],
            annexes: [
            "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
            ],
            limitations: [],
            procedures: [
              "Conformity assessment activities",
              "Intermediate inspections",
              "Periodic inspections",
              "Reassessment of conformity"
            ]
          },
          {
            products: [
              "Tanks, battery vehicles/wagons, multiple-element gas containers (MEGCs), their valves and other accessories when appropriate"
            ],
            annexes: [
            "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
            ],
            limitations: [],
            procedures: [
              "Conformity assessment activities",
              "Intermediate inspections",
              "Periodic inspections",
              "Reassessment of conformity"
            ]
          }
        ]
      }]
    },
    {
      id: "2",
      body: {
        number: "729",
        name: "ABS EUROPE LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "abs-eur@eagle.org",
          website: "www.aegisengineering.co.uk",
          phoneNumber: "0(0)20 72473255",
          address: "ABS\nHouse 1 Frying Pan Alley\nLONDON\nE1 7HR"
        }
      },
      accs: [
    {
      name: "Medical devices",
      rows: [
        {
          products: ["General non-active, non-implantable medical devices"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: []
        },
        {
          products: ["Non-active devices for anaesthesia, emergency and intensive care"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active devices for injection, infusion, transfusion and dialysis"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active medical devices with measuring function"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active ophthalmologic devices"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Contraceptive medical devices"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active medical devices for disinfecting, cleaning, rinsing"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active devices for in vitro fertilisation (IVF) and assisted reproductive technologies (ART)"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active medical devices for ingestion"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active cardiovascular implants"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active orthopaedic implants"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active functional implants"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Bandages and wound dressings"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Suture material and clamps"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Other medical devices for wound care"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Non-active dental equipment and instruments"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Dental materials"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Dental implants"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Devices for extra-corporal circulation, infusion and haemopheresis"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Respiratory devices, devices including hyperbaric chambers for oxygen therapy, inhalation anaesthesia"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Devices for stimulation or inhibition"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Active surgical devices"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Active ophthalmologic devices"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Active dental devices"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Active devices for disinfection and sterilisation"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
        {
          products: ["Active rehabilitation devices and active prostheses"],
          annexes: [
          "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
          ],
          limitations: [],
          procedures: [
            "Full quality assurance system",
            "Production quality assurance",
            "Product quality assurance"
          ]
        },
      ]
    }
  ] 
    },
    {
      id: "3",
      body: {
        number: "2773",
        name: "AEGIS Certification Services Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "markmccool@aegisengineering.co.uk",
          website: "www.airproducts.co.uk",
          phoneNumber: "0 1332 384 302",
          address: "29 Brunel Parkway\nPride Park Derbyshire\nDE24 8HR\nDerby"
        },
      },
      accs: []
    },
    {
      id: "4",
      body: {
        number: "1351",
        name: "AIR PRODUCTS PLC",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "deanm@airproducts.com",
          website: "www.intertek.com",
          phoneNumber: "0:20:8917 8425",
          address: "Hersham Place\nMolesey Road\nKT12\n4RZ WALTON-ON-THAMES"
        },
      },
      accs: []
    },
    {
      id: "5",
      body: {
        number: "473",
        name: "AMTAC CERTIFICATION SERVICES LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "techsup.medical@intertek.com",
          website: "www.amtriveritas.com",
          phoneNumber: "0 190 8857 777",
          address: "Davy Avenue\nKnowlhill\nMilton\nKeynes MK5 8NL"
        },
      },
      accs: []
    },
    {
      id: "6",
      body: {
        number: "463",
        name: "AMTRI VERITAS LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "beun@amtriveritas.com",
          website: "www.angus.gov.uk",
          phoneNumber: "0 1625 412542",
          address: "Veritas House Pierce Street\nMacclesfield\nCheshire SK11 6ER"
        },
      },
      accs: []
    },
    {
      id: "7",
      body: {
        number: "564",
        name: "ANGUS COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "tradstand@angus.gov.uk",
          website: "http://www.arrowheadltd.co",
          phoneNumber: "0/1307.473917",
          address: "County Buildings Market Street\nForfar\nDD8 3WT"
        },
      },
      accs: []
    },
    {
      id: "8",
      body: {
        number: "1266",
        name: "ARROWHEAD INDUSTRIAL SERVICES LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Simon.davies@arrowheadis.com",
          website: "www.atkinsglobal.com",
          phoneNumber: "01780 758550",
          address: "Orion House\n14 Barn Hill\nStamford\nPE9 2AE"
        },
      },
      accs: []
    },
    {
      id: "9",
      body: {
        number: "1143",
        name: "ATKINS NOTIFIED BODY",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "ian.shirtcliffe@atkinsglobal.com",
          website: "www.avtechnology.co.uk",
          phoneNumber: "01332 225752",
          address: "Trent House\nRTC Business Park\nLondon Road\nDERBY\n DE24 8UP"
        },
      },
      accs: []
    },
    {
      id: "10",
      body: {
        number: "1067",
        name: "AV TECHNOLOGY LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "alanmatthews@avtechnology.co.uk",
          website: "",
          phoneNumber: "0 161 486 3737",
          address: "Avtech House\nArkle Avenue\nStanley Green Trading Estate\nHandforth\nCheshire SK9 3RW"
        },
      },
      accs: []
    },
    {
      id: "11",
      body: {
        number: "1157",
        name: "Altran UK Ltd.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "nobo@altran.com",
          website: "www.ascertiva.co",
          phoneNumber: "0 1225 823860",
          address: "22 St. Lawrence Street Southgate\nBath\nBA1 1AN"
        },
      },
      accs: []
    },
    {
      id: "12",
      body: {
        number: "2363",
        name: "Ascertiva Group Ltd t/a NQA.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiries@ascertiva.com",
          website: "www.mastergasonline.co",
          phoneNumber: "01582 539 000",
          address: "Warwick House\nHoughton Hall Park\nHoughton Regis\nDunstable\n LU5 5ZX United Kingdom"
        },
      },
      accs: []
    },
    {
      id: "13",
      body: {
        number: "2314",
        name: "Atlas Mastergas Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "luke@graflow.co.uk",
          website: "www.blackwood-labs.co.uk",
          phoneNumber: "161 330 6630",
          address: "15 Turner St. Ashton under Lyne Lancashire OL6 8LT\nAshton\nunder Lyne"
        },
      },
      accs: []
    },
    {
      id: "14",
      body: {
        number: "1902",
        name: "BLACKWOOD COMPLIANCE LABORATORIES",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@blackwood-labs.co.uk",
          website: "www.boc.co",
          phoneNumber: "0 1495 229219",
          address: "Unit 8 Woodfieldside Business Park Pontllanfraith\nBlackwood\nNP12 2DG"
        },
      },
      accs: []
    },
    {
      id: "15",
      body: {
        number: "1978",
        name: "BOC Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "customer.service@uk.gases.boc.com",
          website: "www.breglobal.co.uk",
          phoneNumber: "01483 579857",
          address: "The Priestley Centre 10 Priestley Road The Surrey Research Park\nGuildford\nGU2 5XY"
        },
      },
      accs: []
    },
    {
      id: "16",
      body: {
        number: "832",
        name: "BRE Global Limited",
        bodyType: "Type approval body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "prattm@bre.co.uk",
          website: "www.breglobal.co",
          phoneNumber: "0 1923 664100",
          address: "Bucknalls Lane\nGarston\nWatford\nWD25 9XX"
        },
      },
      accs: []
    },
    {
      id: "17",
      body: {
        number: "1313",
        name: "BRE Global Limited incorporating BRE Testing",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "prattm@bre.co.uk",
          website: "www.bbacerts.co.uk",
          phoneNumber: "01923 664241",
          address: "Bucknalls Lane\nGarston\nWatford\nWD25 9XX"
        },
      },
      accs: []
    },
    {
      id: "18",
      body: {
        number: "2441",
        name: "BRITISH BOARD OF AGRÉMENT (BBA)",
        bodyType: "Type approval body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "clientservices@bbacerts.co.uk",
          website: "www.britishengineeringservices.co.uk",
          phoneNumber: "01923 665300",
          address: "Bucknalls Lane\nGarston\nWD25\n9BA WATFORD"
        },
      },
      accs: []
    },
    {
      id: "19",
      body: {
        number: "1241",
        name: "BRITISH ENGINEERING SERVICES LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "allan.bayne@briteng.co.uk",
          website: "http://www.biegroup.co",
          phoneNumber: "0 161 694 2052",
          address: "5 New York Street\nManchester\nM1 4JB"
        },
      },
      accs: []
    },
    {
      id: "20",
      body: {
        number: "964",
        name: "BRITISH INSPECTING ENGINEERS LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "michael.watson@bieltd.co.uk",
          website: "www.bindt.or",
          phoneNumber: "0 1246 260260",
          address: "Chatsworth Technology Park\nDunston Road\nWhittington Moor\nChesterfield\n S41 8XA"
        },
      },
      accs: []
    },
    {
      id: "21",
      body: {
        number: "1313",
        name: "BRITISH INSTITUTE OF NON-DESTRUCTIVE TESTING",
        bodyType: "Recongised third party organisation",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "nicole.scutt@bindt.org",
          website: "www.bsigroup.com",
          phoneNumber: "893811",
          address: "Newton Building\nSt Georges Avenue\nNN2\n6JB NORTHAMPTON"
        },
      },
      accs: []
    },
    {
      id: "22",
      body: {
        number: "1414",
        name: "BSI",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "product.certification@bsigroup.com",
          website: "www.bsria.co.uk",
          phoneNumber: "0 8450 809000",
          address: "Kitemark Court Davy Avenue Knowlhill\nMilton\nKeynes MK5 8PP"
        },
      },
      accs: []
    },
    {
      id: "23",
      body: {
        number: "480",
        name: "BSRIA LTD.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Arnold.Teekaram@bsria.co.uk",
          website: "www.bttg.co.uk",
          phoneNumber: "465600",
          address: "Old Bracknell Lane West\nRG12\n7AH BRACKNELL"
        },
      },
      accs: [{
    name: "Personal protective equipment",
    rows: [{
      products: [
        "Equipment providing eye protection",
        "Equipment providing face protection",
        "Equipment providing foot and leg protection",
        "Equipment providing general body protection (clothing)",
        "Equipment providing general body protection (high visibility clothing)",
        "Equipment providing hand and arm protection",
        "Equipment providing hand and arm protection against chemical agents",
        "Equipment providing hand and arm protection against cold > -50 °C",
        "Equipment providing hand and arm protection against cold, [cold > -50°C]",
        "Equipment providing hand and arm protection against cold, [cold > -50°C], [extreme cold < -50°C]",
        "Equipment providing hand and arm protection against electrical risks",
        "Equipment providing hand and arm protection against extreme cold < -50 °C",
        "Equipment providing hand and arm protection against heat > 100 °C and fire and flame",
        "Equipment providing hand and arm protection against mechanical risks",
        "Equipment providing hand protection against cold risks [Cold > -50ºC], [Extreme Cold < -50ºC]",
        "Equipment providing head protection",
        "Equipment providing hearing protection",
        "Equipment providing respiratory protection",
        "Protective equipment against drowning and buoyancy aids",
        "Protective equipment against electrical risks",
        "Protective equipment against falls from a height",
        "Protective equipment against mechanical risks",
        "Specialised areas of competence: Protective clothing for motorcycle riders",
        "Footwear with anti-slip protection"
      ],
      annexes: [
      "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
      ],
      limitations: [],
      procedures: [
        "EC type-examination",
        "System for ensuring EC quality of production by means of monitoring",
        "EC quality control system for the final product"
      ]
    }]
  },
  {
    name: "Active implantable medical devices",
    rows: [{
        products: ["General active implantable medical devices"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: []
      },
      {
        products: ["Active implantable medical devices for stimulation / inhibition"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "EC declaration of conformity (complete quality assurance system)",
          "EC declaration of conformity to type (assurance of production quality)",
          "EC type-examination Annex 2"
        ]
      },
      {
        products: ["Active implantable medical devices delivering drugs or other substances"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "EC declaration of conformity (complete quality assurance system)",
          "EC declaration of conformity to type (assurance of production quality)",
          "EC type-examination Annex 2"
        ]
      },
      {
        products: ["Active implantable medical devices substituting or replacing organ functions"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "EC declaration of conformity (complete quality assurance system)",
          "EC declaration of conformity to type (assurance of production quality)",
          "EC type-examination Annex 2"
        ]
      }
    ]
  },
  {
    name: "Hot-water boilers",
    rows: [{
      products: ["Hot-water boilers fired with liquid or gaseous fuels"],
      annexes: [
      "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
      ],
      limitations: [],
      procedures: [
        "Production quality assurance",
        "Conformity to type",
        "Product quality assurance",
        "EC type-examination"
      ]
    }]
  },
  {
    name: "Medical devices",
    rows: [{
        products: ["General non-active, non-implantable medical devices"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: []
      },
      {
        products: ["Non-active devices for anaesthesia, emergency and intensive care"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active devices for injection, infusion, transfusion and dialysis"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active orthopaedic and rehabilitation devices"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active medical devices with measuring function"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active ophthalmologic devices"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active instruments"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Contraceptive medical devices"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active medical devices for disinfecting, cleaning, rinsing"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active devices for in vitro fertilisation (IVF) and assisted reproductive technologies (ART)"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active medical devices for ingestion"],
        annexes: ["I, 3.1.2"],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active cardiovascular implants"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active orthopaedic implants"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active functional implants"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active soft tissue implants"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Bandages and wound dressings"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Suture material and clamps"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Other medical devices for wound care"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Non-active dental equipment and instruments"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Dental materials"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Dental implants"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Devices for extra-corporal circulation, infusion and haemopheresis"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Respiratory devices, devices including hyperbaric chambers for oxygen therapy, inhalation anaesthesia"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Devices for stimulation or inhibition"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Active surgical devices"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Active ophthalmologic devices"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Active dental devices"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Active devices for disinfection and sterilisation"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Active rehabilitation devices and active prostheses"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Active devices for patient positioning and transport"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Active devices for in vitro fertilisation (IVF) and assisted reproductive therapy (ART)"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      },
      {
        products: ["Software"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "EC verification",
          "Production quality assurance",
          "Product quality assurance"
        ]
      }
    ]
  },
  {
    name: "In vitro diagnostic medical devices ",
    rows: [{
        products: ["Reagents and reagent products, including related calibrators and control materials, for determining the following blood groups"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [""]
      },
      {
        products: ["ABO system"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Rhesus (C, c, D, E, e)"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Anti-Kell"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["HIV infection (HIV 1 and 2)"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["HTLV I and II"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Hepatitis B, C and D"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Variant Creutzfeldt-Jakob disease (vCJD)"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Anti-Duffy and anti-Kidd"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Irregular anti-erythrocytic antibodies"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Congenital infections: rubella, toxoplasmosis"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Hereditary disease: phenylketonuria"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Human infections: cytomegalovirus, chlamydia"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["HLA tissue groups: DR, A, B"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Tumoral marker: PSA"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Risk of trisomy 21 (incl. software)"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Device for self-diagnosis: device for the measurement of blood sugar"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Clinical chemistry"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Haematology"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Immunology"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Molecular biology"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Pregnancy and ovulation"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      },
      {
        products: ["Specimen receptacles"],
        annexes: [
        "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
        ],
        limitations: [],
        procedures: [
          "Full quality assurance system",
          "EC type-examination",
          "Production quality assurance"
        ]
      }
    ]
  }
]
    },
    {
      id: "24",
      body: {
        number: "339",
        name: "BTTG Testing & Certification Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "cabutcher@bttg-cert.co.uk",
          website: "http://www.bureauveritas.co.uk/wps/wcm/connect/bv_couk/Local/Home/Our-Services/Certification",
          phoneNumber: "0 161 873 6543",
          address: "Unit 14\nWheel Forge Way\nTrafford Park\nManchester\nM17 1EH United Kingdom"
        },
      },
      accs: []
    },
    {
      id: "25",
      body: {
        number: "301",
        name: "BUREAU VERITAS CERTIFICATION UK LTD.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "david.sharman@uk.bureauveritas.com",
          website: "www.bureauveritas.com/cp",
          phoneNumber: "020 7661 0700",
          address: "Great Guildford House\n30 Great Guildford Street\nLondon\nSE1 0ES"
        },
      },
      accs: []
    },
    {
      id: "26",
      body: {
        number: "358",
        name: "BUREAU VERITAS CONSUMER PRODUCTS SERVICES UK LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "bvsales@uk.bureauveritas.com",
          website: "www.bureauveritas.co.uk",
          phoneNumber: "0 1925 854360",
          address: "31 Kingsland Grange\nWoolston\nWarrington\n Cheshire WA1 4RW"
        },
      },
      accs: []
    },
    {
      id: "27",
      body: {
        number: "2414",
        name: "BUREAU VERITAS UK LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "manchester@uk.bureauveritas.com",
          website: "",
          phoneNumber: "0 161 446 4600",
          address: "Parklands 825A Wilmslow Road Didsbury\nManchester\nM20 2RE"
        },
      },
      accs: []
    },
    {
      id: "28",
      body: {
        number: "846",
        name: "BURY METROPOLITAN BOROUGH COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "a.c.bunn@bury.gov.uk",
          website: "",
          phoneNumber: "44 0 161 2536022",
          address: "3 Knowsley Place Duke Street\nBURY\nBL9 0EJ"
        },
      },
      accs: []
    },
    {
      id: "29",
      body: {
        number: "2222",
        name: "Blue Anchor Fire & Safety",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "neil@blueanchor-fs.co.uk",
          website: "www.basec.org.uk",
          phoneNumber: "0 1466 751389",
          address: "Nethermills Cottage\nCornhill\nBanff\nAberdeen\n AB45 2ET"
        },
      },
      accs: []
    },
    {
      id: "30",
      body: {
        number: "2661",
        name: "British Approvals Service for Cables (BASEC)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "mail@basec.org.uk",
          website: "www.bbacerts.co.uk",
          phoneNumber: "01908 267300",
          address: "Presley House\nPresley Way\nCrownhill\nMilton\nKeynes, MK8 0ES"
        },
      },
      accs: []
    },
    {
      id: "31",
      body: {
        number: "836",
        name: "British Board of Agrément",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "clientservices@bbacerts.co.uk",
          website: "www.buildcheck.co.uk",
          phoneNumber: "01923 665300",
          address: "Bucknalls Lane\nGarston\n Watford WD25 9BA"
        },
      },
      accs: []
    },
    {
      id: "32",
      body: {
        number: "1806",
        name: "Build Check Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@buildcheck.co.uk",
          website: "http://www.building-testing.co.uk",
          phoneNumber: "01494 452 713",
          address: "Montrose House\nLancaster Road\nCressex Business Park\nHigh\nWycombe, Buckinghamshire HP12 3PY"
        },
      },
      accs: []
    },
    {
      id: "33",
      body: {
        number: "1334",
        name: "Building Investigation and Testing Services (Surrey) Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "bitslab@btconnect.com",
          website: "",
          phoneNumber: "216:39:12",
          address: "Quarryside Business Park\noff Holmethorpe Industial Estate\n(Watercolour)\nThornton Side\nRedhill\nRH1 2LJ"
        },
      },
      accs: []
    },
    {
      id: "34",
      body: {
        number: "119",
        name: "CALOR GAS APPLIANCE TESTING LABORATORY CALOR GAS LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "www.ccqs.co.uk",
          phoneNumber: "44.753.54.00.00",
          address: "Appleton Park\nSL3\n9JG SLOUGH"
        },
      },
      accs: []
    },
    {
      id: "35",
      body: {
        number: "1105",
        name: "CCQS UK LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@ccqs.co.uk",
          website: "http://www.cem-international.co.uk",
          phoneNumber: "020 7868 1509",
          address: "Level 2 5 Harbour Exchange Square\nLondon\n E14 9GE"
        },
      },
      accs: []
    },
    {
      id: "36",
      body: {
        number: "1942",
        name: "CEM INTERNATIONAL LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "paul.white@cem-international.co.uk",
          website: "www.catg.co.uk",
          phoneNumber: "0 1252 547721",
          address: "Westmead House\nWestmead\nFarnborough\n Hampshire, GU14 7LP"
        },
      },
      accs: []
    },
    {
      id: "37",
      body: {
        number: "1245",
        name: "CERTIFICATION AND TIMBER GRADING LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "glennsharples@hotmail.com",
          website: "www.cesaglobal.com",
          phoneNumber: "44(0) 1524 400632",
          address: "29 A Princes Crescent\nMorecambe\n Lancashire LA4 6BY"
        },
      },
      accs: []
    },
    {
      id: "38",
      body: {
        number: "2623",
        name: "CESA Global Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "tech@cesaglobal.com",
          website: "www.cheshirewestandchester.gov.uk",
          phoneNumber: "01707 828783",
          address: "Maple House High Street\nPotters\nBar EN6 5BS"
        },
      },
      accs: []
    },
    {
      id: "39",
      body: {
        number: "138",
        name: "CHESHIRE WEST AND CHESTER COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "calibrationservice@cheshirewestandchester.gov.uk",
          website: "www.codeaweld.co",
          phoneNumber: "0 1244 973986",
          address: "Regulatory Services HQ Building Nicholas Street\nChester\nCH1 2NP"
        },
      },
      accs: []
    },
    {
      id: "40",
      body: {
        number: "2234",
        name: "CODE-A-WELD INSPECTION LTD",
        bodyType: "Recongised third party organisation",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@codeaweld.com",
          website: "",
          phoneNumber: "44 1761 410410",
          address: "Unit 2\nSecond Avenue\nWestfield Trading Estate\nRadstock\nBA3 4BE"
        },
      },
      accs: []
    },
    {
      id: "41",
      body: {
        number: "350",
        name: "CUMBRIA COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "www.blueskycert.co",
          phoneNumber: "44 1761 410410",
          address: "The Courts - Carlisle\nCA3\n8LZ CUMBRIA"
        },
      },
      accs: []
    },
    {
      id: "42",
      body: {
        number: "2731",
        name: "Calibso Limited (trading as Bluesky Certification)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "sbeer@blueskycert.com",
          website: "www.calor.co.uk",
          phoneNumber: "44(0) 1753 303828",
          address: "20 – 22 Wenlock Road\nLondon\nN1 7GU"
        },
      },
      accs: []
    },
    {
      id: "43",
      body: {
        number: "1846",
        name: "Calor Gas Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "aneale@calor.co.uk",
          website: "www.calorgas.i",
          phoneNumber: "0 1926 330088",
          address: "Athena House Athena Drive Tachbrook Park\nWarwick\nCV34 6RL"
        },
      },
      accs: []
    },
    {
      id: "44",
      body: {
        number: "2446",
        name: "Calor Gas Northern Ireland Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@calorgas.ie",
          website: "www.cambridge-fire.co.uk",
          phoneNumber: "02890 735047",
          address: "Pressure Test Services Airport Road West Sydenham\nBelfast\nBT3 9EE"
        },
      },
      accs: []
    },
    {
      id: "45",
      body: {
        number: "2337",
        name: "Cambridge Fire Research Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "testing@cambridge-fire.co.uk",
          website: "",
          phoneNumber: "44(0) 1223 834752",
          address: "Brewery Road\nPampisford\nCambridge\nCB22 3HG"
        },
      },
      accs: []
    },
    {
      id: "46",
      body: {
        number: "2229",
        name: "Central Cylinder Testing",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "dc_cct@btconnect.com",
          website: "www.centreforassessment.co.uk/",
          phoneNumber: "01757 709552",
          address: "Central Lodge Thorpe Wood Selby YO8 3RG\nNorth\nYorkshire"
        },
      },
      accs: []
    },
    {
      id: "47",
      body: {
        number: "2551",
        name: "Centre for Assessment Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiries@centreforassessment.co.uk",
          website: "info@cmlex.com",
          phoneNumber: "00161 237 4080",
          address: "Churchgate House\n56 Oxford Street\nManchester M1 6EU\nManchester"
        },
      },
      accs: []
    },
    {
      id: "48",
      body: {
        number: "2503",
        name: "Certification Management Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@cmlex.com",
          website: "www.certifiedconformity.co.uk",
          phoneNumber: "0 151 559 1160",
          address: "Unit 1 Newport Business Park New Port Road\nEllesmere\nPort CH65 4LZ"
        },
      },
      accs: []
    },
    {
      id: "49",
      body: {
        number: "2721",
        name: "Certified Conformity Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiries@certifiedconformity.co.uk",
          website: "www.codeaweld.co",
          phoneNumber: "0 8455191629",
          address: "Suite 5 Hearle House East Terrace Business Park Euxton Lane Euxton\nChorley\nPR7 6TB"
        },
      },
      accs: []
    },
    {
      id: "50",
      body: {
        number: "2638",
        name: "Code A Weld Inspection Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "inspection@codeaweld.com",
          website: "www.csts.co.uk",
          phoneNumber: "0 1761 410410",
          address: "2nd Avenue Westfield Trading Estate\nRadstock\nBath BA3 4BE"
        },
      },
      accs: []
    },
    {
      id: "51",
      body: {
        number: "2552",
        name: "Confined Spaces Training Services",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "kevin@csts.co.uk",
          website: "www.cranage.co.uk",
          phoneNumber: "0208 805 5144",
          address: "25 Jute Lane\nBrimsdown\nEnfield\nMiddlesex EN3 7PF"
        },
      },
      accs: []
    },
    {
      id: "52",
      body: {
        number: "2583",
        name: "Cranage EMC Testing Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "mark@cranage.co.uk",
          website: "www.ctsukltd.com",
          phoneNumber: "44 01630 658568 Ext. 102",
          address: "Stable Court Oakley\nMarket\nDrayton TF9 4AG"
        },
      },
      accs: []
    },
    {
      id: "53",
      body: {
        number: "2205",
        name: "Cylinder Testing and Sales (UK) Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "ctsuk@btconnect.com",
          website: "",
          phoneNumber: "0151 448 0555",
          address: "16 Bridge Industrial Estate Speke Hall Road L24 9HB\nLiverpool"
        },
      },
      accs: []
    },
    {
      id: "54",
      body: {
        number: "5353",
        name: "DEFENCE CLOTHING AND TEXTILE AGENCY PPE CERTIFICATION GROUP",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "www.deltarail.co",
          phoneNumber: "44.123.551.36.21",
          address: "Purchas Road - Didcot\nOX11\n7HG OXON"
        },
      },
      accs: []
    },
    {
      id: "55",
      body: {
        number: "1127",
        name: "DELTA RAIL NOTIFIED BODY LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "paul.harborough@deltarail.co.uk",
          website: "www.derbyshire.gov.uk",
          phoneNumber: "44:870:190 1323",
          address: "Hudson House 2 Hudson Way Pride Park Derby DE24 8HS\nDerby"
        },
      },
      accs: []
    },
    {
      id: "56",
      body: {
        number: "487",
        name: "DERBYSHIRE COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "robert.taylour@derbyshire.gov.uk",
          website: "www.dnvgl.co",
          phoneNumber: "44(0) 1629 580000",
          address: "Chatsworth Hall Chesterfield Road\nMatlock\nDE4 3FW"
        },
      },
      accs: []
    },
    {
      id: "57",
      body: {
        number: "97",
        name: "DNV GL UK LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "andrew.derbyshire@dnvgl.com",
          website: "",
          phoneNumber: "0 203 816 4541",
          address: "Palace House\n3 Cathedral Street\nLondon\nSE1 9DE"
        },
      },
      accs: []
    },
    {
      id: "58",
      body: {
        number: "4134",
        name: "DOW CORNING LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "antony.p.heaven@dowcorning.com",
          website: "",
          phoneNumber: "0 1446 723218",
          address: "Cardiff Road\nBarry\nSouth Glamorgan CF63 2YL"
        },
      },
      accs: []
    },
    {
      id: "59",
      body: {
        number: "557",
        name: "DRA BRIDGEWATER",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "www.dtgtesting.com",
          phoneNumber: "44.127.868.33.43",
          address: "Bridgewater - Puriton\nTA7\n8AD SOMERSET"
        },
      },
      accs: []
    },
    {
      id: "60",
      body: {
        number: "2783",
        name: "DTG Testing Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "testing@dtg.org.uk",
          website: "",
          phoneNumber: "020 7840 6550",
          address: "5th Floor 89 Albert Embankment Vauxhall\nLondon\nSE1 7TP"
        },
      },
      accs: []
    },
    {
      id: "61",
      body: {
        number: "479",
        name: "DU PONT (UK) LIMITED - KEVLAR PLANT - GLOVES & FABRIC TESTING LABORATORY",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "",
          phoneNumber: "44.150.486.08.60",
          address: "Maydown Works - PO Box 15\nBT47\n1TU LONDONDERRY"
        },
      },
      accs: []
    },
    {
      id: "62",
      body: {
        number: "565",
        name: "DUNDEE CITY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "ken.daly@dundeecity.gov.uk",
          website: "",
          phoneNumber: "44/13.82.43.62.60",
          address: "3 City Square\nDundee\nDD1 3BA"
        },
      },
      accs: []
    },
    {
      id: "63",
      body: {
        number: "1845",
        name: "Defence Electronics & Components Agency",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "john.watson@dsg.mod.uk",
          website: "www.economy-ni.gov.uk",
          phoneNumber: "0 1785 785181",
          address: "Cryogenics and Gas Section DSG Stafford Bld 34A\nSite 6\nBeaconside\nStafford ST18 0AQ"
        },
      },
      accs: []
    },
    {
      id: "64",
      body: {
        number: "326",
        name: "Department for the Economy",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Michelle.Craig@economy-ni.gov.uk",
          website: "www.dominion-gas.com",
          phoneNumber: "44(0) 28 9025 3905",
          address: "176 Newtonbreda Road\nBELFAST\nBT8 6QS"
        },
      },
      accs: []
    },
    {
      id: "65",
      body: {
        number: "2258",
        name: "Dominion Technology Gases Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "DTGL@dominion-gas.com",
          website: "www.norfolk.gov.uk/calibration",
          phoneNumber: "#ERROR!",
          address: "Dominion Building Howemoss Avenue Kirkhill Industrial Estate Dyce AB21 0GP\nAberdeen"
        },
      },
      accs: []
    },
    {
      id: "66",
      body: {
        number: "922",
        name: "EETSA Ltd (East of England Trading Standards Association)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "calibration@norfolk.gov.uk",
          website: "",
          phoneNumber: "0 1953 859149",
          address: "C/O Norfolk County Council Unit 69 Hethel Engineering Centre Chapman Way Hethel\nNorwich\nNR14 8FB"
        },
      },
      accs: []
    },
    {
      id: "67",
      body: {
        number: "886",
        name: "EMC PROJECTS LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "mike@emc-project.co.uk",
          website: "www.exova.co",
          phoneNumber: "0 1425 479979",
          address: "Holly Grove Farm Verwood Road\nAshley\nRingwood BH24 2DB"
        },
      },
      accs: []
    },
    {
      id: "68",
      body: {
        number: "1314",
        name: "EXOVA (UK) Ltd",
        bodyType: "Type approval body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "europe@exova.com",
          website: "www.element.co",
          phoneNumber: "#REF!:569800",
          address: "Chiltern House\nStocking Lane\nHP14\n4ND HIGH WYCOMBE"
        },
      },
      accs: []
    },
    {
      id: "69",
      body: {
        number: "891",
        name: "Element Materials Technology Warwick Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "test@tracglobal.com",
          website: "http://www.exova.com",
          phoneNumber: "0 1926 478478",
          address: "Rothwell Road\nWarwick\nCV34 5JX"
        },
      },
      accs: []
    },
    {
      id: "70",
      body: {
        number: "1104",
        name: "Element Materials Technology Wednesbury Limited, trading as Element",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "ian.keeling@exova.com",
          website: "www.energas.co.uk",
          phoneNumber: "0 1902:722122",
          address: "Key Industrial Park\nFernside Road\nWV13\n3YA WILLENHALL"
        },
      },
      accs: []
    },
    {
      id: "71",
      body: {
        number: "2599",
        name: "Energas Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@energas.co.uk",
          website: "www.essar.co",
          phoneNumber: "01482 329333",
          address: "Westmorland Street\nHull\nHU2 0HX"
        },
      },
      accs: []
    },
    {
      id: "72",
      body: {
        number: "2639",
        name: "Essar Oil (UK) Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "chris.davies@stanlowrefinery.co.uk",
          website: "www.essar.co",
          phoneNumber: "0 151 350 4984",
          address: "PO Box 3 Ellesmere Port\nSouth\nWirral CH56 4HB"
        },
      },
      accs: []
    },
    {
      id: "73",
      body: {
        number: "5355",
        name: "Essar Oil (UK) Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "chris.davies@essaroil.co.uk",
          website: "www.Product-Testing.eurofins.com",
          phoneNumber: "0151 350 4984",
          address: "Stanlow Manufacturing Complex Ellesmere Port\nUK\nCHESHIRE CH65 4HB"
        },
      },
      accs: []
    },
    {
      id: "74",
      body: {
        number: "355",
        name: "Eurofins Product Testing Services Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "judithrussell@eurofins.co.uk",
          website: "www.eqa.co.uk",
          phoneNumber: "0 161 868 7600",
          address: "Durham House\nCross Street\nSale\nM33 7HH"
        },
      },
      accs: []
    },
    {
      id: "75",
      body: {
        number: "2441",
        name: "European Quality Assurance",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "eqa@eqa.co.uk",
          website: "http://www.exveritas.com",
          phoneNumber: "44 1636 611226",
          address: "Newark Beacon Beacon Hill Office Park Cafferata Way\nNewark\nNG24 2TN"
        },
      },
      accs: []
    },
    {
      id: "76",
      body: {
        number: "2585",
        name: "Ex Veritas Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "s.clarke@exveritas.com",
          website: "www.exovabmtrada.com",
          phoneNumber: "44 0845 862 2447",
          address: "Ex Veritas Limited Units 16 - 18 Abenbury Way Wrexham Industrial Estate\nWrexham\nLL13 9UZ"
        },
      },
      accs: []
    },
    {
      id: "77",
      body: {
        number: "3534",
        name: "Exova (UK) Ltd trading as BM TRADA",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "cert.admin@exova.com",
          website: "www.fifedirect.org.uk/tradingstandards",
          phoneNumber: "44(0) 1494 569 700",
          address: "Stocking Lane\nHughenden Valley\nBUCKS\nHP14 4NR HIGH WYCOMBE"
        },
      },
      accs: []
    },
    {
      id: "78",
      body: {
        number: "628",
        name: "FIFE COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "dawn.adamson@fife.gov.uk",
          website: "www.blackpool.ac.uk/fosc",
          phoneNumber: "44/34.51.55.55.55",
          address: "Trading Standards Kingdom House Kingdom Avenue Glenrothes\nFife\nKY7 5LY"
        },
      },
      accs: []
    },
    {
      id: "79",
      body: {
        number: "514",
        name: "FLEETWOOD TEST HOUSE, BLACKPOOL AND THE FYLDE COLLEGE",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Brooke.Schofield@blackpool.ac.uk",
          website: "www.fmapprovals.co",
          phoneNumber: "0 1253 504725",
          address: "Blackpool and the Fylde College Fleetwood Nautical Campus Broadwater Fleetwood\nFY7\n8JZ Lancashire"
        },
      },
      accs: []
    },
    {
      id: "80",
      body: {
        number: "4346",
        name: "FM Approvals Ltd",
        bodyType: "Type approval body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "andrew.was@fmglobal.com",
          website: "www.fmapprovals.co",
          phoneNumber: "44:1753:750 000",
          address: "1 Windsor Dials\nWindsor"
        },
      },
      accs: []
    },
    {
      id: "81",
      body: {
        number: "1725",
        name: "FM Approvals Ltd.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "andrew.was@fmapprovals.com",
          website: "www.flameskill.co.uk",
          phoneNumber: "2:138:750000",
          address: "1 Windsor Dials\nWindsor\n Berkshire, SL4 1RS"
        },
      },
      accs: []
    },
    {
      id: "82",
      body: {
        number: "2560",
        name: "Flameskill Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "admin@flameskill.co.uk",
          website: "www.flogas.co.uk",
          phoneNumber: "01493 440464",
          address: "1\nMorton Peto Estate\nGreat\nYarmouth Norfolk NR31 0LT"
        },
      },
      accs: []
    },
    {
      id: "83",
      body: {
        number: "2263",
        name: "Flogas Britain Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "alan.kirk@flogas.co.uk",
          website: "",
          phoneNumber: "01493 440464",
          address: "Rayns Way Watermead Business Park Syston LE7 1PF\nLeicester"
        },
      },
      accs: []
    },
    {
      id: "84",
      body: {
        number: "520",
        name: "GATESHEAD METROPOLITAN BOROUGH COUNCILDEPARTMENT OF HEALTH & CONSUMER SERVICES",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "www.gl-group.com/certser",
          phoneNumber: "44/19.14.77.10.11",
          address: "Civic Center - Regent Street\nNE8\n1HH Gateshead - Tyne & Wear"
        },
      },
      accs: []
    },
    {
      id: "85",
      body: {
        number: "87",
        name: "GL Industrial Services UK Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "cert.serv@gl-group.com",
          website: "",
          phoneNumber: "0 1509 282066",
          address: "Holywell Park\nNew Ashby Road\nLoughborough\nLE11 3GR"
        },
      },
      accs: []
    },
    {
      id: "86",
      body: {
        number: "5345",
        name: "Gammax Independent Inspection Services Ltd",
        bodyType: "Recognised third party organisation",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "william@gammaxuk.co.uk",
          website: "www.gascylindersuk.co.uk",
          phoneNumber: "01284 850888",
          address: "Units 12-13 Oaklands Business Park Rougham Hill\nBury\nSt Edmunds IP33 2RW"
        },
      },
      accs: []
    },
    {
      id: "87",
      body: {
        number: "2230",
        name: "Gas Cylinders UK Ltd.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "gascylinders@blueyonder.co.uk",
          website: "www.glass-ts.com",
          phoneNumber: "01942 865070",
          address: "340 Haydock Lane Haydock Industrial Estate St Helens WA11 9UY\nMerseyside"
        },
      },
      accs: []
    },
    {
      id: "88",
      body: {
        number: "2461",
        name: "Glass Technology Services Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "h.marsh@britglass.co.uk",
          website: "www.globalgroup.ne",
          phoneNumber: "44(0) 114 290 1801",
          address: "9 Churchill Way Chapeltown\nSheffield\nS35 2PY"
        },
      },
      accs: []
    },
    {
      id: "89",
      body: {
        number: "858",
        name: "GlobalGROUP of Companies Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiry@globalgroup.net",
          website: "",
          phoneNumber: "0 845 548 9001",
          address: "21 Lansdowne Crescent\nEdinburgh\nEH12 5EH"
        },
      },
      accs: []
    },
    {
      id: "90",
      body: {
        number: "1675",
        name: "HALCROW RAIL APPROVALS LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Stuart.Brown@ch2m.com",
          website: "www.hants.gov.uk/tradingstandard",
          phoneNumber: "01332 222 636",
          address: "2nd Floor\nQuarnmill House\nStores Road\nDerby\nDE21 4XF"
        },
      },
      accs: []
    },
    {
      id: "91",
      body: {
        number: "422",
        name: "HAMPSHIRE TRADING STANDARDS SERVICE (HCC)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "neil.lawrence2@hants.gov.uk",
          website: "www.hsl.gov.uk",
          phoneNumber: "44(0)1962 833696",
          address: "Montgomery House Monarch Way\nWinchester\nSO22 5PW"
        },
      },
      accs: []
    },
    {
      id: "92",
      body: {
        number: "519",
        name: "HEALTH AND SAFETY EXECUTIVE",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "stewart.myatt@hsl.gov.uk",
          website: "www.highland.gov.uk",
          phoneNumber: "44/12.98.28.15.0",
          address: "Harpur Hill\nSK17\n9JN Buxton"
        },
      },
      accs: []
    },
    {
      id: "93",
      body: {
        number: "629",
        name: "HIGHLAND COUNCIL CORPORATE DEVELOPMENT",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "mark.mcginty@highland.gov.uk",
          website: "www.eucertification.co",
          phoneNumber: "44(0) 1463 228700",
          address: "Trading Standards 38 Harbour Road\nInverness\nIV1 1UF"
        },
      },
      accs: []
    },
    {
      id: "94",
      body: {
        number: "2587",
        name: "HPi Verification Services Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "ar@hipvs.com",
          website: "www.hpivs.co",
          phoneNumber: "0 1491 822817",
          address: "The Manor House Howbery Park Wallingford\nOxfordshire\nOX10 8BA"
        },
      },
      accs: []
    },
    {
      id: "95",
      body: {
        number: "1521",
        name: "HPi Verification Services Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "ar@hpivs.com",
          website: "www.hsb.co",
          phoneNumber: "0 1491 822818",
          address: "The Manor House\nHowbery Park\nWallingford\nOX10 8BA"
        },
      },
      accs: []
    },
    {
      id: "96",
      body: {
        number: "878",
        name: "HSB INSPECTION QUALITY LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "gavin_edley@hsb.com",
          website: "www.HSBGlobalStandards.com",
          phoneNumber: "44/161 621 5670",
          address: "Cairo House\nGreenacres R.\nWaterhead\nOL4\n3JA OLDHAM"
        },
      },
      accs: []
    },
    {
      id: "97",
      body: {
        number: "2561",
        name: "Hartford Steam Boiler UK Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "gavin_edley@hsbct.com",
          website: "http://www.horiba-mira.com",
          phoneNumber: "0 161 832 9502",
          address: "Unit 7\nBrewery Yard Deva City Office Park Trinity Way\nSalford\n M3 7BB"
        },
      },
      accs: []
    },
    {
      id: "98",
      body: {
        number: "888",
        name: "Horiba MIRA Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "certification@horiba-mira.com",
          website: "www.hursley-emc.co.uk",
          phoneNumber: "0 247 635 5500",
          address: "Watling Street\nNuneaton\nWarwickshire CV10 0TU"
        },
      },
      accs: []
    },
    {
      id: "99",
      body: {
        number: "2635",
        name: "Hursley EMC Services Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Andy.Coombes@hursley-emc.co.uk",
          website: "",
          phoneNumber: "44(0)23 8027 1111",
          address: "Hursley EMC Services Limited Trafalgar House Trafalgar Close Chandler's Ford SO53 4BW\nChandler\ns Ford SO53 4BW"
        },
      },
      accs: []
    },
    {
      id: "100",
      body: {
        number: "1890",
        name: "Hursley EMC Services Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "rob@hursley-emc.co.uk",
          website: "www.ifccertification.com",
          phoneNumber: "023 8027 1111",
          address: "Trafalgar House Trafalgar Close\nEastleigh\nS053 4BW"
        },
      },
      accs: []
    },
    {
      id: "101",
      body: {
        number: "1720",
        name: "IFC CERTIFICATION LTD.",
        bodyType: "Type approval body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@ifccertification.com",
          website: "www.ifccertification.com",
          phoneNumber: "2:219:275500",
          address: "20 Park Street\nPrinces\nRisborough, Buckinghamshire HP27 9AH"
        },
      },
      accs: []
    },
    {
      id: "102",
      body: {
        number: "3423",
        name: "IFC Certification Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@ifccertification.com",
          website: "www.inspec-international.com",
          phoneNumber: "01844 275500",
          address: "20 Park Street\nPrinces\nRisborough Buckinghamshire\nHP27 9AH"
        },
      },
      accs: []
    },
    {
      id: "103",
      body: {
        number: "194",
        name: "INSPEC International Ltd.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "certification@inspec-international.com",
          website: "",
          phoneNumber: "0 161 737 0699",
          address: "56 Leslie Hough Way\nSalford\nGreater\nManchester M6 6AJ"
        },
      },
      accs: []
    },
    {
      id: "104",
      body: {
        number: "887",
        name: "INTERTEK TESTING & CERTIFICATION LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "-",
          website: "www.intertek.com",
          phoneNumber: "0 1372 370900",
          address: "ITS House\nCleeve Road\nKT22\n7SB LEATHERHEAD"
        },
      },
      accs: []
    },
    {
      id: "105",
      body: {
        number: "359",
        name: "INTERTEK TESTING & CERTIFICATION LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "alan.reynard@intertek.com",
          website: "www.isoqar.com",
          phoneNumber: "0 1372 370900",
          address: "Intertek House\nCleeve Road\nLeatherhead\n Surrey KT22 7SA"
        },
      },
      accs: []
    },
    {
      id: "106",
      body: {
        number: "513",
        name: "ISOQAR LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiries@isoqar.com",
          website: "www.intertek.com",
          phoneNumber: "44.161 865 3699",
          address: "Cobra Court 1 Blackmore Road\nStretford\nManchester M32 0QY"
        },
      },
      accs: []
    },
    {
      id: "107",
      body: {
        number: "362",
        name: "ITS Testing Services (UK) Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "john.horsler@intertek.com",
          website: "www.impact-solutions.co.uk",
          phoneNumber: "44.116 263.0330",
          address: "Centre Court Meridian Business Park Leicester\nLeicester\nLE19 1WD"
        },
      },
      accs: []
    },
    {
      id: "108",
      body: {
        number: "1719",
        name: "Impact Laboratories Limited trading as Impact Solutions",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@impact-solutions.co.uk",
          website: "www.incon.co.uk",
          phoneNumber: "44:01324 489182",
          address: "16 Abbotsinch Road\nGRANGEMOUTH\nFK3 9UX"
        },
      },
      accs: []
    },
    {
      id: "109",
      body: {
        number: "3432",
        name: "InCon - a Department of Inspection Consultants",
        bodyType: "Recognised third party organisation",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "neil@incon.co.uk",
          website: "http://www.intersciencecomms.co.uk",
          phoneNumber: "0 151 357 2212",
          address: "Rosscliffe Road\nEllesmere\nPort Cheshire CH65 3BS"
        },
      },
      accs: []
    },
    {
      id: "110",
      body: {
        number: "2700",
        name: "Interscience Communications Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "firetesting@intersciencecomms.co.uk.",
          website: "www.jrgases.co.uk",
          phoneNumber: "44(0)20 8692 5050",
          address: "Building 63\nHaslar Marine Technology Park Haslar Road\nGosport\nPO12 2AG"
        },
      },
      accs: []
    },
    {
      id: "111",
      body: {
        number: "2381",
        name: "J and R Gases Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "micheline@jrgases.co.uk",
          website: "",
          phoneNumber: "01282 699369",
          address: "Bradley Hall Road Nelson Lancashire BB9 8HF\nNelson"
        },
      },
      accs: []
    },
    {
      id: "112",
      body: {
        number: "2300",
        name: "J. W. Gray & Co.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "erik.burgess@jwgplc.co.uk",
          website: "www.jesp.co.uk",
          phoneNumber: "01595 693749",
          address: "Gremista Industrial Estate Lerwick ZE1 0PX\nShetland"
        },
      },
      accs: []
    },
    {
      id: "113",
      body: {
        number: "2301",
        name: "JESP Engineering Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "sales@jesp.co.uk",
          website: "www.kent.gov.uk/tradingstandards",
          phoneNumber: "01384 483144",
          address: "Units 4 & 5 Bevan Road Industrial Estate Bevan Road Brierley Hill DY5 3TF\nWest\nMidlands"
        },
      },
      accs: []
    },
    {
      id: "114",
      body: {
        number: "144",
        name: "KENT COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "steve.rock@kent.gov.uk",
          website: "www.kiwa.co.uk",
          phoneNumber: "0 3000414137",
          address: "TRADING STANDARDS PO BOX 320\nASHFORD\nKENT TN24 8AS"
        },
      },
      accs: []
    },
    {
      id: "115",
      body: {
        number: "558",
        name: "KIWA LTD T/A KIWA GASTEC",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiries@kiwa.co.uk",
          website: "www.laidler.co.uk",
          phoneNumber: "#REF!:677877",
          address: "Kiwa House Malvern View Business Park Stella Way Bishops Cleeve\nCheltenham\nGL52 7DQ"
        },
      },
      accs: []
    },
    {
      id: "116",
      body: {
        number: "870",
        name: "LAIDLER CERTIFICATION",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquire@laidler.co.uk",
          website: "www.lancashire.gov.uk",
          phoneNumber: "0 8700 111375",
          address: "Belaisis Business Centre Coxwold Way Billingham\nCleveland\nTS23 4EA"
        },
      },
      accs: []
    },
    {
      id: "117",
      body: {
        number: "173",
        name: "LANCASHIRE COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "calibration@lancashire.gov.uk",
          website: "www.leics.gov.uk",
          phoneNumber: "44(0) 1772 533564",
          address: "Trading Standards Room D21\nCounty Hall Pitt St\nPRESTON\nPR1 0LD"
        },
      },
      accs: []
    },
    {
      id: "118",
      body: {
        number: "175",
        name: "LEICESTERSHIRE COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "tradingstandards@leics.gov.uk",
          website: "www.liftcert.co.uk",
          phoneNumber: "0 116 305 8000",
          address: "Leicestershire County Council County Hall\nGlenfield\nLeicestershire LE3 8RA"
        },
      },
      accs: []
    },
    {
      id: "119",
      body: {
        number: "1291",
        name: "LIFT CERT LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "headoffice@liftcert.co.uk",
          website: "www.lrqa.com",
          phoneNumber: "0 1789 295300",
          address: "40\nTiddington Road\nStratford\nupon Avon Warwickshire CV37 7BA"
        },
      },
      accs: []
    },
    {
      id: "120",
      body: {
        number: "88",
        name: "LLOYD'S REGISTER QUALITY ASSURANCE LTD (0088)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiries@lrqa.com",
          website: "",
          phoneNumber: "0 33041 41352",
          address: "1 Trinity Park Bickenhill Lane\nBirmingham\nB37 7ES"
        },
      },
      accs: []
    },
    {
      id: "121",
      body: {
        number: "183",
        name: "LONDON BOROUGH OF HAVERING:NORTH EAST LONDON METROLOGY PARTNERSHIP",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Nichola.Lund@havering.gov.uk",
          website: "",
          phoneNumber: "01708 433427",
          address: "Langtons Cottage Billet Lane\nHornchurch\nRM11 1XL"
        },
      },
      accs: []
    },
    {
      id: "122",
      body: {
        number: "2491",
        name: "Lloyd's Register Apave Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "lloydsregisterapave@lr.org",
          website: "www.lr.org",
          phoneNumber: "0 207 423 1535",
          address: "71 Fenchurch Street\nLondon\nEC3M 4BS"
        },
      },
      accs: []
    },
    {
      id: "123",
      body: {
        number: "38",
        name: "Lloyd's Register Verification Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "ecdirectives@lr.org",
          website: "www.lucideon.com",
          phoneNumber: "44 330 414 1337",
          address: "71 Fenchurch Street\nLondon\nEC3M 4BS"
        },
      },
      accs: []
    },
    {
      id: "124",
      body: {
        number: "1855",
        name: "Lucideon CICS Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "support@lucideon.com",
          website: "www.lucideon.com",
          phoneNumber: "01782 411008",
          address: "Queen's Road\nPenkhull\nStoke\non Trent"
        },
      },
      accs: []
    },
    {
      id: "125",
      body: {
        number: "1289",
        name: "Lucideon Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Stephen.Morrey@lucideon.com",
          website: "",
          phoneNumber: "44:1782:764 428",
          address: "Queens Road\nPenkhull\nSTOKE\nON-TRENT ST47LQ"
        },
      },
      accs: []
    },
    {
      id: "126",
      body: {
        number: "486",
        name: "MANCHESTER CITY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "m.preston1@manchester.gov.uk",
          website: "www.melaviation.co.uk",
          phoneNumber: "44(0) 161 2341554",
          address: "1 Hammerstone Road\nGorton\nMANCHESTER M18 8EQ"
        },
      },
      accs: []
    },
    {
      id: "127",
      body: {
        number: "1992",
        name: "MEL Aviation Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@melaviation.co.uk",
          website: "",
          phoneNumber: "44(0)1787 373282",
          address: "Laurance Walter House Addison Road Chilton Industrial Estate\nSudbury\nSuffolk CO10 2YW"
        },
      },
      accs: []
    },
    {
      id: "128",
      body: {
        number: "319",
        name: "MERCHANDISE TESTING LABORATORIES (UK) LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "http://www.mottmac.com",
          phoneNumber: "44.133.236.31.00",
          address: "Oakhurst House - 57 Ashbourne Road\nDE22\n3FS DERBY"
        },
      },
      accs: []
    },
    {
      id: "129",
      body: {
        number: "1124",
        name: "MMRA LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "dave.weaver@mottmac.com",
          website: "www.railways.mottmac.com",
          phoneNumber: "44:20:7593 9703",
          address: "Sea Containers House\n20 Upper Ground\nLondon\nEngland. SE19LZ\nLondon"
        },
      },
      accs: []
    },
    {
      id: "130",
      body: {
        number: "2192",
        name: "MMRA Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "dave.weaver@mottmac.com",
          website: "www.meridiantechnicalservices.co",
          phoneNumber: "020 7651 0632",
          address: "10 Fleet Place\nLondon\nEC4A 7RB"
        },
      },
      accs: []
    },
    {
      id: "131",
      body: {
        number: "2747",
        name: "Meridian Technical Services Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "sales@meridiantechnicalservices.com",
          website: "",
          phoneNumber: "0 2083103911",
          address: "10-14 Hailey Road\nErith\n Kent DA18 4AP"
        },
      },
      accs: []
    },
    {
      id: "132",
      body: {
        number: "2113",
        name: "Minton, Treharne & Davies Ltd",
        bodyType: "Recognised third party organisation",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "michelle.clapham@minton.co.uk",
          website: "www.mts-uk.co.uk",
          phoneNumber: "0 29 2054 0000",
          address: "Merton House Croescadarn Close\nCardiff\nWales CF23 8HF"
        },
      },
      accs: []
    },
    {
      id: "133",
      body: {
        number: "2377",
        name: "Modern Testing Services (UK) Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "alan@mts-uk.co.uk",
          website: "",
          phoneNumber: "44 113 2407011",
          address: "118 Lupton Avenue\nLeeds\nLS29 6ED"
        },
      },
      accs: []
    },
    {
      id: "134",
      body: {
        number: "320",
        name: "NATIONAL ENGINEERING LABORATORY",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "",
          phoneNumber: "44.135.522.02.22",
          address: "East Kilbride\nG75\n0QU GLASGOW"
        },
      },
      accs: []
    },
    {
      id: "135",
      body: {
        number: "577",
        name: "NATIONAL QUALITY ASSURANCE LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "UNKNOWN",
          website: "https://www.gov.uk/government/organisations/office-for-product-safety-and-standard",
          phoneNumber: "44/15.82.86.67.66",
          address: "Gainsborough House - Houghton Hall Park\nW5\n5XZ Houghton Regis, Dunstable"
        },
      },
      accs: []
    },
    {
      id: "136",
      body: {
        number: "126",
        name: "NMO (a part of the Office for Product Safety & Standards)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Mannie.Panesar@nmo.beis.gov.uk",
          website: "www.northamptonshire.gov.uk",
          phoneNumber: "44:20:8943 7272",
          address: "Stanton Avenue Teddington\nMiddlesex\nTW11 0JZ"
        },
      },
      accs: []
    },
    {
      id: "137",
      body: {
        number: "347",
        name: "NORTHAMPTONSHIRE COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "amackay@northamptonshire.gov.uk",
          website: "www.nottinghamshire.gov.uk",
          phoneNumber: "0 1604 362437",
          address: "Trading Standards Department Wootton Hall Park\nNorthampton\nNN4 0GB"
        },
      },
      accs: []
    },
    {
      id: "138",
      body: {
        number: "441",
        name: "NOTTINGHAMSHIRE COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "south.tss@nottscc.gov.uk",
          website: "http://www.npl.co.uk/thermalconductivity",
          phoneNumber: "0 115 99 34800",
          address: "County Hall West Bridgford\nNOTTINGHAM\nNG2 7QP"
        },
      },
      accs: []
    },
    {
      id: "139",
      body: {
        number: "1146",
        name: "National Physical Laboratory",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "thermal_enquiries@npl.co.uk",
          website: "www.net-cert.co.uk",
          phoneNumber: "0 115 99 34800",
          address: "Hampton Road\nTeddington\nTW11 0LW"
        },
      },
      accs: []
    },
    {
      id: "140",
      body: {
        number: "2444",
        name: "Network Rail Certification Body limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "James.collinson@networkrail.co.uk",
          website: "www.networkrail.co.uk",
          phoneNumber: "0 1908 784001",
          address: "Network Rail Certification Body Ltd Ground Floor The Quadrant Caldecote Endergate\nMilton\nKeynes MK9M 1EN"
        },
      },
      accs: []
    },
    {
      id: "141",
      body: {
        number: "2030",
        name: "Network Rail Infrastructure Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "kevin.stannard@networkrail.co.uk",
          website: "www.aberdeencity.gov.uk",
          phoneNumber: "00 44 1332 262 999",
          address: "Room 221\nDerwent House RTC Business Park London Road\nDerby\nDE24 8UP"
        },
      },
      accs: []
    },
    {
      id: "142",
      body: {
        number: "602",
        name: "North of Scotland",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "tradingstandards@aberdeencity.gov.uk",
          website: "",
          phoneNumber: "44(0) 3000 200 292",
          address: "Aberdeen City Council Business Hub 15 Marischal College\nAberdeen\nAB10 1AB"
        },
      },
      accs: []
    },
    {
      id: "143",
      body: {
        number: "669",
        name: "ORKNEY ISLANDS COUNCIL OFFICES",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "gary.foubister@orkney.gov.uk",
          website: "www.oteac.co.uk",
          phoneNumber: "44 1856 873535",
          address: "Kirkwall\nORKNEY\nKW15 1NY"
        },
      },
      accs: []
    },
    {
      id: "144",
      body: {
        number: "2206",
        name: "OTEAC Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "general@oteac.co.uk",
          website: "https://www.oxfordshire.gov.uk/cms/public-site/trading-standards",
          phoneNumber: "01224 739040",
          address: "Templars House South Deeside Road Maryculter AB12 5GB\nAberdeen"
        },
      },
      accs: []
    },
    {
      id: "145",
      body: {
        number: "135",
        name: "OXFORDSHIRE COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "david.sandy@oxfordshire.gov.uk",
          website: "www.pbworld.com/ea",
          phoneNumber: "44(0) 7812953372",
          address: "Oxfordshire County Council Trading Standards Services Graham Hill House Electric Avenue Ferry Hinksey Road\nOxford\nOX2 0BY"
        },
      },
      accs: []
    },
    {
      id: "146",
      body: {
        number: "1520",
        name: "PARSONS BRINCKERHOFF LTD.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "pbqs@pbworld.com",
          website: "www.PAC.uk.com",
          phoneNumber: "44:191:226 2222",
          address: "Amber Court\nWilliam Armstrong Drive\nNEWCASTLE\nUPON TYNE, NE4 7YQ"
        },
      },
      accs: []
    },
    {
      id: "147",
      body: {
        number: "545",
        name: "POWERED ACCESS CERTIFICATION LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@PAC.uk.com",
          website: "www.patersonsafety",
          phoneNumber: "0 1539 444736",
          address: "P.O. Box 98\nWindermere\n Cumbria LA23 1WF"
        },
      },
      accs: []
    },
    {
      id: "148",
      body: {
        number: "2207",
        name: "Paterson (Safety Air Systems) Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "tomw@patersonsafety.co.uk",
          website: "www.ptsinternational.co.uk",
          phoneNumber: "01236 820700",
          address: "The Green Twechar Kilsyth G65 9QQ\nGlasgow"
        },
      },
      accs: []
    },
    {
      id: "149",
      body: {
        number: "2448",
        name: "Pavement Testing Services Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "vera.sermon@ptsinternational.co.uk",
          website: "http://www.phillips66.co.uk",
          phoneNumber: "0 1772 792899",
          address: "Britannia House 1 Rough Hey Road Grimsargh\nPreston\nPR2 5AR"
        },
      },
      accs: []
    },
    {
      id: "150",
      body: {
        number: "1414",
        name: "Phillips66 Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "neil.mumby@p66.com",
          website: "www.railwayapprovals.com",
          phoneNumber: "01469 555084",
          address: "Humber Refinery South Killingholme\nGrimsby\nNorth East Lincolnshire DN40 3DW"
        },
      },
      accs: []
    },
    {
      id: "151",
      body: {
        number: "1125",
        name: "RAILWAY APPROVALS LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Robert.Dale@railwayapprovals.com",
          website: "",
          phoneNumber: "01332 483838",
          address: "Derwent House\nRTC\nLondon Road\nDerby\nDE24 8UP"
        },
      },
      accs: []
    },
    {
      id: "152",
      body: {
        number: "647",
        name: "RGIT MONTROSE LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "www.rina.org",
          phoneNumber: "44/012.24.89.07.07",
          address: "Blackness Avenue - Altens\nAB12\n3PG ABERDEEN"
        },
      },
      accs: []
    },
    {
      id: "153",
      body: {
        number: "2740",
        name: "RINA UK Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "lewis.northcott@rina.org",
          website: "",
          phoneNumber: "0 2380 332271",
          address: "North Wing 1st Floor 2 Charlotte Place\nSouthampton\nSO14 0TB"
        },
      },
      accs: []
    },
    {
      id: "154",
      body: {
        number: "1681",
        name: "ROYAL YACHTING ASSOCIATION (RYA)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "rcd@rya.org.uk",
          website: "www.imsworld.org",
          phoneNumber: "#REF!:80604201",
          address: "RYA House\nEnsign Way\nHamble\nSO31\n4YA SOUTHAMPTON"
        },
      },
      accs: []
    },
    {
      id: "155",
      body: {
        number: "2141",
        name: "Reliance Technical Service Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "martin@imsworld.org",
          website: "certification.ricardo.co",
          phoneNumber: "0 1376 500068",
          address: "Little Braxted Hall Little Braxted Essex CM8 3EU\nLittle\nBraxted"
        },
      },
      accs: []
    },
    {
      id: "156",
      body: {
        number: "2673",
        name: "Ricardo Certification Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "stephen.clarke3ricardo.com",
          website: "www.safenet.co.uk",
          phoneNumber: "0 1904 405870",
          address: "5 St Mary's Court Blossom Street York YO24 1AH\nYork"
        },
      },
      accs: []
    },
    {
      id: "157",
      body: {
        number: "1674",
        name: "SAFENET LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "office@safenet.co.uk",
          website: "www.saiglobal.co",
          phoneNumber: "0 1832 732 174",
          address: "Denford Garage\nDenford\nKettering\n Northants NN14 4EQ"
        },
      },
      accs: []
    },
    {
      id: "158",
      body: {
        number: "2056",
        name: "SAI Global Assurance Services Ltd.",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "product@saiglobal.com",
          website: "",
          phoneNumber: "0 1908 249912",
          address: "Partis House Ground Floor Davy Avenue\nKnowlhill\nMilton\nKeynes MK5 8HJ"
        },
      },
      accs: []
    },
    {
      id: "159",
      body: {
        number: "141",
        name: "SANDWELL METROPOLITAN BOROUGH COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "bob_charnely@sandwell.gov.uk",
          website: "www.satra.co.uk",
          phoneNumber: "0121 569 6592",
          address: "Trading Standards and Licensing Unit 33 Coneygree Road Tipton\nWest\nMidlands DY4 8XR"
        },
      },
      accs: []
    },
    {
      id: "160",
      body: {
        number: "321",
        name: "SATRA",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@satra.co.uk",
          website: "www.tradingstandards.gov.uk/scotborder",
          phoneNumber: "01536 410000",
          address: "SATRA Technology Centre Ltd Wyndham Way Telford Way\nKettering\n Northamptonshire, NN16 8SD"
        },
      },
      accs: []
    },
    {
      id: "161",
      body: {
        number: "580",
        name: "SCOTTISH BORDERS COUNCILPROTECTIVE SERVICES DEPARTMENT",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Iclarkson@scotborders.gov.uk",
          website: "www.sgs.co.uk/sgsbaseefa",
          phoneNumber: "44(0) 1896 823922",
          address: "Newton St. Boswells\nTD6\n0SA MELROSE"
        },
      },
      accs: []
    },
    {
      id: "162",
      body: {
        number: "1180",
        name: "SGS BASEEFA LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "sgsbaseefa@sgs.com",
          website: "www.sgs.com/correlrail",
          phoneNumber: "0766600",
          address: "Rockhead Business Park Staden Lane\nSK17\n9RZ BUXTON"
        },
      },
      accs: []
    },
    {
      id: "163",
      body: {
        number: "1144",
        name: "SGS CORREL RAIL LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "chris.llewellyn@sgs.com",
          website: "www.mistesting.co.uk",
          phoneNumber: "0121 326 3684",
          address: "Gee House Holborn Hill\nBirmingham\nB7 5PA"
        },
      },
      accs: []
    },
    {
      id: "164",
      body: {
        number: "3525",
        name: "SGS MIS Testing Ltd",
        bodyType: "Recognised third party organisation",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "r.leitch@mistesting.co.uk",
          website: "",
          phoneNumber: "0161 873 7662",
          address: "Unit 2\nKestrel Road\nManchester\n M17 1SF"
        },
      },
      accs: []
    },
    {
      id: "165",
      body: {
        number: "2640",
        name: "SGS MIT Testing Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "sales.manchester@mistesting.co.uk",
          website: "www.uk.sgs.com",
          phoneNumber: "0 1618 737662",
          address: "Unit 2 Western Access Kestrel Road Trafford Park\nManchester\nM17 1SF"
        },
      },
      accs: []
    },
    {
      id: "166",
      body: {
        number: "890",
        name: "SGS UNITED KINGDOM LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "keith.hutchinson@sgs.com",
          website: "www.sgs.co",
          phoneNumber: "0 191 377 2000",
          address: "South Industrial Estate Bowburn\nCounty\nDurham DH6 5AD"
        },
      },
      accs: []
    },
    {
      id: "167",
      body: {
        number: "353",
        name: "SGS UNITED KINGDOM LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "office@sgs.com",
          website: "http://www.sgs.co.uk/en-GB/Logistics/Transportation/Rail.asp",
          phoneNumber: "0 121 520 6454",
          address: "SGS House\nJohns Lane Tividale\nOldbury\nB69 3HX"
        },
      },
      accs: []
    },
    {
      id: "168",
      body: {
        number: "2642",
        name: "SGS United Kingdom Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "chris.llewellyn@sgs.com",
          website: "www.uk.sgs.com",
          phoneNumber: "0 121 326 3684",
          address: "Gee House Holborn Hill Birmingham West Midlands B7 5PA UK\nBirmingham"
        },
      },
      accs: []
    },
    {
      id: "169",
      body: {
        number: "120",
        name: "SGS United Kingdom Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "globalmedical@sgs.com",
          website: "www.shetland.gov.uk",
          phoneNumber: "01934 522917",
          address: "Unit 202B\nWorle Parkway\nWeston\nsuper-Mare, Somerset, BS22 6WA"
        },
      },
      accs: []
    },
    {
      id: "170",
      body: {
        number: "571",
        name: "SHETLAND ISLANDS COUNCIL TRADING STANDARDS SERVICE",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "trading.standards@shetland.gov.uk",
          website: "www.csagroupuk.org",
          phoneNumber: "44(0) 1595 744887",
          address: "Charlotte House Commercial Road Country : United Kingdom\nLerwick\nShetland ZE1 0LX"
        },
      },
      accs: []
    },
    {
      id: "171",
      body: {
        number: "518",
        name: "SIRA CERTIFICATION SERVICE",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "UK_NotifiedBody@csagroup.org",
          website: "www.snclavalin.com",
          phoneNumber: "01244 670900",
          address: "Unit 6 Hawarden Industrial Park\nHawarden\n Deeside CH5 3US"
        },
      },
      accs: []
    },
    {
      id: "172",
      body: {
        number: "1133",
        name: "SNC-Lavalin Rail and Transit Verification Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "malcolm.beard@snclavalin.com",
          website: "",
          phoneNumber: "01332 223012",
          address: "SNC-Lavalin House\n2 Roundhouse Road\nPride Parkway\nDerby\nDE24 8JE"
        },
      },
      accs: []
    },
    {
      id: "173",
      body: {
        number: "178",
        name: "SOUTH WEST OF ENGLAND TRADING STANDARDS AUTHORITIES",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "pthomas@swindon.gov.uk",
          website: "WWW.STHELENS.GO.UK",
          phoneNumber: "44(0) 1208 78772",
          address: "Shire House Mount Folly Square\nBODMIN\nCORNWALL"
        },
      },
      accs: []
    },
    {
      id: "174",
      body: {
        number: "553",
        name: "ST. HELENS METROPOLITAN BOROUGH COUNCILTRADING STANDARDS SECTION",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "COLLETTERAI@STHELENS.GOV.UK",
          website: "",
          phoneNumber: "44(0) 1744 456488",
          address: "2nd Floor Wesley House - Corporation Str\nWA10\n1HF St. Helens"
        },
      },
      accs: []
    },
    {
      id: "175",
      body: {
        number: "132",
        name: "STAFFORDSHIRE COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "www.hastiegroup.co.uk",
          phoneNumber: "",
          address: "Martin Street\nST16\n2LG STAFFORD"
        },
      },
      accs: []
    },
    {
      id: "176",
      body: {
        number: "2234",
        name: "Safe Gas Cylinders Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "robert.redmond@hastiegroup.co.uk",
          website: "www.ssani.co.uk",
          phoneNumber: "#ERROR!",
          address: "Morfa Road\nHafod\nSwansea\n West Glamorgan"
        },
      },
      accs: []
    },
    {
      id: "177",
      body: {
        number: "2495",
        name: "Safety Services Agency",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "jr@ssani.co.uk",
          website: "www.sconrail.com",
          phoneNumber: "028 2827 6609",
          address: "Unit 52\nLedcom Industrial Estate Larne Co. Antrim\nNorthern\nIreland"
        },
      },
      accs: []
    },
    {
      id: "178",
      body: {
        number: "2237",
        name: "Sconrail UK Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "ziad.mouneimne@sconrail.com",
          website: "www.bttg.co.uk",
          phoneNumber: "020 8652 1891",
          address: "Chancery House\nSt Nicholas Way\nSutton\n Surrey SM1 1JB"
        },
      },
      accs: []
    },
    {
      id: "179",
      body: {
        number: "338",
        name: "Shirley Technologies Limited, trading as BTTG",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "onestopshop@bttg.co.uk",
          website: "",
          phoneNumber: "0161 876 4211",
          address: "Unit 6\nWheel Forge Way\nTrafford Park\nManchester\nM17 1EH"
        },
      },
      accs: []
    },
    {
      id: "180",
      body: {
        number: "478",
        name: "Smithers Rapra Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@rapra.net",
          website: "www.srltsl.com",
          phoneNumber: "44.193.925.03.83",
          address: "Shawbury - Shrewsbury\nShropshire\nSY4 4NR"
        },
      },
      accs: []
    },
    {
      id: "181",
      body: {
        number: "1088",
        name: "Sound Research Laboratories (a trading name of SRL Technical Services Ltd)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "srl@srltsl.com",
          website: "",
          phoneNumber: "2:172:247595",
          address: "Holbrook House\nLittle Waldingfield\nCO10\n0TH SUFFOLK"
        },
      },
      accs: []
    },
    {
      id: "182",
      body: {
        number: "1763",
        name: "South Staffs Industries Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "liz@southstaffsindustries.com",
          website: "www.southdowntesting.co.uk",
          phoneNumber: "0121 522 2373",
          address: "Bloomfield Road\nTipton\nWest Midlands"
        },
      },
      accs: []
    },
    {
      id: "183",
      body: {
        number: "3423",
        name: "Southdown Materials Testing Limited",
        bodyType: "Recognised third party organisation",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "southdown.smt@btconnect.com",
          website: "www.southdowntesting.co.uk",
          phoneNumber: "01384482880",
          address: "Unit 5\nTansey Green Road Industrial Estate Tansey Green Road Pensnett Brierley Hill DY5 4TL\nBrierley\nHill"
        },
      },
      accs: []
    },
    {
      id: "184",
      body: {
        number: "2653",
        name: "Southdown Materials Testing Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "southdown.smt@btconnect.com",
          website: "www.steelconstruction.or",
          phoneNumber: "0 1384 482880",
          address: "Unit 5 Tansey Green Road Industrial Estate Tansey Green Road\nPensnett\nBrierley\nHill DY5 4TL"
        },
      },
      accs: []
    },
    {
      id: "185",
      body: {
        number: "2273",
        name: "Steel Construction Certification Scheme Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "sccs@steelconstruction.org",
          website: "www.iti.co.uk",
          phoneNumber: "0 20 7747 8134",
          address: "4 Whitehall Court Westminster\nLondon\nSW1A 2ES"
        },
      },
      accs: []
    },
    {
      id: "186",
      body: {
        number: "673",
        name: "TECHNOLOGY INTERNATIONAL (EUROPE) LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "sales@iti.co.uk",
          website: "www.srs.wale",
          phoneNumber: "0 1793 783 137",
          address: "56 Shrivenham Hundred\nBusiness Park Shrivenham\nSwindon\nWiltshire SN6 8TY"
        },
      },
      accs: []
    },
    {
      id: "187",
      body: {
        number: "561",
        name: "THE GLAMORGAN GROUP",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "jonwood@valeofglamorgan.gov.uk",
          website: "www.qsrmc.co.uk",
          phoneNumber: "44(0) 29 2087 2069",
          address: "County Hall\nAtlantic Wharf\nCARDIFF\nCF10 4UW"
        },
      },
      accs: []
    },
    {
      id: "188",
      body: {
        number: "1333",
        name: "THE QUALITY SCHEME FOR READY MIXED CONCRETE (also t/a Construction Products Certification)",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Colin.Head@qsrmc.co.uk",
          website: "",
          phoneNumber: "020 8941 0273",
          address: "1 Mount Mews\nHigh Street\nHampton\nMiddlesex TW12 2SH"
        },
      },
      accs: []
    },
    {
      id: "189",
      body: {
        number: "1580",
        name: "THE VEHICLE CERTIFICATION AGENCY",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiries@vca.gov.uk",
          website: "www.tradatechnology.co.uk",
          phoneNumber: "020 8941 0273",
          address: "1 The Eastgate Office Centre\nBS5\n6XX BRISTOL"
        },
      },
      accs: []
    },
    {
      id: "190",
      body: {
        number: "2389",
        name: "TRADA Technology Limited trading as BM TRADA",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "hmansfield-williams@trada.co.uk",
          website: "www.tuv.com/en/uk/services_uk/vehicles_traffic_uk/railway_technology_uk/railway_technology.htm",
          phoneNumber: "01494 569600",
          address: "Chiltern House\nStocking Lane\nHughenden Valley\nHigh\nWycombe HP14 4ND"
        },
      },
      accs: []
    },
    {
      id: "191",
      body: {
        number: "2571",
        name: "TUV RHEINLAND UK LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "rail@uk.tuv.com",
          website: "www.tuv-sud.co.uk/babt",
          phoneNumber: "44 121 796 9420",
          address: "One Cranmore Drive Solihull\nB90 4RZ\nSolihull"
        },
      },
      accs: []
    },
    {
      id: "192",
      body: {
        number: "168",
        name: "TUV SUD BABT",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "BABT@TUV-SUD.co.uk",
          website: "www.cswip.co",
          phoneNumber: "0 1932 251 200",
          address: "Octagon House Concorde Way\nSegensworth\nNorth Fareham PO15 5RL"
        },
      },
      accs: []
    },
    {
      id: "193",
      body: {
        number: "2400",
        name: "TWI CERTIFICATION LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "twicertification@twi.co.uk",
          website: "www.powys.gov.uk",
          phoneNumber: "0 1223 899000",
          address: "Granta Park Great Abington\nCAMBRIDGE\nCB21 6AL"
        },
      },
      accs: []
    },
    {
      id: "194",
      body: {
        number: "632",
        name: "The Cymru Group c/o Powys Trading Standards",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "jacqui.thomas@powys.gov.uk",
          website: "www.tycofis.co.uk",
          phoneNumber: "44(0) 1686 617524",
          address: "Trading Standards The Park\nNewtown\nSY16 2NZ"
        },
      },
      accs: []
    },
    {
      id: "195",
      body: {
        number: "2245",
        name: "Tyco Fire & Integrated Solutions",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "wparr@tycoint.com",
          website: "http://www.tuv-nord.co.uk",
          phoneNumber: "01224 293500",
          address: "Ocean Trade Centre\nMinto Avenue\nAltns Industrial Estate\nAberdeen"
        },
      },
      accs: []
    },
    {
      id: "196",
      body: {
        number: "879",
        name: "TÜV UK LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "enquiries.uk@tuv-nord.co.uk",
          website: "www.ukcares.co",
          phoneNumber: "020 8680 7711",
          address: "AMP House Suites 27-29 Fifth Floor Dingwall Road\nCroydon\nCR0 2LX"
        },
      },
      accs: []
    },
    {
      id: "197",
      body: {
        number: "3523",
        name: "UK CARES",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "general@ukcares.com",
          website: "www.ukcares.co",
          phoneNumber: "01732 450000",
          address: "Pembroke House\n21 Pembroke Road\nSevenoaks\n Kent TN13 1XR"
        },
      },
      accs: []
    },
    {
      id: "198",
      body: {
        number: "1244",
        name: "UK Certification Authority for Reinforcing Steels",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "general@ukcares.com",
          website: "http://www.ul-europe.com",
          phoneNumber: "2:117:450000",
          address: "Pembroke House\n21 Pembroke Road\nSevenoaks\n Kent TN13 1XR"
        },
      },
      accs: []
    },
    {
      id: "199",
      body: {
        number: "843",
        name: "UL INTERNATIONAL (UK) LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Inform.NB@uk.ul.com",
          website: "",
          phoneNumber: "44 1483 302130",
          address: "Wonersh House Building C The Guildway Old Portsmouth Road\nGuildford\nGU3 1LR"
        },
      },
      accs: []
    },
    {
      id: "200",
      body: {
        number: "3424",
        name: "UL INTERNATIONAL (UK) LTD",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Inform.NB@uk.ul.com",
          website: "www.ul-europe.co",
          phoneNumber: "0 1483 302130",
          address: "Wonersh House Building C The guildway Old Portsmouth Road\nGuildford\nGU3 1LR"
        },
      },
      accs: []
    },
    {
      id: "201",
      body: {
        number: "1864",
        name: "UL International (UK) Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info.uk@uk.ul.com",
          website: "www.ul.com",
          phoneNumber: "0 148 330 2130",
          address: "Wonersh House\nThe Guildway\nOld Portsmouth Road\nGuildford\n Surrey. GU3 1LR"
        },
      },
      accs: []
    },
    {
      id: "202",
      body: {
        number: "889",
        name: "UL VS Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "certification@ul.com",
          website: "STRQuality.com",
          phoneNumber: "0 1256 312000",
          address: "Offices 18-26\nGrove House\nLutyens Close\nChineham Court\nBASINGSTOKE\nRG24 8AG"
        },
      },
      accs: [{
          name: "Personal protective equipment",
          rows: [{
            products: [
              "Equipmentpment providing eye protection",
              "Equipment providing face protection",
              "Equipment providing general body protection (clothing)",
              "Equipment providing hand and arm protection",
              "Equipment providing head protection",
              "Equipment providing hearing protection",
              "Equipment providing respiratory protection",
              "Protective equipment against drowning and buoyancy aids",
              "Protective equipment against falls from a height"
            ],
            annexes: [
            "Annex V",
            "Annex VIII",
            "Annex X",
            "Annex XI",
            "Annex XII",
            "Annex IVB"
            ],
            limitations: [],
            procedures: ["System for ensuring EC quality of production by means of monitoring"]
          }]
        },
        {
          name: "Medical devices",
          rows: [{
            products: [
              "General non-active, non-implantable medical devices",
              "Non-active devices for anaesthesia, emergency and intensive care",
              "Non-active devices for injection, infusion, transfusion and dialysis",
              "Non-active orthopaedic and rehabilitation devices",
              "Non-active medical devices with measuring function",
              "Non-active ophthalmologic devices",
              "Non-active instruments",
              "Contraceptive medical devices",
              "Non-active medical devices for disinfecting, cleaning, rinsing",
              "Non-active devices for in vitro fertilisation (IVF) and assisted reproductive technologies (ART)",
              "Non-active medical devices for ingestion",
              "Non-active cardiovascular implants",
              "Non-active orthopaedic implants",
              "Non-active functional implants",
              "Non-active soft tissue implants (excluding breast implants)",
              "Bandages and wound dressings",
              "Suture material and clamps",
              "Other medical devices for wound care",
              "Non-active dental equipment and instruments",
              "Dental materials",
              "Dental implants",
              "Devices for extra-corporal circulation, infusion and haemopheresis",
              "Respiratory devices, devices including hyperbaric chambers for oxygen therapy, inhalation anaesthesia",
              "Devices for stimulation or inhibition",
              "Active surgical devices",
              "Active ophthalmologic devices",
              "Active dental devices",
              "Active devices for disinfection and sterilisation",
              "Active rehabilitation devices and active prostheses",
              "Active devices for patient positioning and transport",
              "Active devices for in vitro fertilisation (IVF) and assisted reproductive therapy (ART)",
              "Software",
              "Medical gas supply systems and parts thereof",
              "Imaging devices utilising ionizing radiation",
              "Imaging devices utilising non-ionizing radiation",
              "Monitoring devices of non-vital physiological parameters",
              "Monitoring devices of vital physiological parameters",
              "Devices utilising ionizing radiation",
              "Devices utilising non-ionizing radiation",
              "Devices for hyperthermia / hypothermia",
              "Devices for (extracorporal) shock-wave therapy (lithotripsy)",
            ],
            annexes: [
            "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
            ],
            limitations: [],
            procedures: ["Declaration of conformity (full quality assurance system) and Declaration of conformity (production quality assurance)"]
          }]
        }
      ]
    },
    {
      id: "203",
      body: {
        number: "2334",
        name: "UL VS United Kingdom Limited trading as UL-STR",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Keith.Richards@ul.com",
          website: "",
          phoneNumber: "0118 939 8700",
          address: "10 Portman Road\nUK\nRG30 1EA Reading, Berkshire"
        },
      },
      accs: []
    },
    {
      id: "204",
      body: {
        number: "646",
        name: "UNITED REGISTRAR OF SYSTEMS (INSPECTORATE) Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "http://www.uswcommercial.co.uk",
          phoneNumber: "44/1934.74.44.56",
          address: "Mediaevel House - The Square - Axbridge\nBS26\n2AR SOMERSET"
        },
      },
      accs: []
    },
    {
      id: "205",
      body: {
        number: "1679",
        name: "USW Commercial Services Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "John.kinuthia@southwales.ac.uk",
          website: "www.urs-certifcation.co.uk",
          phoneNumber: "0 1443 482 148",
          address: "University of South Wales 3 Llantwit Road Trefforest\nCF37\n1DL PONTYPRIDD"
        },
      },
      accs: []
    },
    {
      id: "206",
      body: {
        number: "2710",
        name: "United Registrar of Systems Products Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "info@urs-certifcation.co.uk",
          website: "www.thermal-testing.salford.ac.uk",
          phoneNumber: "44(0) 1202 552 153",
          address: "Derby Manor\nDerby Road\nBH1 3QB\nBournemouth"
        },
      },
      accs: []
    },
    {
      id: "207",
      body: {
        number: "1145",
        name: "University of Salford",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "A.Simpson@salford.ac.uk",
          website: "www.technology-centre.co.uk",
          phoneNumber: "44(0) 161 295 5172/3114",
          address: "Thermal Measurement Laboratory\nSchool of CSE\nNewton Building\nSalford\nM5 4WT"
        },
      },
      accs: []
    },
    {
      id: "208",
      body: {
        number: "1766",
        name: "VINCI Technology Centre UK Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "steve.shanahan@technology-centre.co.uk",
          website: "www.valero.com",
          phoneNumber: "0 1525 859050 / +0 7816 514549",
          address: "Stanbridge Road\nLeighton\nBuzzard Bedfordshire LU7 4QH"
        },
      },
      accs: []
    },
    {
      id: "209",
      body: {
        number: "2650",
        name: "Valero Energy Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "clive.brown@valero.com",
          website: "www.valero.com",
          phoneNumber: "0 1646 649737",
          address: "Pembroke Refinery\nPembroke"
        },
      },
      accs: []
    },
    {
      id: "210",
      body: {
        number: "2131",
        name: "Valero Energy Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "clive.brown@valero.com",
          website: "www.wandsworth.gov.uk",
          phoneNumber: "44(0) 1646 649737",
          address: "Pembroke Refinery Pembroke SA71 5SJ\nPembroke"
        },
      },
      accs: []
    },
    {
      id: "211",
      body: {
        number: "444",
        name: "WANDSWORTH COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "pbrowne@wandsworth.gov.uk",
          website: "",
          phoneNumber: "0 20 8871 7735",
          address: "Trading Standards Administration Department The Town Hall Wandsworth High Street\nLondon\nSW18 2PU"
        },
      },
      accs: [{
          name: "Personal protective equipment",
          rows: [{
            products: [
              "Equipmentpment providing eye protection",
              "Equipment providing face protection",
              "Equipment providing general body protection (clothing)",
              "Equipment providing hand and arm protection",
              "Equipment providing head protection",
              "Equipment providing hearing protection",
              "Equipment providing respiratory protection",
              "Protective equipment against drowning and buoyancy aids",
              "Protective equipment against falls from a height"
            ],
            annexes: [
            "Annex V",
            "Annex VIII",
            "Annex X",
            "Annex XI",
            "Annex XII",
            "Annex IVB"
            ],
            limitations: [],
            procedures: ["System for ensuring EC quality of production by means of monitoring"]
          }]
        },
        {
          name: "Medical devices",
          rows: [{
            products: [
              "General non-active, non-implantable medical devices",
              "Non-active devices for anaesthesia, emergency and intensive care",
              "Non-active devices for injection, infusion, transfusion and dialysis",
              "Non-active orthopaedic and rehabilitation devices",
              "Non-active medical devices with measuring function",
              "Non-active ophthalmologic devices",
              "Non-active instruments",
              "Contraceptive medical devices",
              "Non-active medical devices for disinfecting, cleaning, rinsing",
              "Non-active devices for in vitro fertilisation (IVF) and assisted reproductive technologies (ART)",
              "Non-active medical devices for ingestion",
              "Non-active cardiovascular implants",
              "Non-active orthopaedic implants",
              "Non-active functional implants",
              "Non-active soft tissue implants (excluding breast implants)",
              "Bandages and wound dressings",
              "Suture material and clamps",
              "Other medical devices for wound care",
              "Non-active dental equipment and instruments",
              "Dental materials",
              "Dental implants",
              "Devices for extra-corporal circulation, infusion and haemopheresis",
              "Respiratory devices, devices including hyperbaric chambers for oxygen therapy, inhalation anaesthesia",
              "Devices for stimulation or inhibition",
              "Active surgical devices",
              "Active ophthalmologic devices",
              "Active dental devices",
              "Active devices for disinfection and sterilisation",
              "Active rehabilitation devices and active prostheses",
              "Active devices for patient positioning and transport",
              "Active devices for in vitro fertilisation (IVF) and assisted reproductive therapy (ART)",
              "Software",
              "Medical gas supply systems and parts thereof",
              "Imaging devices utilising ionizing radiation",
              "Imaging devices utilising non-ionizing radiation",
              "Monitoring devices of non-vital physiological parameters",
              "Monitoring devices of vital physiological parameters",
              "Devices utilising ionizing radiation",
              "Devices utilising non-ionizing radiation",
              "Devices for hyperthermia / hypothermia",
              "Devices for (extracorporal) shock-wave therapy (lithotripsy)",
            ],
            annexes: [
            "Annex V",
        "Annex VIII",
        "Annex X",
        "Annex XI",
        "Annex XII",
        "Annex IVB"
            ],
            limitations: [],
            procedures: ["Declaration of conformity (full quality assurance system) and Declaration of conformity (production quality assurance)"]
          }]
        }
      ]
    },
    {
      id: "212",
      body: {
        number: "145",
        name: "WARWICKSHIRE COUNTY COUNCIL",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "",
          website: "www.wintechtesting.com",
          phoneNumber: "0 20 8871 7735",
          address: "Old Budbrooke Road\nCV35\n7DP WARWICK"
        },
      },
      accs: []
    },
    {
      id: "213",
      body: {
        number: "1288",
        name: "WINTECH ENGINEERING LIMITED",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "testing@wintechtesting.com",
          website: "www.wq-ic.co.uk",
          phoneNumber: "44:1952:586 580",
          address: "Halesfield 2\nTELFORD\n SHROPSHIRE TF7 4QH"
        },
      },
      accs: []
    },
    {
      id: "214",
      body: {
        number: "2423",
        name: "WQ Inspection & Certification Ltd",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "admin@wq-ic.co.uk",
          website: "www.warringtonfire.net",
          phoneNumber: "0121 5052066",
          address: "Jack Brookes Yard\nLongmore Street\nWednesbury\nWest Midlands\nWS10 9DQ\nWednesbury\n West Midlands"
        },
      },
      accs: []
    },
    {
      id: "215",
      body: {
        number: "2342",
        name: "Warrington Certification Limited",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "Geoff.Deakin@exova.com",
          website: "www.exovabmtrada.com",
          phoneNumber: "0 1925 655116",
          address: "Holmesfield Road\nWA1\n2DS WARRINGTON"
        },
      },
      accs: []
    },
    {
      id: "216",
      body: {
        number: "1224",
        name: "Warringtonfire Testing and Certification Limited, trading as BM TRADA",
        bodyType: "Approved body",
        lastUpdated: "1 April 2019",
        authorisedBy: ["BEIS", "MHCLG"],
        contact: {
          email: "certification@exova.com",
          website: "www.warringtonfire.net",
          phoneNumber: "0 1494 569 700",
          address: "Chiltern House\nStocking Lane\nHughenden Valley\nHigh\nWycombe, Buckinghamshire HP14 4ND"
        }
      },
      accs: []
    }
  ]
}