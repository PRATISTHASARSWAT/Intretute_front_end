'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Question {
  id: string;
  question: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tips: string[];
  sampleAnswer: string;
}

interface PracticeSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
}

const PracticeSimulator = ({ isOpen, onClose, selectedCategory }: PracticeSimulatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockQuestions: Question[] = [
    {
      id: '1',
      question: 'Tell me about yourself and your professional background.',
      category: 'Behavioral',
      difficulty: 'Beginner',
      tips: [
        'Keep it concise (2-3 minutes)',
        'Focus on relevant experience',
        'End with why you\'re interested in this role'
      ],
      sampleAnswer: 'I\'m a software engineer with 5 years of experience in full-stack development. I\'ve worked on building scalable web applications and leading small teams. I\'m passionate about creating user-friendly solutions and I\'m excited about this opportunity because...'
    },
    {
      id: '2',
      question: 'Describe a challenging project you worked on and how you overcame obstacles.',
      category: 'Behavioral',
      difficulty: 'Intermediate',
      tips: [
        'Use the STAR method (Situation, Task, Action, Result)',
        'Be specific about your role',
        'Quantify results when possible'
      ],
      sampleAnswer: 'In my previous role, we faced a critical system outage affecting 10,000 users. I led the incident response team, identified the root cause within 2 hours, and implemented a fix that restored service. We also created monitoring alerts to prevent future occurrences.'
    },
    {
      id: '3',
      question: 'How do you handle disagreements with team members or managers?',
      category: 'Behavioral',
      difficulty: 'Intermediate',
      tips: [
        'Show emotional intelligence',
        'Emphasize collaboration',
        'Provide a real example'
      ],
      sampleAnswer: 'I believe in open communication and data-driven decisions. When I disagree, I first seek to understand the other perspective, then present my viewpoint with supporting evidence. For example, when my manager wanted to rush a feature release...'
    }
  ];

  const currentQuestion = mockQuestions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswer('');
      setShowFeedback(false);
    }
  };

  const handleSubmitAnswer = () => {
    setShowFeedback(true);
  };

  const handleRecording = () => {
    if (!isHydrated) return;
    
    if (isRecording) {
      setIsRecording(false);
      setRecordingTime(0);
    } else {
      setIsRecording(true);
    }
  };

  useEffect(() => {
    if (!isHydrated) return;
    
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, isHydrated]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-brand-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Practice Interview</h2>
            <p className="text-sm text-text-secondary mt-1">
              Question {currentQuestionIndex + 1} of {mockQuestions.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" className="text-text-secondary" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
              {currentQuestion.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              currentQuestion.difficulty === 'Beginner' ? 'bg-success/10 text-success' :
              currentQuestion.difficulty === 'Intermediate'? 'bg-warning/10 text-warning' : 'bg-error/10 text-error'
            }`}>
              {currentQuestion.difficulty}
            </span>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              {currentQuestion.question}
            </h3>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-primary">💡 Tips:</p>
              <ul className="space-y-1">
                {currentQuestion.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-text-primary">Your Answer:</label>
              <button
                onClick={handleRecording}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isRecording 
                    ? 'bg-error text-error-foreground' 
                    : 'bg-brand-primary text-white hover:bg-brand-primary/90'
                }`}
              >
                <Icon 
                  name={isRecording ? 'StopIcon' : 'MicrophoneIcon'} 
                  size={20} 
                  variant="solid" 
                />
                {isHydrated && isRecording ? formatTime(recordingTime) : 'Record Audio'}
              </button>
            </div>
            
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer here or use voice recording..."
              className="w-full h-40 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
            />
          </div>

          {!showFeedback ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!userAnswer.trim()}
              className="w-full px-6 py-3 bg-success text-success-foreground rounded-lg font-semibold hover:bg-success/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Get AI Feedback
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-success/10 border border-success/20 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="SparklesIcon" size={24} variant="solid" className="text-success" />
                  <h4 className="font-bold text-text-primary">AI Feedback</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-1">Strengths:</p>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                        <span>Good structure and clear communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                        <span>Relevant examples provided</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-1">Areas for Improvement:</p>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li className="flex items-start gap-2">
                        <Icon name="LightBulbIcon" size={16} variant="solid" className="text-warning mt-0.5 flex-shrink-0" />
                        <span>Consider adding more specific metrics or results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="LightBulbIcon" size={16} variant="solid" className="text-warning mt-0.5 flex-shrink-0" />
                        <span>Try to keep response within 2-3 minutes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-bold text-text-primary mb-3">Sample Answer:</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {currentQuestion.sampleAnswer}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Icon name="ArrowLeftIcon" size={20} variant="outline" />
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === mockQuestions.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Next Question
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSimulator;