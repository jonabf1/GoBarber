import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';
import File from '../models/File';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Make sure your data is correct' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (process.env.NODE_ENV === 'development') {
      // if (!user) {
      //   return res.status(401).json({ error: 'User does not exist' });
      // }
  
      // if (!(await user.checkPassword(password))) {
      //   return res.status(401).json({ error: "Since passwords don't match" });
      // }

      // em produção, jogar esse código para o ELSE abaixo e descomentar
      // acima
      if (!user || !(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Email or password are incorrect' });
      }
    }

    else{
    }


    const { id, name, avatar, provider } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
        provider,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
