'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles sending a contact message.
 */

import {ai} from '@/ai/genkit';
import {
  ContactFormInput,
  ContactFormInputSchema,
  ContactFormOutput,
  ContactFormOutputSchema,
} from '@/ai/schemas/contact-schema';
import {z} from 'genkit';

const contactPrompt = ai.definePrompt({
  name: 'contactPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: z.object({response: z.string()})},
  prompt: `You are a helpful assistant for NexusAI. A user is contacting you with the following information:
    
    Name: {{{name}}}
    Email: {{{email}}}
    Message: {{{message}}}
    
    Generate a short, friendly, cyber-punk themed acknowledgement message for them.`,
});

const sendContactMessageFlow = ai.defineFlow(
  {
    name: 'sendContactMessageFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    console.log(
      `Received contact message from ${input.name} <${input.email}>: ${input.message}`
    );

    const {output} = await contactPrompt(input);

    // In a real application, you would integrate with an email service or CRM here.
    // For this example, we'll just log it and return a success message.
    return {
      success: true,
      message:
        output?.response ||
        "Transmission received. We'll interface with your uplink soon.",
    };
  }
);

export async function sendContactMessage(
  input: ContactFormInput
): Promise<ContactFormOutput> {
  return sendContactMessageFlow(input);
}
