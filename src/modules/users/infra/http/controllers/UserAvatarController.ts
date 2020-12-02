import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
  public async update(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);
    const user = await updateUserAvatarService.execute({
      userId,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
}
