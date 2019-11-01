import models from '../../../database/models';
import { errorHandling } from '../utils/errorHandling';

export const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll({});
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await models.User.findOne({
      where: { id: userId },
      include: [
        {
          model: models.Post,
          as: 'posts'
        }
      ]
    });
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).json(errorHandling('User with the specified ID does not exists'));
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await models.User.create(req.body);

    return res.status(201).json({
      user
    });
  } catch (error) {
    return res.status(500).json({ error: errorHandling(error.message) });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const [updated] = await models.User.update(req.body, {
      where: { id: userId }
    });
    if (updated) {
      const updatedUser = await models.User.findOne({ where: { id: userId } });
      return res.status(200).json({ user: updatedUser });
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).json({ error: errorHandling(error.message) });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleted = await models.User.destroy({
      where: { id: userId }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).json({ error: errorHandling(error.message) });
  }
};
