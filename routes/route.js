import { Router } from 'express';

const router = Router();

// Sample exam data
const exams = [
  { id: 1, name: 'SYSAD Activity', date: '2025-04-05' },
  { id: 2, name: 'ELNET Activity', date: '2025-04-10' },
  { id: 3, name: 'TECHNO Activity', date: '2025-04-10' }
];

// Helper function to find an exam by ID
const findExamById = (id) => exams.find(exam => exam.id === id);

// Base API route
router.get('/exam-group', (req, res) => {
  res.json({ message: "Group D api" });
});

// Get all exams
router.get('/exams', (req, res) => {
  res.json(exams);
});