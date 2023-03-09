import { AUTH_ERROR } from '@/infrastructure/constants';

export class UnauthorizedError extends Error {
  constructor() {
    super();
    this.message = AUTH_ERROR;
  }
}
