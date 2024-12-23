import express from "express";
import profileController from "@/controllers/profile/profile.controller";
import { validateData } from "@/middlewares";
import {
  createProfileBodySchema,
  createProfileParamsSchema,
  deleteProfileParamsSchema,
  getProfileDataParamsSchema,
  getProfileParamsSchema,
} from "@/schemas";

const profileRouter = express.Router();

profileRouter.get(
  "/users/:user_guid/profiles",
  validateData({ params: getProfileParamsSchema }),
  profileController.getProfile
);

profileRouter.post(
  "/users/:user_guid/profiles",
  validateData({ params: createProfileParamsSchema, body: createProfileBodySchema }),
  profileController.createProfile
);

profileRouter.delete(
  "/users/:user_guid/profiles/:profile_guid",
  validateData({ params: deleteProfileParamsSchema }),
  profileController.deleteProfile
);

profileRouter.get(
  "/users/:user_guid/profiles/:profile_guid",
  validateData({ params: getProfileDataParamsSchema }),
  profileController.getProfileData
);

export default profileRouter;
