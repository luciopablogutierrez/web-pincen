/**
 * @fileOverview Schemas and types for the contact form flow.
 */
import {z} from 'genkit';

export const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the person.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;
