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
          procedures: [""]
        }
      ]
    },
    {
      name: "",
      rows: [ 
        {
          products: [],
          procedures: []
        }
      ]
    }
  ]
}

*/

module.exports = {
  id: "0",
  docs: [
    {
      id: "0",
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
      accs: [
        {
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
        },
        {
          name: "Medical devices",
          rows: [ {
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
            procedures: ["Declaration of conformity (full quality assurance system) and Declaration of conformity (production quality assurance)"]
          }]
        }
      ]
    },
    {
      id: "1",
      body: {
        number: "0038",
        name: "Lloyd's Register Verification Limited",
        lastUpdated: "3 June 2018",
        authorisedBy: ["BESI", "MHRA"],
        contact: {
          email: "ecdirectives@lr.org",
          phoneNumber: "+44 330 414 1337",
          address: "71 Fenchurch Street\nLondon\nEC3M 4BS\n"
        }
      },
      accs: [
        {
          name: "Noise emission in the environment by equipment for use outdoors",
          rows: [ {
            products: [
              "Construction winch",
              "Hydraulic power pack",
              "Landfill compactor, loader-type with bucket < 500 kW",
              "Lift truck, combustion-engine driven, counterbalanced",
              "Mobile crane",
              "Motor hoe",
              "Power generators (<400 kW)",
              "Tower crane",
              "Welding generator",
              "dozers < 500 kW",
              "dumpers < 500 kW",
              "excavator-loaders < 500 kW",
              "excavators, hydraulic or rope-operated < 500 kW",
              "graders < 500 kW",
              "loaders < 500 kW",
              "paver-finishers (excluding paver-finisher equiped with a high-compaction screed)",
              "Equipment subject to noise marking only",
              "builders' hoists for the transport of goods (with electric motor)",
              "compaction machines (only vibrating and non-vibrating rollers, vibratory plates and vibratory rammers)",
              "concrete-breakers and picks, hand-held",
              "lawnmowers (excluding agricultural and forestry equipment, and multi-purpose devices, the main motorised component of which has an installed power of more than 20 kW)",
              "lawn trimmers/lawn edge trimmers",
              "compressors",
              ],
            procedures: ["Full quality assurance"]
          }]
        },
        {
          name: "Interoperability of the rail system within the Community",
          rows: [ {
            products: ["1. Interoperability of the trans-European high-speed rail system - 1.1 Infrastructure"],
            procedures: ["EC declaration of conformity and suitability for use of interoperability constituents", "EC verification procedure for subsystems	"]
          },
          {
            products: ["1. Interoperability of the trans-European high-speed rail system - 1.2 Energy"],
            procedures: ["EC declaration of conformity and suitability for use of interoperability constituents", "EC verification procedure for subsystems	"]
          },
        ]
        }
      ]
    },
    {
      id: "2",
      body: {
        name:'ABS Europe Limited', 
        number: '0858',
        contact: {}
      },
      accs: []
    },
    {
      id: "3",
      body: {
        name:'AEGIS Certification Services Limited', 
        number: '0870',
        contact: {}
      },
      accs: []
    },
    {
      id: "4",
      body: {
        name:'Altran UK Limited', 
        number: '0879',
        contact: {}
      },
      accs: []
    },
    {
      id: "5",
      body: {
        name:'AMTRI Ceritas Limited', 
        number: '0888',
        contact: {}
      },
      accs: []
    },
    {
      id: "6",
      body: {
        name:'Arrowhead Industrial Services Limited', 
        number: '0889',
        contact: {}
      },
      accs: []
    },
    {
      id: "7",
      body: {
        name:'Atlas Mastergas Limited', 
        number: '0890',
        contact: {}
      },
      accs: []
    },
    {
      id: "8",
      body: {
        name:'AV Technology Limited', 
        number: '0891',
        contact: {}
      },
      accs: []
    },
    {
      id: "9",
      body: {
        name:'Blue Anchor Fire & Safety', 
        number: '0922',
        contact: {}
      },
      accs: []
    },
    {
      id: "10",
      body: {
        name:'BOC Limited', 
        number: '0964',
        contact: {}
      },
      accs: []
    },
    {
      id: "11",
      body: {
        name:'BRE Global Limited', 
        number: '1067',
        contact: {}
      },
      accs: []
    },
    {
      id: "12",
      body: {
        name:'BRE Global Limited Incorporating Bre Testing', 
        number: '1088',
        contact: {}
      },
      accs: []
    },
    {
      id: "13",
      body: {
        name:'British Approvals Service for Cables (BASEC)', 
        number: '1104',
        contact: {}
      },
      accs: []
    },
    {
      id: "14",
      body: {
        name:'British Board Of Agrément', 
        number: '1105',
        contact: {}
      },
      accs: []
    },
    {
      id: "15",
      body: {
        name:'British Board Of Agrement (bba)', 
        number: '1121',
        contact: {}
      },
      accs: []
    },
    {
      id: "16",
      body: {
        name:'British Engineering Services Limited', 
        number: '1125',
        contact: {}
      },
      accs: []
    },
    {
      id: "17",
      body: {
        name:'British Inspecting Engineers Limited', 
        number: '1133',
        contact: {}
      },
      accs: []
    },
    {
      id: "18",
      body: {
        name:'British Institute Of Non-destructive Testing', 
        number: '1145',
        contact: {}
      },
      accs: []
    },
    {
      id: "19",
      body: {
        name:'BSI', 
        number: '1146',
        contact: {}
      },
      accs: []
    },
    {
      id: "20",
      body: {
        name:'BSRIA Limited', 
        number: '1157',
        contact: {}
      },
      accs: []
    },
    {
      id: "21",
      body: {
        name:'Build Check Limited', 
        number: '1180',
        contact: {}
      },
      accs: []
    },
    {
      id: "22",
      body: {
        name:'Building Investigation and Testing Services (Surrey) Limited', 
        number: '1224',
        contact: {}
      },
      accs: []
    },
    {
      id: "23",
      body: {
        name:'Bureau Veritas Consumer Products Services UK Limited', 
        number: '1244',
        contact: {}
      },
      accs: []
    },
    {
      id: "24",
      body: {
        name:'Bureau Veritas UK Limited', 
        number: '1245',
        contact: {}
      },
      accs: []
    },
    {
      id: "25",
      body: {
        name:'Bury Metropolitan Borough Council', 
        number: '1266',
        contact: {}
      },
      accs: []
    },
    {
      id: "26",
      body: {
        name:'Calibso Limited (trading as Bluesky Certification)', 
        number: '1288',
        contact: {}
      },
      accs: []
    },
    {
      id: "27",
      body: {
        name:'Calor Gas Limited', 
        number: '1289',
        contact: {}
      },
      accs: []
    },
    {
      id: "28",
      body: {
        name:'Calor Gas Northern Ireland Limited', 
        number: '1291',
        contact: {}
      },
      accs: []
    },
    {
      id: "29",
      body: {
        name:'Cambridge Fire Research Limited', 
        number: '1314',
        contact: {}
      },
      accs: []
    },
    {
      id: "30",
      body: {
        name:'CCQS UK Limited', 
        number: '1333',
        contact: {}
      },
      accs: []
    },
    {
      id: "31",
      body: {
        name:'CEM International Limited', 
        number: '1334',
        contact: {}
      },
      accs: []
    },
    {
      id: "32",
      body: {
        name:'Central Cylinder Testing', 
        number: '1520',
        contact: {}
      },
      accs: []
    },
    {
      id: "33",
      body: {
        name:'Centre for Assessment Limited', 
        number: '1521',
        contact: {}
      },
      accs: []
    },
    {
      id: "34",
      body: {
        name:'Certification and Timber grading Limited', 
        number: '1580',
        contact: {}
      },
      accs: []
    },
    {
      id: "35",
      body: {
        name:'Certification Management Limited', 
        number: '1674',
        contact: {}
      },
      accs: []
    },
    {
      id: "36",
      body: {
        name:'Certified Conformity Limited', 
        number: '1675',
        contact: {}
      },
      accs: []
    },
    {
      id: "37",
      body: {
        name:'Cheshire West and Chester County Council', 
        number: '1679',
        contact: {}
      },
      accs: []
    },
    {
      id: "38",
      body: {
        name:'Code-a-weld Inspection Limited', 
        number: '1719',
        contact: {}
      },
      accs: []
    },
    {
      id: "39",
      body: {
        name:'Cranage EMC Testing Limited', 
        number: '1720',
        contact: {}
      },
      accs: []
    },
    {
      id: "40",
      body: {
        name:'Cumbria County CouncilLimited', 
        number: '1725',
        contact: {}
      },
      accs: []
    },
    {
      id: "41",
      body: {
        name:'Cylinder Testing and Sales (UK) Limited', 
        number: '1763',
        contact: {}
      },
      accs: []
    },
    {
      id: "42",
      body: {
        name:'Defence Electronics & Components Agency', 
        number: '1766',
        contact: {}
      },
      accs: []
    },
    {
      id: "43",
      body: {
        name:'Department for the Economy', 
        number: '1806',
        contact: {}
      },
      accs: []
    },
    {
      id: "44",
      body: {
        name:'Department of Health & Consumer Services', 
        number: '1845',
        contact: {}
      },
      accs: []
    },
    {
      id: "45",
      body: {
        name:'Derbyshire County Council', 
        number: '1846',
        contact: {}
      },
      accs: []
    },
    {
      id: "46",
      body: {
        name:'DNV GL UK Limited', 
        number: '1855',
        contact: {}
      },
      accs: []
    },
    {
      id: "47",
      body: {
        name:'Dominion Technology Gases Limited', 
        number: '1942',
        contact: {}
      },
      accs: []
    },
    {
      id: "48",
      body: {
        name:'Dow Corning Limited', 
        number: '1978',
        contact: {}
      },
      accs: []
    },
    {
      id: "49",
      body: {
        name:'DTG Testing Limited', 
        number: '1992',
        contact: {}
      },
      accs: []
    },
    {
      id: "50",
      body: {
        name:'EETSA Limited (East of England Trading Standards Association)', 
        number: '2019',
        contact: {}
      },
      accs: []
    },
    {
      id: "51",
      body: {
        name:'Element Materials Technology Warwick Limited', 
        number: '2056',
        contact: {}
      },
      accs: []
    },
    {
      id: "52",
      body: {
        name:'Energas Limited', 
        number: '2141',
        contact: {}
      },
      accs: []
    },
    {
      id: "53",
      body: {
        name:'Eurofins Product Testing Services Limited', 
        number: '2192',
        contact: {}
      },
      accs: []
    },
    {
      id: "54",
      body: {
        name:'European Quality Assurance', 
        number: '2205',
        contact: {}
      },
      accs: []
    },
    {
      id: "55",
      body: {
        name:'Ex Veritas Limited', 
        number: '2206',
        contact: {}
      },
      accs: []
    },
    {
      id: "56",
      body: {
        name:'Exova (UK) Limited', 
        number: '2207',
        contact: {}
      },
      accs: []
    },
    {
      id: "57",
      body: {
        name:'Exova (UK) Limited Trading As Bm Trada', 
        number: '2222',
        contact: {}
      },
      accs: []
    },
    {
      id: "58",
      body: {
        name:'Exova (UK) Limited trading as BM TRADA', 
        number: '2229',
        contact: {}
      },
      accs: []
    },
    {
      id: "59",
      body: {
        name:'Exova (UK) Limited trading as Exova Warringtonfire', 
        number: '2230',
        contact: {}
      },
      accs: []
    },
    {
      id: "60",
      body: {
        name:'Exova (UK) Limited trading as Warrington Certification', 
        number: '2234',
        contact: {}
      },
      accs: []
    },
    {
      id: "61",
      body: {
        name:'Exova Warringtonfire', 
        number: '2258',
        contact: {}
      },
      accs: []
    },
    {
      id: "62",
      body: {
        name:'Flameskill Limited', 
        number: '2263',
        contact: {}
      },
      accs: []
    },
    {
      id: "63",
      body: {
        name:'Fleetwood Test House, Blackpool and the Fylde College', 
        number: '2273',
        contact: {}
      },
      accs: []
    },
    {
      id: "64",
      body: {
        name:'Flogas Britain Limited', 
        number: '2314',
        contact: {}
      },
      accs: []
    },
    {
      id: "65",
      body: {
        name:'FM Approvals Limited', 
        number: '2334',
        contact: {}
      },
      accs: []
    },
    {
      id: "66",
      body: {
        name:'Gammax Independent Inspection Services Limited', 
        number: '2337',
        contact: {}
      },
      accs: []
    },
    {
      id: "67",
      body: {
        name:'Gas Cylinders UK Limited', 
        number: '2377',
        contact: {}
      },
      accs: []
    },
    {
      id: "68",
      body: {
        name:'gateshead Metropolitan Borough Council', 
        number: '2381',
        contact: {}
      },
      accs: []
    },
    {
      id: "69",
      body: {
        name:'GL Industrial Services UK Limited', 
        number: '2389',
        contact: {}
      },
      accs: []
    },
    {
      id: "70",
      body: {
        name:'Global Group of Companies Limited', 
        number: '2400',
        contact: {}
      },
      accs: []
    },
    {
      id: "71",
      body: {
        name:'Halcrow Rail Approvals Limited', 
        number: '2441',
        contact: {}
      },
      accs: []
    },
    {
      id: "72",
      body: {
        name:'Hampshire Trading Standards Service (HCC)', 
        number: '2444',
        contact: {}
      },
      accs: []
    },
    {
      id: "73",
      body: {
        name:'Hartford Steam Boiler UK Limited', 
        number: '2446',
        contact: {}
      },
      accs: []
    },
    {
      id: "74",
      body: {
        name:'Health And Safety Executive', 
        number: '2448',
        contact: {}
      },
      accs: []
    },
    {
      id: "75",
      body: {
        name:'Horiba MIRA Limited', 
        number: '2491',
        contact: {}
      },
      accs: []
    },
    {
      id: "76",
      body: {
        name:'HPi Verification Services Limited', 
        number: '2495',
        contact: {}
      },
      accs: []
    },
    {
      id: "77",
      body: {
        name:'Hursley EMC Services Limited', 
        number: '2503',
        contact: {}
      },
      accs: []
    },
    {
      id: "78",
      body: {
        name:'IFC Certification Limited', 
        number: '2524',
        contact: {}
      },
      accs: []
    },
    {
      id: "79",
      body: {
        name:'IFC Certification Limited', 
        number: '2538',
        contact: {}
      },
      accs: []
    },
    {
      id: "80",
      body: {
        name:'Impact Laboratories Limited trading as Impact Solutions', 
        number: '2551',
        contact: {}
      },
      accs: []
    },
    {
      id: "81",
      body: {
        name:'Incon - A Department Of Inspection Consultants', 
        number: '2560',
        contact: {}
      },
      accs: []
    },
    {
      id: "82",
      body: {
        name:'Inspec International Limited', 
        number: '2561',
        contact: {}
      },
      accs: []
    },
    {
      id: "83",
      body: {
        name:'Inspection & Certification Limited', 
        number: '2571',
        contact: {}
      },
      accs: []
    },
    {
      id: "84",
      body: {
        name:'Interscience Communications Limited', 
        number: '2583',
        contact: {}
      },
      accs: []
    },
    {
      id: "85",
      body: {
        name:'Intertek Testing & Certification Limited', 
        number: '2585',
        contact: {}
      },
      accs: []
    },
    {
      id: "86",
      body: {
        name:'ISOQAR Limited', 
        number: '2599',
        contact: {}
      },
      accs: []
    },
    {
      id: "87",
      body: {
        name:'ITS Testing Services (UK) Limited', 
        number: '2635',
        contact: {}
      },
      accs: []
    },
    {
      id: "88",
      body: {
        name:'J and R Gases Limited', 
        number: '2636',
        contact: {}
      },
      accs: []
    },
    {
      id: "89",
      body: {
        name:'Kent County Council', 
        number: '2642',
        contact: {}
      },
      accs: []
    },
    {
      id: "90",
      body: {
        name:'Kiwa Limited T/a Kiwa Gastec', 
        number: '2661',
        contact: {}
      },
      accs: []
    },
    {
      id: "91",
      body: {
        name:'Laidler Certification', 
        number: '2673',
        contact: {}
      },
      accs: []
    },
    {
      id: "92",
      body: {
        name:'Lancashire County Council', 
        number: '2700',
        contact: {}
      },
      accs: []
    },
    {
      id: "93",
      body: {
        name:'Leicestershire County Council', 
        number: '2710',
        contact: {}
      },
      accs: []
    },
    {
      id: "94",
      body: {
        name:'LIFT CERT Limited', 
        number: '2721',
        contact: {}
      },
      accs: []
    },
    {
      id: "95",
      body: {
        name:'Lloyd’s Register Apave Limited', 
        number: '2731',
        contact: {}
      },
      accs: []
    },
    {
      id: "96",
      body: {
        name:'Lloyd’s Register Quality Assurance Limited (0088)', 
        number: '2740',
        contact: {}
      },
      accs: []
    },
    {
      id: "97",
      body: {
        name:'Lloyd’s Register Verification Limited', 
        number: '2747',
        contact: {}
      },
      accs: []
    },
    {
      id: "98",
      body: {
        name:'London Borough Of Havering: North East London Metrology Partnership', 
        number: '2773',
        contact: {}
      },
      accs: []
    },
    {
      id: "99",
      body: {
        name:'Lucideon CICS Limited', 
        number: '2783',
        contact: {}
      },
      accs: []
    },

  ]
}