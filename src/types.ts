// src/types.ts

// Interface for a source entity
export interface Source {
    id: string;
    name: string;
    url: string;
}

// Interface for a category
export interface Category {
    id: string;
    name: string;
    description?: string;
}

// Interface for a tag
export interface Tag {
    id: string;
    name: string;
}

// Interface for a chat message
export interface ChatMessage {
    id: string;
    senderId: string;
    content: string;
    timestamp: Date;
}

// Interface for a chat session
export interface ChatSession {
    id: string;
    userId: string;
    messages: ChatMessage[];
    startTime: Date;
    endTime?: Date;
}