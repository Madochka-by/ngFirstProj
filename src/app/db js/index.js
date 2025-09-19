// const { filter } = require("rxjs");

const URL =
  "https://angularcommercewebsite-petproj-default-rtdb.firebaseio.com/.json";
const addButton = document.getElementById("fetch");
// const addButtonFILTER = document.getElementById("fetchFilter");

addButton.addEventListener("click", () => {
  fetch(URL, {
    method: "PUT",
    body: JSON.stringify({
      CATALOG: {
        dining: {
          sofas: [
            {
              id: 0,
              SKU: "SS001",
              name: "Asgard Sofa",
              price: 250000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview2.png",
              previewDescription: "Comfortable deep seating",
              sale: "",
            },
            {
              id: 1,
              SKU: "SS002",
              name: "Valhalla Sofa",
              price: 320000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview3.png",
              previewDescription: "Elegant family sofa",
              sale: "30",
            },
            {
              id: 2,
              SKU: "SS003",
              name: "Odin Sofa",
              price: 28000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview3.png",
              previewDescription: "Sleek minimal couch",
              sale: "50",
            },
          ],
          chairs: [
            {
              id: 0,
              SKU: "SS004",
              name: "Nordic Chair",
              price: 1200000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview4.png",
              previewDescription: "Elegant wooden chair",
              sale: "",
            },
            {
              id: 1,
              SKU: "SS005",
              name: "Loki Chair",
              price: 140000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview5.png",
              previewDescription: "Classic dining style",
              sale: "",
            },
            {
              id: 2,
              SKU: "SS006",
              name: "Freya Chair",
              price: 160000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview6.png",
              previewDescription: "Minimalist dining look",
              sale: "30",
            },
          ],
          tables: [
            {
              id: 0,
              SKU: "SS007",
              name: "Midgard Table",
              price: 4500000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview1.png",
              previewDescription: "Small bedside table",
              sale: "50",
            },
            {
              id: 1,
              SKU: "SS008",
              name: "Thor Table",
              price: 5200000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview2.png",
              previewDescription: "Elegant nightstand design",
              sale: "",
            },
            {
              id: 2,
              SKU: "SS009",
              name: "Frigg Table",
              price: 38000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview3.png",
              previewDescription: "Minimalist side table",
              sale: "",
            },
          ],
        },
        living: {
          sofas: [
            {
              id: 0,
              SKU: "LS001",
              name: "Zenith Sofa",
              price: 650000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview4.png",
              previewDescription: "Cozy small sofa",
              sale: "30",
            },
            {
              id: 1,
              SKU: "LS002",
              name: "Aurora Sofa",
              price: 55000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview5.png",
              previewDescription: "Versatile sectional sofa",
              sale: "",
            },
            {
              id: 2,
              SKU: "LS003",
              name: "Eclipse Sofa",
              price: 7000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview6.png",
              previewDescription: "Neutral beige tones",
              sale: "",
            },
          ],
          chairs: [
            {
              id: 0,
              SKU: "LC001",
              name: "Atlas Chair",
              price: 1800000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview1.png",
              previewDescription: "Timeless bedroom design",
              sale: "",
            },
            {
              id: 1,
              SKU: "LC002",
              name: "Helios Chair",
              price: 220000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview2.png",
              previewDescription: "Slim compact frame",
              sale: "",
            },
            {
              id: 2,
              SKU: "LC003",
              name: "Eos Chair",
              price: 2000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview3.png",
              previewDescription: "Tufted fabric chair",
              sale: "30",
            },
          ],
          tables: [
            {
              id: 0,
              SKU: "LT001",
              name: "Orion Table",
              price: 62070000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview4.png",
              previewDescription: "Minimalist side table",
              sale: "50",
            },
            {
              id: 1,
              SKU: "LT002",
              name: "Horizon Table",
              price: 750120500,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview5.png",
              previewDescription: "Minimalist table style",
              sale: "30",
            },
            {
              id: 2,
              SKU: "LT003",
              name: "Nova Table",
              price: 5002200,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview6.png",
              previewDescription: "Spacious dining surface",
              sale: "30",
            },
          ],
        },
        bedroom: {
          sofas: [
            {
              id: 0,
              SKU: "BS001",
              name: "Dream Sofa",
              price: 4000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview1.png",
              previewDescription: "Minimalist side table",
              sale: "",
            },
            {
              id: 1,
              SKU: "BS002",
              name: "Serenity Sofa",
              price: 4501000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview2.png",
              previewDescription: "Warm wooden tones",
              sale: "",
            },
            {
              id: 2,
              SKU: "BS003",
              name: "Luna Sofa",
              price: 500000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview3.png",
              previewDescription: "Classic timeless beauty",
              sale: "",
            },
          ],
          chairs: [
            {
              id: 0,
              SKU: "BC001",
              name: "Selene Chair",
              price: 1800000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview4.png",
              previewDescription: "Strong durable frame",
              sale: "",
            },
            {
              id: 1,
              SKU: "BC002",
              name: "Aurora Chair",
              price: 20000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview5.png",
              previewDescription: "Slim modern legs",
              sale: "30",
            },
            {
              id: 2,
              SKU: "BC003",
              name: "Luna Chair",
              price: 220111000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview6.png",
              previewDescription: "Clean simple lines",
              sale: "",
            },
          ],
          tables: [
            {
              id: 0,
              SKU: "BT001",
              name: "Sol Table",
              price: 35000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview1.png",
              previewDescription: "Rustic wooden nightstand",
              sale: "30",
            },
            {
              id: 1,
              SKU: "BT002",
              name: "Luna Table",
              price: 4000000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview2.png",
              previewDescription: "Modern glossy finish",
              sale: "50",
            },
            {
              id: 2,
              SKU: "BT003",
              name: "Aurora Table",
              price: 4505000,
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
              img: [
                "/assets/img/Asgard sofa 1.png",
                "/assets/img/Asgard sofa 2.png",
                "/assets/img/Asgard sofa 3.png",
                "/assets/img/Asgard sofa 4.png",
                "/assets/img/Asgard sofa 5.png",
              ],
              previewImg: "/assets/img/preview3.png",
              previewDescription: "Sleek marble top",
              sale: "",
            },
          ],
        },
      },
    }),
  });
});

// addButtonFILTER.addEventListener("click", () => {
//   fetch(URL, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       filter: {
//         shopByRoom: {
//           bedroom: ["chairs", "tables", "sofas"],
//           dining: ["chairs", "tables", "sofas"],
//           living: ["chairs", "tables", "sofas"],
//         },
//         size: ["XS", "S", "M", "L", "XL"],
//         color: [
//           "#000000",
//           "#B88E2F",
//           "#808080",
//           "#FFFFFF",
//           "#FFD700",
//           "#8B4513",
//           "#D3D3D3",
//           "#FF69B4",
//           "#816DFA",
//           "#C0C0C0",
//           "#8B0000",
//         ],
//         price: {
//           "0-500.000": { min: 0, max: 500000 },
//           "500.000-5.000.000": { min: 500000, max: 5000000 },
//           "5.000.000-50.000.000": { min: 5000000, max: 50000000 },
//           "50.000.000-550.000.000": { min: 50000000, max: 550000000 },
//         },
//         rating: {
//           1: { min: 1, max: 1.9 },
//           2: { min: 2, max: 2.9 },
//           3: { min: 3, max: 3.9 },
//           4: { min: 4, max: 4.9 },
//           5: { min: 5, max: 5 },
//         },
//       },
//     }),
//   });
// });
