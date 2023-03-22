//Задача № 1
function cachingDecoratorNew(func) {
let cache = [];

function wrapper(...args) {
    const hash = md5(args); // получаем правильный хеш c помощью функции md5
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
    if (objectInCache) { // если элемент найден
        console.log("Из кэша: " + cache[objectInCache]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[objectInCache];
    }

    let result = func(...args); // в кеше результата нет — придётся считать
    if (!objectInCache){
      cache.push(hash, result); // добавляем элемент с правильной структурой
    } else if (cache.length > 5) { 
      cache.shift() // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  timeoutId = null;
  function wrapper(...args){
    if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => timeoutId = null, delay);
  wrapper.count++;
  
  return func(...args)
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  wrapper.allCount++;

  return wrapper;
}
