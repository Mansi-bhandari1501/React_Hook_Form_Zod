import { z } from "zod";

export const signUpSchema = z
  .object({
    surveyName: z.string().nonempty("Survey Name is required"),
    abbrevation: z.string().nonempty("Survey Abbrevation is required"),
    type: z.string().nonempty("Survey Type is required"),
    modality: z.string().nonempty("Survey Modality is required"),
    language: z.string().nonempty("Survey Language is required"),
   
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
