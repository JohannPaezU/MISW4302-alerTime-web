import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AlerTimeService {
  private users: User[] = [];

  constructor() {
    const defaultUser: User = new User(
      'Johann Sebastian',
      'Paez Campos',
      'js.paezc1@uniandes.edu.co',
      '123'
    );
    this.users.push(defaultUser);
  }

  getUsers = () => this.users;  
  getUser = (email: string, password: string) =>
    this.users.find(
      (user) => user.email === email && user.password === password
    );
  getUserByEmail = (email: string | null) => this.users.find((user) => user.email === email);
  registerUser = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const user = this.users.find((user) => user.email === email);
    if (user) {
      throw new Error('El usuario ya existe.');
    }
    const newUser = new User(firstName, lastName, email, password);
    this.users.push(newUser);
    return newUser;
  };
  getDefaultUser = () => this.users[0];
}
