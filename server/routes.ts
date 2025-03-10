import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    
    // In a real world scenario, you would store this in a database or send an email
    // For now, just sending a success response
    return res.status(200).json({ message: 'Message received! We will get back to you soon.' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
