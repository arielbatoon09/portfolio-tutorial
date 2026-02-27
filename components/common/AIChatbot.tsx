"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "bot";
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! I'm your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        role: "bot",
        content: `Thanks for your message: "${userMessage.content}". Since this is a simulation, I'm just showing how I would respond! In a real version, I'd give you specific info about this portfolio.`,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <Card className="!pt-0 mb-4 w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl border-primary/20 animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Bot className="size-5" />
              AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="size-5" />
            </Button>
          </CardHeader>
          <CardContent 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3",
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div className={cn(
                  "size-8 rounded-full flex items-center justify-center shrink-0",
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  {message.role === "user" ? <User className="size-4" /> : <Bot className="size-4" />}
                </div>
                <div className={cn(
                  "rounded-2xl px-4 py-2 max-w-[80%] text-sm",
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground rounded-tr-none" 
                    : "bg-muted text-foreground rounded-tl-none"
                )}>
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3 animate-in fade-in duration-300">
                <div className="size-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                  <Bot className="size-4" />
                </div>
                <div className="bg-muted text-foreground rounded-2xl rounded-tl-none px-4 py-2 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"></span>
                    <span className="ml-2 italic text-muted-foreground">AI is typing...</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form 
              className="flex w-full items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                <Send className="size-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
      
      <Button
        size="icon"
        className={cn(
          "size-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isOpen ? "rotate-90 bg-destructive hover:bg-destructive/90" : "rotate-0"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-6" /> : <Bot className="size-6" />}
      </Button>
    </div>
  );
}
