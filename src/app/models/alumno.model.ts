export class Alumno {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email: string,
      public birthdate: Date,
      public course: string,
      public note: number,
      public approbed: boolean,
    ) {}
  }
  
