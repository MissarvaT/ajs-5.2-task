/* eslint-disable no-plusplus */
export default function destructureFunc(destructor) {
  const { special } = destructor;
  const result = [];
  for (let i = 0; i < special.length; i++) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    result.push({
      id, name, icon, description,
    });
  }
  return result;
}
