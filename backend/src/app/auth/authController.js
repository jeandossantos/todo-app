import { HttpStatus } from 'http-exception-library';

export default class AuthController {
  #authService;

  constructor({ authService }) {
    this.#authService = authService;
  }

  async register(request, response) {
    const { username, email, password, confirmPassword } = request.body;

    const payload = await this.#authService.register({
      username,
      email,
      password,
      confirmPassword,
    });

    return response.status(HttpStatus.CREATED).json(payload);
  }

  async login(request, response) {
    const { email, password } = request.body;
    const { refreshToken, accessToken } = await this.#authService.login({
      email,
      password,
    });

    // Create secure cookie with refresh token
    response.cookie('jwt', refreshToken, {
      httpOnly: true, //accessible only by web server
      secure: true, //https
      sameSite: 'None', //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });

    // Send accessToken containing username and roles
    return response.json({ accessToken });
  }
}
