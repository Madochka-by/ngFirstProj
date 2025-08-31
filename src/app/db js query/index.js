const URL = "https://angularcommercewebsite-petproj-default-rtdb.firebaseio.com/.json";
const addButton = document.getElementById("fetch");

addButton.addEventListener("click", () => {
  fetch(URL, {
    method: "PUT",
    body: JSON.stringify({
      CATALOG: {
        dining: [
          {
            sofas: [
              {
                id: 0,
                SKU: "SS001",
                name: "Asgard Sofa",
                price: 250,
                rating: 4.5,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["L", "XL", "XS"],
                reviews: [],
                color: ["#816DFA", "#000000", "#B88E2F"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 1,
                SKU: "SS002",
                name: "Valhalla Sofa",
                price: 320,
                rating: 4.8,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L", "XL"],
                reviews: [],
                color: ["#FFFFFF", "#C0C0C0", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale30.png",
              },
              {
                id: 2,
                SKU: "SS003",
                name: "Odin Sofa",
                price: 280,
                rating: 4.3,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["S", "M", "L"],
                reviews: [],
                color: ["#8B0000", "#B88E2F", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale50.png",
              },
            ],
            chairs: [
              {
                id: 0,
                SKU: "SS004",
                name: "Nordic Chair",
                price: 120,
                rating: 4.6,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#000000", "#D3D3D3"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 1,
                SKU: "SS005",
                name: "Loki Chair",
                price: 140,
                rating: 4.4,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["S", "M"],
                reviews: [],
                color: ["#FFD700", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 2,
                SKU: "SS006",
                name: "Freya Chair",
                price: 160,
                rating: 4.7,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#FF69B4", "#B88E2F", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale30.png",
              },
            ],
            tables: [
              {
                id: 0,
                SKU: "SS007",
                name: "Midgard Table",
                price: 450,
                rating: 4.9,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L", "XL"],
                reviews: [],
                color: ["#8B4513", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale50.png",
              },
              {
                id: 1,
                SKU: "SS008",
                name: "Thor Table",
                price: 520,
                rating: 4.8,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["XL"],
                reviews: [],
                color: ["#000000", "#B88E2F"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 2,
                SKU: "SS009",
                name: "Frigg Table",
                price: 380,
                rating: 4.5,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["S", "M"],
                reviews: [],
                color: ["#FFFFFF", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
            ],
          },
        ],
        living: [
          {
            sofas: [
              {
                id: 0,
                SKU: "LS001",
                name: "Zenith Sofa",
                price: 600,
                rating: 4.9,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["L", "XL"],
                reviews: [],
                color: ["#000000", "#808080"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale30.png",
              },
              {
                id: 1,
                SKU: "LS002",
                name: "Aurora Sofa",
                price: 550,
                rating: 4.7,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#B88E2F", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 2,
                SKU: "LS003",
                name: "Eclipse Sofa",
                price: 700,
                rating: 5,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["XL"],
                reviews: [],
                color: ["#000000", "#8B0000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
            ],
            chairs: [
              {
                id: 0,
                SKU: "LC001",
                name: "Atlas Chair",
                price: 180,
                rating: 4.5,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["S", "M"],
                reviews: [],
                color: ["#000000", "#FFFFFF"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 1,
                SKU: "LC002",
                name: "Helios Chair",
                price: 220,
                rating: 4.6,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#FFD700", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 2,
                SKU: "LC003",
                name: "Eos Chair",
                price: 200,
                rating: 4.4,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M"],
                reviews: [],
                color: ["#000000", "#C0C0C0"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale30.png",
              },
            ],
            tables: [
              {
                id: 0,
                SKU: "LT001",
                name: "Orion Table",
                price: 620,
                rating: 4.8,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#8B4513", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale50.png",
              },
              {
                id: 1,
                SKU: "LT002",
                name: "Horizon Table",
                price: 750,
                rating: 5,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["XL"],
                reviews: [],
                color: ["#000000", "#B88E2F"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale30.png",
              },
              {
                id: 2,
                SKU: "LT003",
                name: "Nova Table",
                price: 500,
                rating: 4.7,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["S", "M"],
                reviews: [],
                color: ["#FFFFFF", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale30.png",
              },
            ],
          },
        ],
        bedroom: [
          {
            sofas: [
              {
                id: 0,
                SKU: "BS001",
                name: "Dream Sofa",
                price: 400,
                rating: 4.5,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["S", "M"],
                reviews: [],
                color: ["#000000", "#B88E2F"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 1,
                SKU: "BS002",
                name: "Serenity Sofa",
                price: 450,
                rating: 4.7,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#808080", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 2,
                SKU: "BS003",
                name: "Luna Sofa",
                price: 500,
                rating: 4.8,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#FFFFFF", "#B88E2F"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
            ],
            chairs: [
              {
                id: 0,
                SKU: "BC001",
                name: "Selene Chair",
                price: 180,
                rating: 4.5,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["S", "M"],
                reviews: [],
                color: ["#000000", "#FFFFFF"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
              {
                id: 1,
                SKU: "BC002",
                name: "Aurora Chair",
                price: 200,
                rating: 4.6,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M"],
                reviews: [],
                color: ["#FFD700", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale30.png",
              },
              {
                id: 2,
                SKU: "BC003",
                name: "Luna Chair",
                price: 220,
                rating: 4.7,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#000000", "#808080"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
            ],
            tables: [
              {
                id: 0,
                SKU: "BT001",
                name: "Sol Table",
                price: 350,
                rating: 4.5,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["S", "M"],
                reviews: [],
                color: ["#8B4513", "#000000"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale30.png",
              },
              {
                id: 1,
                SKU: "BT002",
                name: "Luna Table",
                price: 400,
                rating: 4.6,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M"],
                reviews: [],
                color: ["#FFFFFF", "#B88E2F"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "/assets/img/sale50.png",
              },
              {
                id: 2,
                SKU: "BT003",
                name: "Aurora Table",
                price: 450,
                rating: 4.7,
                content:
                  "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                description1:
                  "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
                description2:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                additionalInformation:
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
                size: ["M", "L"],
                reviews: [],
                color: ["#000000", "#808080"],
                img: ["/assets/img/Asgard sofa 1.png", "/assets/img/Asgard sofa 2.png", "/assets/img/Asgard sofa 3.png", "/assets/img/Asgard sofa 4.png", "/assets/img/Asgard sofa 5.png"],
                sale: "",
              },
            ],
          },
        ],
      },
    }),
  });
});
