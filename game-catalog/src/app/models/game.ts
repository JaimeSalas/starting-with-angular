export class Game {
  name!: string; // Public
  dateRelease!: Date;
  imageUrl?: string;

  // JS
  // function(arg1) {}
  // function(arg1, arg2) {}
  // slice
  // splice
  constructor(name?: string, dateRelease?: string, imageUrl?: string) {
    this.name = name as string;
    this.dateRelease = new Date(dateRelease as string);
    this.imageUrl = imageUrl;
  }

  getYearsFromRelease(): number {
    const milliseconds = Date.now() - this.dateRelease.getTime();
    return this.converToYears(new Date(milliseconds));
  }

  private converToYears = (date: Date) =>
    Math.abs(date.getUTCFullYear() - 1970);
}

// interface MyInterface {
//     propA: string;
//     methodB: () => void;
// }

// // const ts -> ro
// // let ts -> rw

// const t: MyInterface = {
//     methodB: () => {},
//     propA: 'patata'
// } 

// class B implements MyInterface {
//     propA: string = '';
//     methodB = () => {};
// }
