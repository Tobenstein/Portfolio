import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdapplbj";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Formspree error:", err);
      setError("Failed to send message. Please try again later.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 fade-in-up">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4 golden-glow" />
        <p className="text-primary tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
          Message sent successfully!
        </p>
        <p className="text-xs text-muted-foreground mt-2 italic">
          "The message is the message"
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-sm text-destructive">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-xs text-muted-foreground mb-1.5">
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="bg-card/50 border-primary/20 focus-visible:border-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs text-muted-foreground mb-1.5">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="bg-card/50 border-primary/20 focus-visible:border-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs text-muted-foreground mb-1.5">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
            rows={4}
            className="bg-card/50 border-primary/20 focus-visible:border-primary transition-all resize-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 golden-glow-hover transition-all"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </Button>
    </form>
  );
}
