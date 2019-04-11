export class Idea{
  moneyRisen: number = 0;
  id: number;
  constructor(public name: string, public category: string, public userName: string, public description: string, public moneyExpected: number){}
}