const products = [
  {
    ean: '4053500002704',
    manufacturer_title: 'Stolichnaya',
    datatype: 'makaira-productgroup',
    price: 19.95,
    manufacturerid: 'a92c2fafa451c079cea1a3ba7d8e85f6',
    images: [
      'https://www.ludwig-von-kapff.de/media/catalog/product/6/6/661002-stolichnaya-1liter.png',
    ],
    title: 'Stolichnaya Vodka 40% vol - 1 L',
    url: '/stolichnaya-40-1-0-l-661002.html',
    longdesc:
      'Stolichnaya – oder auch kurz Stoli, wie er von seinen Fans liebevoll genannt wird – bedeutet „Vodka aus der Hauptstadt“. Er wurde bereits vor 100 Jahren vom staatlichen Wein-Warenhaus in Moskau an den Kreml geliefert. Damals wie heute wird zu seiner Herstellung nur feinster russischer Winterweizen und Roggen verwendet, in einem 75-stündigen Prozess fermentiert und anschließend dreifach destilliert. Seinen sanften Charakter und die kristallklare Transparenz verdankt Stolichnaya der traditionellen Filtration mit Quarzsand und russischer Birkenholzkohle. Sowohl pur auf Zimmertemperatur oder auf Eis ist Stolichnaya ein ganz besonderer Genuss.',
    shortdesc: 'Test 123',
  },
  {
    ean: '4053500002704',
    manufacturer_title: 'Stolichnaya',
    datatype: 'makaira-productgroup',
    price: 19.95,
    manufacturerid: 'a92c2fafa451c079cea1a3ba7d8e85f6',
    images: [
      'https://www.ludwig-von-kapff.de/media/catalog/product/6/6/661002-stolichnaya-1liter.png',
    ],
    title: 'Stolichnaya Vodka 40% vol - 1 L',
    url: '/stolichnaya-40-1-0-l-661002.html',
    longdesc:
      'Stolichnaya – oder auch kurz Stoli, wie er von seinen Fans liebevoll genannt wird – bedeutet „Vodka aus der Hauptstadt“. Er wurde bereits vor 100 Jahren vom staatlichen Wein-Warenhaus in Moskau an den Kreml geliefert. Damals wie heute wird zu seiner Herstellung nur feinster russischer Winterweizen und Roggen verwendet, in einem 75-stündigen Prozess fermentiert und anschließend dreifach destilliert. Seinen sanften Charakter und die kristallklare Transparenz verdankt Stolichnaya der traditionellen Filtration mit Quarzsand und russischer Birkenholzkohle. Sowohl pur auf Zimmertemperatur oder auf Eis ist Stolichnaya ein ganz besonderer Genuss.',
    shortdesc: 'Test 123',
  },
]

export default [
  {
    name: 'Colorized',
    props: {
      variant: 'colorized',
      products,
    },
  },
  {
    name: 'White',
    props: {
      variant: 'white',
      products,
    },
  },
]
