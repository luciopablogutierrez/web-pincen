"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { sendContactMessage } from "@/ai/flows/contact-flow";
import { ContactFormInputSchema } from "@/ai/schemas/contact-schema";


export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof ContactFormInputSchema>>({
    resolver: zodResolver(ContactFormInputSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormInputSchema>) {
    setIsSubmitting(true);
    try {
        const result = await sendContactMessage(values);
        toast({
            title: "Transmission Received",
            description: result.message,
            variant: "default"
        });
        form.reset();
    } catch(error: any) {
        toast({
            title: "Transmission Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
        });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <div className="cyber-card neon-border-purple p-8 rounded-lg bg-black/40">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="neon-text-blue text-lg">Cyber-alias</FormLabel>
                <FormControl>
                    <Input placeholder="Your callsign" {...field} className="bg-transparent text-lg p-3 neon-border-blue" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="neon-text-blue text-lg">Secure Channel</FormLabel>
                <FormControl>
                    <Input placeholder="your.uplink@protocol.net" {...field} className="bg-transparent text-lg p-3 neon-border-blue"/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="neon-text-blue text-lg">Message Packet</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="Encode your transmission..."
                    className="bg-transparent text-lg p-3 min-h-[150px] neon-border-blue"
                    {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <button 
              type="submit" 
              className="cyber-btn neon-border-green w-full py-3 rounded-md font-bold neon-text-green hover:neon-glow-green disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isSubmitting ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
            </button>
        </form>
        </Form>
    </div>
  );
}
