const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  printShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PrintShop',
    required: true
  },
  items: [
    {
      itemName: {
        type: String,
        required: true,
        validate: {
          validator: async function (value) {
            const menu = this.parent(); // Reference to the parent document (Menu)
            const isItemNameUnique = menu.items.every((item, index, array) => {
              return array.findIndex((i) => i.itemName === item.itemName) === index;
            });

            // If an existing item with the same itemName is found, return false
            return isItemNameUnique;
          },
          message: 'Item name must be unique within the menu'
        }
      },
      description: {
        type: String
      },
      prices: [
        {
          size: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          }
        }
      ],
      category: {
        type: String
      }
     
    }
  ]
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
