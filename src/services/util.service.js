Set.prototype.toggle = function (item) {
  if (this.has(item)) this.delete(item);
  else this.add(item);
};

const load = (key) => {
  return JSON.parse(localStorage.getItem(key) || null);
};

const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const utilService = { load, save };
