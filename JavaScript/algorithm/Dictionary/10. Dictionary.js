//Dictionary(): 개체(Entity)를 저장할 생성자
function Dictionary(items = {}) {
  this.items = items; 
}

//getBuffer(): 모든 개체(Entity) 반환 
Dictionary.prototype.getBuffer = function() {
  return { ...this.items };
}

Dictionary.prototype.clear = function() {
  this.items = {};
}

//size(): 크기 반환 
Dictionary.prototype.size = function() {
  return Object.keys(this.items).length;
}

// has(): 개체 존재 여부 확인 
Dictionary.prototype.has = function(key) {
  //return value in this.items;
  return this.items.hasOwnProperty(key);
}

//set(): 개체(entity) 추가 
Dictionary.prototype.set = function(key, value) {
  this.items[key] = value; 
}

//get(): 개체(entity)의 value 반환
Dictionary.prototype.get = function(key) {
  return this.has(key) ? this.items[key] : undefined; 
}

//remove(): 개체(Entity) 삭제 
Dictionary.prototype.remove = function(key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
}

//keys(): 모든 key 값을 배열 형태로 반환 
Dictionary.prototype.keys = function() {
  return Object.keys(this.items); 
}

//values(): 모든 value 값을 배열 형태로 반환 
Dictionary.prototype.values = function() {
  return Object.values(this.items);
}

Dictionary.prototype.each = function(fn) {
  for (let k in this.items) {
    fn(k, this.items[k]);
  }
}

function printDictionary(key, value) {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
}

let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "James");
dict.set("height", "182");
console.log(dict);
