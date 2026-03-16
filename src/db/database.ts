import Dexie from 'dexie';

// Define the Dexie database for the Research Database
class ResearchDatabase extends Dexie {
    sources!: Dexie.Table<{ id: number; name: string }, number>;
    categories!: Dexie.Table<{ id: number; name: string }, number>;
    tags!: Dexie.Table<{ id: number; name: string }, number>;
    chatSessions!: Dexie.Table<{ id: number; sessionData: object }, number>;

    constructor() {
        super('ResearchDatabase');
        this.version(1).stores({
            sources: '++id,name',
            categories: '++id,name',
            tags: '++id,name',
            chatSessions: '++id,sessionData'
        });
        this.sources = this.table('sources');
        this.categories = this.table('categories');
        this.tags = this.table('tags');
        this.chatSessions = this.table('chatSessions');
    }
}

const db = new ResearchDatabase();
export default db;