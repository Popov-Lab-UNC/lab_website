import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Inquiries API endpoint
  app.post("/api/inquiries", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = insertInquirySchema.parse(req.body);
      
      // Create the inquiry
      const inquiry = await storage.createInquiry(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Inquiry submitted successfully",
        inquiry
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid inquiry data",
          errors: error.errors
        });
      }
      
      // Handle other errors
      console.error("Error creating inquiry:", error);
      res.status(500).json({
        message: "An error occurred while submitting your inquiry"
      });
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        message: "An error occurred while fetching inquiries"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
