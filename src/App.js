import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],

      currentItems: [],

      items: [
        {
          id: 1,
          title: 'The Lilacs by M.Vrubel',
          img: 'art1Thmb.jpg',
          description: 'Oil Paint on canvas',
          dimention: '1.6 m x 1.77 m',
          category: 'art',
          price: '900.00',
        },
        {
          id: 2,
          title: 'Whanau by De Jong',
          img: 'art2Thmb.jpg',
          description: 'print on canvas',
          dimention: '60 cm x 35 cm',
          category: 'art',
          price: '49.99',
        },
        {
          id: 3,
          title: 'Sunflowers embroidery by G Mark',
          img: 'art3Thmb.jpg',
          description: 'hand embroidery on canvas',
          dimention: '80 cm x 65 cm',
          category: 'art',
          price: '150.00',
        },
        {
          id: 4,
          title: 'NZ-Way to Future by Galia',
          img: 'art4Thmb.jpg',
          description: 'acrilic',
          dimention: '110 cm x 85 cm',
          category: 'art',
          price: '80.00',
        },
        {
          id: 5,
          title: 'Patagonia Men Iron Hemp',
          img: 'cloth1Thmb.jpg',
          description: 'Ink black, size large, style No. 27852-M',
          dimention: '6.1 inch',
          category: 'cloth',
          price: '34.99',
        },
        {
          id: 6,
          title: 'H&H women daily',
          img: 'cloth2Thmb.jpg',
          description: 'New Zealand made',
          dimention: 'medium small',
          category: 'cloth',
          price: '19.00',
        },
        {
          id: 7,
          title: 'Ksiusha',
          img: 'cloth3Thmb.jpg',
          description: 'from Sapeer Mayron',
          dimention: 'size 10',
          category: 'cloth',
          price: '99.99',
        },
        {
          id: 8,
          title: 'DiVAs stilish bridg for all',
          img: 'cloth4Thmb.jpg',
          description:
            'great as classy or casual ready-made exclusively for Nifty customers',
          dimention: '80 cm x 65 cm',
          category: 'cloth',
          price: '44.99',
        },
        {
          id: 9,
          title: 'Selena Moderna mirror',
          img: 'decor1Thmb.jpg',
          description: 'artdeco mirror with aluminum alloy frame NZ made',
          dimention: '90 cm x 90 cm',
          category: 'decor',
          price: '120.00',
        },
        {
          id: 10,
          title: 'Grand Shenandoah Bell with enamel',
          img: 'decor2Thmb.jpg',
          description: 'vintage europian bell - travel souvenir',
          dimention: '15 cm height',
          category: 'decor',
          price: '9.50',
        },
        {
          id: 11,
          title: 'Buddhist Elephant Figurine',
          img: 'decor3Thmb.jpg',
          description:
            'bring some Zen calm to your home with this bronze small statue',
          dimention: '19 cm',
          category: 'decor',
          price: '71.99',
        },
        {
          id: 12,
          title: 'Lite Menora',
          img: 'decor4Thmb.jpg',
          description: 'modern multibranched candelabra',
          dimention: '25 cm',
          category: 'decor',
          price: '26.20',
        },
        {
          id: 13,
          title: 'Pandora Wealth Bracelet',
          img: 'jwlry1Thmb.jpg',
          description:
            'brings opportunities and financial abundance for its wearer',
          dimention: 'medium to large',
          category: 'jewelry',
          price: '24.95',
        },
        {
          id: 14,
          title: 'Drop Earrings in Sterling Silver',
          img: 'jwlry2Thmb.jpg',
          description: 'combine classic design with a contemporary twist',
          dimention: '5 cm',
          category: 'jewelry',
          price: '109.00',
        },
        {
          id: 15,
          title: 'Max Fry Round Cut Black Solitaire',
          img: 'jwlry3Thmb.jpg',
          description: 'sterling silver ring with amaizing details',
          dimention: 'N-1/2 J-1/2',
          category: 'jewelry',
          price: '29.99',
        },
        {
          id: 16,
          title: 'Gustav Klimt The Kiss Art Earrings',
          img: 'jwlry4Thmb.jpg',
          description: 'classical teardrop dangle golden tears painting glass',
          dimention: 'just over 3.5 cm',
          category: 'jewelry',
          price: '73.48',
        },
        {
          id: 17,
          title: 'Panda Yaa Boo',
          img: 'toy1Thmb.jpg',
          description: 'brand Nici quality toy for all age kids',
          dimention: '25 cm tall',
          category: 'toy',
          price: '30.99',
        },
        {
          id: 18,
          title: 'Vintage bear',
          img: 'toy2Thmb.jpg',
          description: 'cute I love my bear',
          dimention: '12 cm',
          category: 'toy',
          price: '18.99 + 5.00 for the box',
        },
        {
          id: 19,
          title: 'Calming Dogi',
          img: 'toy3Thmb.jpg',
          description:
            'perfect for indoor play made from quality non-toxic materials',
          dimention: '15cmx8cmx40cm',
          category: 'toy',
          price: '25.59',
        },
        {
          id: 20,
          title: 'Quality Plush Bear',
          img: 'toy4Thmb.jpg',
          description:
            'handmade from antic plush proudly made by Rozcrafts in Rotorua, NZ',
          dimention: '80 cm',
          category: 'toy',
          price: '69.50',
        },
      ],

      showFullItem: false,
      fullItem: {},
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <showFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
