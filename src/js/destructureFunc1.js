/* eslint-disable no-plusplus */
export default function destructureFunc(destructor) {
  const weaponsArray = [];
  for (let i = 0; i < destructor.length; i++) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = destructor[i];
    weaponsArray[i] = [{ id }, { name }, { icon }, { description }];
  }
  return weaponsArray;
}
