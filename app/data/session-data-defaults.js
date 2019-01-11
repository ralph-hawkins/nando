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
    }
  ]
}