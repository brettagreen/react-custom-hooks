import { v4 as uuid } from 'uuid';

const dataFilter = (data, deck) => {
  if (deck === 'cards') {
    return { id: uuid(), image: data.cards[0].image };
  } else {
    //{ id, front, back, name, stats: [{ name, value }, ...] }
    return {id: uuid(), front: data.sprites.front_default, back: data.sprites.back_default, name: data.name, stats: data.stats};
  }

}

export default dataFilter;