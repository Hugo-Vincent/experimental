export class ExtendedInputDto {
  address: string;
  value: number;

  constructor(address: string, value: number) {
    this.address = address;
    this.value = value;
  }
}
