import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function registerRoutes(app: Express): Promise<Server> {
  // Inquiries API endpoint
  app.post("/api/inquiries", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = insertInquirySchema.parse(req.body);
      
      // Create the inquiry
      const inquiry = await storage.createInquiry(validatedData);

      // Map interest value to label
      const interestLabels: Record<string, string> = {
        research: "Research Collaboration",
        phd: "PhD Program Interest",
        postdoc: "Postdoctoral Positions",
        undergraduate: "Undergraduate Research",
        rotation: "Rotation Student Interest",
        other: "Other"
      };
      const interestLabel = interestLabels[validatedData.interest] || validatedData.interest;

      // Set up Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email content
      const mailOptionsLab = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Inquiry from ${validatedData.name}`,
        text: `You have received a new inquiry:\n\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nOrganization: ${validatedData.organization || "-"}\nInterest: ${interestLabel}\nMessage: ${validatedData.message}`,
      };

      const mailOptionsUser = {
        from: process.env.EMAIL_USER,
        to: validatedData.email,
        subject: "Thank you for contacting Popov Lab!",
        text: `Dear ${validatedData.name},\n\nThank you for reaching out to Popov Lab. We have received your inquiry and will get back to you soon.\n\nHere is a copy of your submission:\n\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nOrganization: ${validatedData.organization || "-"}\nInterest: ${interestLabel}\nMessage: ${validatedData.message}\n\nBest regards,\nPopov Lab Team`,
      };

      // Send emails
      await transporter.sendMail(mailOptionsLab);
      await transporter.sendMail(mailOptionsUser);

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
