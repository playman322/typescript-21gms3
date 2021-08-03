// 1. Add typings/access modifiers to the fruitBasket constant
const enum Fruit {
  BANANA = 'banana',
  ORANGE = 'orange',
  KIWI = 'kiwi',
  APPLE = 'apple'
}
const fruitBasket = {
  banana: Fruit.BANANA,
  orange: Fruit.ORANGE,
  kiwi: Fruit.KIWI,
  apple: Fruit.APPLE
};

// 2. Add typings/access modifiers to the Person class
class Person {
  name: string;
  gender: string;
  age: number;
  likes: string[];
  public constructor(name, gender, age, likes) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.likes = likes;
  }

  public introduce(): string {
    const { name, gender, age, likes } = this;
    const goodLookingMap: Map<string, string> = new Map([['male', 'handsome'], ['female', 'cute']]);
    return `
      Hello, I'm ${name}, ${age} years old, I like: ${likes.join(', ')}. 
      As you can see, I'm quite ${goodLookingMap.get(gender)} too!
    `;
  }
}

const Dima = new Person('Dima', 'male', 22, ['video games', 'martial arts']);

// 3. Add typings/access modifiers to MovieService class
class MovieService {
  logger: LoggerOne | LoggerTwo;
  constructor(logger) {
    this.logger = logger;
  }
  public getMovies(): Promise<string[]> {
    return Promise.resolve(['Jaws', 'Spider-Man']).catch(err => {
      this.logger.log(err);
      return [];
    });
  }
}

class LoggerOne {
  public log(err: Error) {
    console.log('sending logs to log storage 1', err);
  }
}
class LoggerTwo {
  public log(err: Error) {
    console.log('sending logs to log storage 2', err);
  }
}

const movieService1 = new MovieService(new LoggerOne());
const movieService2 = new MovieService(new LoggerTwo());
